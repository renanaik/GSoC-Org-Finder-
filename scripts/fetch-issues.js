const fs = require('fs');

const ORGS = [
  'llvm', 'gcc-mirror', 'haskell', 'rust-lang', 'apple',
  'python', 'django', 'drupal', 'wagtail', 'wikimedia',
  'metasploit-framework', 'OWASP', 'rizinorg',
  'kubeflow', 'kubevirt', 'qemu', 'cncf',
  'tensorflow', 'opencv', 'arduino', 'freebsd',
  'kubernetes', 'apache', 'mozilla', 'gnome',
  'kde', 'ubuntu', 'debian', 'gentoo', 'fedora'
];

async function fetchIssues() {
  const results = [];
  const seenIssueUrls = new Set();

  for (const org of ORGS) {
    try {
      const headers = {
        Accept: 'application/vnd.github+json',
        'User-Agent': 'gsoc-org-finder-actions'
      };

      if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
      }

      const query = encodeURIComponent(`org:${org} is:issue label:"good first issue" state:open archived:false`);
      const res = await fetch(
        `https://api.github.com/search/issues?q=${query}&per_page=30&sort=updated&order=desc`,
        { headers }
      );

      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(`GitHub API ${res.status}: ${errorBody.slice(0, 200)}`);
      }

      const data = await res.json();

      if (Array.isArray(data.items)) {
        const freshOpenIssues = data.items
          .filter((issue) => issue.state === 'open' && !seenIssueUrls.has(issue.html_url))
          .slice(0, 10)
          .map((issue) => ({
            org,
            title: issue.title,
            url: issue.html_url,
            repo: issue.repository_url.split('/').slice(-2).join('/'),
            labels: issue.labels.map((l) => l.name),
            comments: issue.comments,
            created_at: issue.created_at,
            updated_at: issue.updated_at,
            language: null
          }));

        freshOpenIssues.forEach((issue) => seenIssueUrls.add(issue.url));
        results.push(...freshOpenIssues);
      }

      await new Promise((r) => setTimeout(r, 300));
    } catch (e) {
      console.error(`Failed for ${org}:`, e.message);
    }
  }

  if (!fs.existsSync('./data')) fs.mkdirSync('./data', { recursive: true });

  fs.writeFileSync(
    './data/issues.json',
    JSON.stringify({ updated_at: new Date().toISOString(), issues: results }, null, 2)
  );

  console.log(`✅ Saved ${results.length} issues`);
}

fetchIssues();

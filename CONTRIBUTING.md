Contributing Guide

Project Philosophy

This repository follows a zero-build, zero-dependency philosophy.

Principles

No build tools

No unnecessary dependencies

Minimal runtime overhead

Simple, readable, maintainable code

Fast client-side performance

Minimal API usage wherever possible


When contributing, avoid introducing libraries, frameworks, bundlers, or unnecessary abstractions unless they are clearly justified.


---

Architecture

The project is built using Vanilla HTML/CSS/JavaScript + Vercel Edge Functions.

Core Stack

Layer	Technology

Frontend	Vanilla HTML/CSS/JS
Hosting	Vercel
Backend	Vercel Edge Functions
Data	Static JSON + GitHub API
Analytics	localStorage only


Architecture Goals

Lightweight runtime

No build process

Edge-compatible APIs

Fast initial page load

Fully static-first deployment


All contributions should remain compatible with the existing architecture.


---

Local Development

Install Vercel CLI

npm install -g vercel

Clone Repository

git clone https://github.com/S3DFX-CYBER/GSoC-Org-Finder-.git
cd GSoC-Org-Finder-

Run Local Development Server

vercel dev

This simulates the Vercel Edge runtime locally.


---

Repository Structure

GSoC-Org-Finder-
├── api/
│   └── github.js
├── agent/
│   ├── scripts/
│   └── tenet_agent/
├── data/
├── src/
│   ├── js/
│   ├── assets/
│   └── styles.css
├── index.html
├── sw.js
└── README.md


---

How to Start Contributing

Step 1 — Find an Issue

Go to the repository Issues tab and filter using labels:

level-1

level-2

level-3

gssoc26

nsoc26



---

Step 2 — Request Assignment

Comment ONE of the following:

/assign

or

assign me


---

Step 3 — Wait for Bot Validation

The assignment bot automatically validates:

issue quality

duplicate/spam detection

contributor eligibility

active issue count

contribution program

level restrictions


Do NOT start work before assignment.


---

🤖 Smart Assignment System

This repository uses automated contributor management workflows.


---

Supported Commands

Command	Action

/assign	Request assignment
assign me	Request assignment
/unassign	Remove assignment
unassign me	Remove assignment



---

📌 Mandatory Program Declaration

Contributors MUST clearly mention whether they are contributing under:

GSSoC

NSoC


Example:

I want to work on this issue under GSSoC.

or

I would like to contribute under NSOC.

If not mentioned, the assignment bot will reject the assignment request.


---

⏳ GSSoC Assignment Restriction

Important

GSSoC issue assignments are only allowed after:

15 May 2026 — 12:00 AM IST

Before that time:

GSSoC contributors cannot claim issues

the bot will automatically reject assignment attempts

contributors will receive an automated reminder message


NSoC contributors are unaffected.


---

🧠 Automatic Issue Validation

The repository automatically detects and blocks:

duplicate issues

AI-slop issues

spam reports

copied template spam

prompt leakage

meaningless low-quality issues

bot-generated issue spam


Issues may be automatically:

labeled

closed

redirected to original issues



---

🚫 Self-Assignment Restriction

Do NOT self-assign issues using the GitHub UI.

Assignments are handled ONLY through the automation workflow.

Manual self-assignment may be removed automatically.


---

📌 Maximum Active Assignments

To maintain fairness:

Contributors may only hold:

Maximum 3 assigned issues at once

The assignment bot automatically checks this.

If you already have 3 active issues, new assignments will be rejected until progress is made.


---

🔄 PR Consolidation Rule

Contributors are encouraged to combine:

1–2 related fixes

small connected improvements


into a single focused PR instead of opening many tiny PRs.

Low-effort PR spam may be rejected.


---

Contribution Levels

🟢 Level 1 — Beginner Friendly

Open to everyone.

Examples:

UI improvements

small bug fixes

accessibility improvements

documentation improvements

responsive tweaks



---

🟡 Level 2 — Intermediate

Requires repository understanding.

Examples:

filtering logic

analytics improvements

caching improvements

sorting/search enhancements

API improvements



---

🔴 Level 3 — Advanced

Restricted to experienced contributors.

Requirements:

minimum 1 merged PR in this repository

strong understanding of architecture

understanding of Edge Functions


Examples:

architecture changes

performance optimization

security-sensitive logic

major backend improvements


The assignment bot automatically validates eligibility.


---

⚠️ NSoC'26 & GSSoC'26 Contribution Standards

This project officially participates in:

NSoC'26

GSSoC'26


All contributors must maintain contribution quality and fairness.


---

❌ Strictly Prohibited

The following may result in rejection or disqualification:

AI-generated PRs without understanding

fake complexity

meaningless documentation spam

multiple tiny PRs

copied contributions

template spam

low-quality PR farming

claiming issues without intention to work

opening duplicate PRs/issues

unnecessary dependency additions



---

✅ What Makes a Good Contribution

Strong contributions usually include:

meaningful bug fixes

useful features

performance improvements

accessibility improvements

maintainable refactors

high-quality documentation improvements

responsive/mobile improvements

testing improvements


Before opening a PR ask:

> Does this meaningfully improve the project?




---

Pull Request Workflow

Before Opening a PR

Ensure:

issue is assigned to you

work is complete

changes are tested

PR follows the template



---

🔗 Linking Issues is Mandatory

Your PR MUST include:

Closes #issue-number

PRs without linked issues may be automatically closed.


---

🧾 Required PR Templates

Contributors MUST use the proper template:

GSSoC PR Template

NSoC PR Template


The validation bot checks for:

related issue section

testing section

checklist

program declaration

conventional commit title format


Missing sections may trigger warnings.


---

Conventional Commit Format

Format

type: short description

Examples

feat: improve mobile responsiveness
fix: resolve issue modal overflow
docs: update contribution guide
refactor: simplify issue filtering


---

Common Commit Types

Type	Description

feat	New feature
fix	Bug fix
docs	Documentation
style	Styling/UI
refactor	Internal cleanup
perf	Performance
ci	Workflow/configuration
chore	Maintenance



---

📋 PR Checklist

Before submitting:

[ ] Issue is assigned to me

[ ] PR links an issue using Closes #N

[ ] I mentioned my contribution program

[ ] No unnecessary dependencies added

[ ] Changes are minimal and focused

[ ] Code follows repository architecture

[ ] I tested the changes locally

[ ] I understand the code I submitted


For UI changes:

[ ] Screenshots attached



---

🧪 Testing

Before submitting:

vercel dev

Verify:

Edge functions work

no build step introduced

no broken UI

responsive layout works

existing functionality remains stable



---

🔍 Review Process

PRs are reviewed based on:

code quality

maintainability

simplicity

architectural consistency

real project impact


Maintainers may:

request changes

relabel issues/PRs

reject low-quality submissions

close spam/AI-slop PRs



---

🤖 Automation Features

The repository includes automated workflows for:

smart issue assignment

duplicate issue detection

AI-slop filtering

PR validation

unresolved review tracking

automatic labeling

contribution program validation

project board automation

cache/data refresh workflows



---

📌 Inactivity Policy

Assigned issues with no meaningful progress for:

2–3 days

may be automatically unassigned.

This helps keep issues available for active contributors.


---

Need Help?

If you need help:

Open a GitHub Issue

Use GitHub Discussions

Join our Discord community



---

Final Notes

This repository prioritizes:

quality over quantity

meaningful contributions

maintainable code

fair contributor practices


Not all PRs are guaranteed to be merged.

Thank you for contributing to FindMyGSoC 🚀
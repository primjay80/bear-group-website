# Project Instructions

The user is new to Codex and has very basic coding knowledge. Treat work in this project as a learning experience: explain steps clearly, use plain English, and surface assumptions that may seem obvious to developers.

This project is for PJ / Bear Group DCM and must stay separate from Bells Mill PTA work.

## Repo Location Reminder

This folder is the actual PJ website GitHub repo:

`/Users/stellashome/Documents/CODEX Projects/PJ Website Project/bear-group-website`

If you are working from the parent folder:

`/Users/stellashome/Documents/CODEX Projects/PJ Website Project`

move into `bear-group-website` before running Git commands.

## Git Commit and Push Rule

The user usually wants to manually push to GitHub. Do not push to GitHub unless the user explicitly asks for it.

For small changes, do not automatically commit. Instead, explain what changed and let the user decide whether it is worth committing.

For bigger chunks of website work, make sensible commits or tell the user when a commit is ready. A sensible commit should capture one meaningful milestone, such as a completed page section, a visual redesign pass, a content update batch, or a working feature.

Because the user is new to Git, remind her when the work has reached a good commit point and explain in plain English why that is a good moment to save the work.

## Automated Git Safety Check

Before making a commit, recommending a push, or helping the user understand whether the repo/account is correct, run this from the repo folder:

`../tools/git-safety-check.sh`

Use the output to explain, in plain English, which repo is active, which GitHub remote it points to, which account GitHub CLI is logged into, what commit author identity will be used, and whether there are changed files.

## Commit Author Priority

For this project, the user does not care whether commits are authored as her personal GitHub identity or the Bear Group project identity. Do not make commit author identity a blocker as long as the repo remains clean, pushable, hostable, and deployable in Vercel.

Only pause over commit identity if it shows a Bells Mill PTA identity, creates GitHub access problems, creates Vercel deployment problems, or could confuse project ownership in a meaningful way.

## Vercel Deployment Path

For early PJ website review, prefer a temporary Vercel deployment URL first, such as a `*.vercel.app` preview or production URL. Connect the custom domain later after PJ confirms the site and domain/DNS access are ready.

Do not use Bells Mill PTA Vercel, Google, GitHub, or email identities for Vercel access. If Vercel login is needed, ask for a Bear Group / PJ-specific account or a browser-based workflow.

## SEO and Domain Metadata

The site currently includes SEO metadata, JSON-LD business schema, `robots.txt`, `sitemap.xml`, `site.webmanifest`, and an SVG favicon. These URL-specific tags assume the final public domain will be `https://beargroupdcm.com/`.

After the Vercel project and custom domain are connected, verify the primary domain choice in Vercel. If Vercel uses `https://www.beargroupdcm.com/` instead, update the canonical URL, Open Graph URL/image URLs, JSON-LD `url`/`logo`/`image`, `robots.txt`, and `sitemap.xml` to match the primary domain.

PJ currently has no social channels. Do not add `sameAs` social profile links to JSON-LD unless real official channels are created later.

## Project List Visibility

PJ is not ready to publicly list specific projects yet. Keep the visible site free of the project index, `/ work` navigation link, and notable past-project list unless the user explicitly asks to restore them.

The parked restore copy lives in `docs/parked-content/project-work-sections.html`.

Update from PJ's annotated PDF reviewed on 2026-07-02: PJ approved bringing back the notable past projects content in a boxed/grouped layout, with each property name underlined and the corresponding retailers listed underneath. This approval applies to the notable past projects section, not necessarily to the full `/ work` project index/navigation unless PJ separately approves that.

## AGENTS.md Maintenance Rule

This repo-level `AGENTS.md` is the real handoff copy. It should travel with the GitHub repo so PJ or another helper can maintain the site later.

When a durable rule, workflow, safety procedure, repo-specific fact, deployment step, or repeated preference comes up during the work, proactively update this file so future Codex sessions remember it.

Keep updates plain-English, short, and practical. Do not add every tiny one-time detail; save only guidance that would help future work go more smoothly or prevent confusion.

- Never add `bellsmillpta`, `bellsmillpta2@gmail.com`, or any Bells Mill PTA GitHub identity as a collaborator, owner, maintainer, temporary collaborator, deploy user, or access workaround for this project.
- Do not use Bells Mill PTA GitHub, Vercel, Google, email, or deployment identities for this project.
- If GitHub or Vercel access is blocked, stop and ask for a Bear Group / PJ-specific login or browser-based workflow instead of using PTA credentials.

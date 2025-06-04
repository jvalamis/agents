# AI Agent Pipeline Project (New Architecture)

## Project Overview

This project now uses a GitHub Actions YAML pipeline to orchestrate all agent and LLM logic for website modernization. The UI (Next.js, located in `src/ui/`) is responsible only for triggering the pipeline with user input.

**Primary Use Case:**

- The user enters a website URL and a prompt (e.g., "modernize this website") in the UI.
- The UI triggers the GitHub Actions pipeline (e.g., via repository_dispatch, issue creation, or similar mechanism).
- The pipeline, defined in a GitHub Actions YAML file, handles all agent logic, LLM calls, and automation steps.
- The pipeline clones/scrapes the input website, modernizes it, and outputs a fully built static site, auto-deployed to GitHub Pages in a new repository.

## User Interface

- The UI is a simple web form built with Next.js (`src/ui/`).
- Users enter a website URL and a prompt into a single input box.
- Submitting the form triggers the GitHub Actions pipeline.
- The UI does **not** run any LLMs or agent logic locally.

## Pipeline Workflow (Modernize Website)

1. **Input**
   - User provides a website URL and a prompt in the UI.
2. **Trigger**
   - The UI sends the input to GitHub (e.g., via repository_dispatch or issue creation) to start the pipeline.
3. **GitHub Actions Pipeline**
   - The YAML workflow handles all agent logic, LLM calls (via OpenAI, HuggingFace, etc.), and automation.
   - The pipeline produces a modernization plan, breaks it into tasks, generates tests, implements features, and deploys the result.
4. **Deployment**
   - The modernized static site is auto-deployed to GitHub Pages.

## Technical Stack

- **Next.js**: UI for user input and pipeline trigger
- **GitHub Actions**: All agent logic, LLM calls, and automation are handled in YAML workflows
- **LLM Providers**: (e.g., OpenAI, HuggingFace) called from the pipeline, not from the app
- **Astro**: Static site generator for modernized output
- **GitHub Pages**: Deployment target for modernized static sites

## Development Rules

- All agent and LLM logic is handled in the GitHub Actions YAML pipeline.
- The UI is only responsible for collecting user input and triggering the pipeline.
- No backend/agent code or LLM integration is present in the app.

## Directory Structure & Code Organization

```
llama/
├── src/
│   └── ui/             # Next.js app (run with 'cd src/ui && npm run dev')
├── .github/
│   └── workflows/      # GitHub Actions YAML pipeline(s)
├── README.md           # Project overview and rules
└── ...
```

## Version Control & Deployment

- All code, documentation, and pipeline logic are maintained in the repository.
- Each product (modernized website) is output as a new GitHub repository with a standardized naming convention.
- [GitHub Pages](https://pages.github.com/) is used to deploy the modernized static sites.
- CI/CD (GitHub Actions) is set up for auto-deployment.

## Setup Notes

- To run the UI locally: `cd src/ui && npm run dev`
- To trigger the pipeline, use the UI or manually trigger the workflow in GitHub.

## Roadmap

See `roadmap.md` for the new workflow and development plan.

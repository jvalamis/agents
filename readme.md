# AI Agent Pipeline Project

## Project Overview

This project uses a GitHub Actions YAML pipeline to orchestrate all agent and LLM logic for website modernization. The pipeline can be triggered directly through GitHub's interface.

**Primary Use Case:**

- User provides a website URL by creating a GitHub issue or manually triggering the workflow
- The GitHub Actions pipeline handles all agent logic, LLM calls, and automation steps
- The pipeline clones/scrapes the input website, modernizes it, and outputs a fully built static site, auto-deployed to GitHub Pages in a new repository

## Pipeline Workflow

1. **Input**
   - User creates a GitHub issue with the website URL or manually triggers the workflow
2. **GitHub Actions Pipeline**
   - The YAML workflow handles all agent logic, LLM calls (via OpenAI, HuggingFace, etc.), and automation
   - The pipeline produces a modernization plan, breaks it into tasks, generates tests, implements features, and deploys the result
3. **Deployment**
   - The modernized static site is auto-deployed to GitHub Pages

## Technical Stack

- **GitHub Actions**: All agent logic, LLM calls, and automation are handled in YAML workflows
- **LLM Providers**: (e.g., OpenAI, HuggingFace) called from the pipeline
- **Astro**: Static site generator for modernized output
- **GitHub Pages**: Deployment target for modernized static sites

## Directory Structure

```
llama/
├── .github/
│   └── workflows/      # GitHub Actions YAML pipeline(s)
├── README.md           # Project overview
└── ...
```

## Setup Notes

- To trigger the pipeline:
  1. Create a new GitHub issue with the website URL in the description
  2. Or manually trigger the workflow from the Actions tab
- The pipeline will automatically process the website and create a new repository with the modernized version

## Roadmap

See `roadmap.md` for the development plan.

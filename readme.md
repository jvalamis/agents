# AI Agent Pipeline Project

## Project Overview

This project implements an AI agent pipeline using Ollama and HuggingFace, orchestrated in Node.js (JavaScript/TypeScript), to create a collaborative development environment with specialized agents. The pipeline, codebase, and documentation are managed on GitHub, with documentation and diagrams deployed via GitHub Pages.

**Primary Use Case:**

- The pipeline receives a website URL and the prompt "modernize this website."
- The Product Owner (PO) agent scopes the modernization task.
- The pipeline clones/scrapes the input website, modernizes it, and outputs a fully built static site, auto-deployed to GitHub Pages in a new repository.

## Pipeline Workflow (Modernize Website)

1. **Input**
   - User provides a website URL and the prompt "modernize this website."
2. **Scoping**
   - PO agent determines the modernization scope and MVP (minimum viable product).
3. **Project Management**
   - PM agent breaks down the scope into tasks and coordinates agents.
4. **Development & QA**
   - QA agent always writes Playwright tests for each scoped feature and task, based on PM agent's prompts.
   - Playwright generates an HTML report of test results, which is uploaded as a pipeline artifact for easy review.
   - Dev agents modernize the site using the fastest static site generator (default: Astro).
   - Dev agents iterate until all QA tests pass.
5. **Repository Creation & CI/CD**
   - Pipeline creates a new GitHub repository with a standardized name.
   - If approved by the PO agent, CI/CD (GitHub Actions) is set up for auto-deployment to GitHub Pages.
6. **Deployment**
   - The modernized static site is auto-deployed to GitHub Pages.

## Agent Architecture

### Product Owner (PO) Agent

- Defines high-level product vision and goals
- Sets product priorities and business objectives
- Approves or rejects PM's proposed scope
- Makes final decisions on product readiness
- Can trigger new development cycles
- Has authority to override PM decisions if they conflict with product vision
- Determines MVP and CI/CD approval for each project

### Project Manager (PM) Agent

- Receives product vision and goals from PO
- Proposes detailed scope based on PO's requirements
- Must get PO approval before proceeding with scope
- Breaks down approved work into manageable tasks
- Analyzes test results and development progress
- Determines if additional work is needed within approved scope
- Can request scope changes from PO if needed
- Can restart development cycle if needed
- Reports progress and blockers to PO

### Quality Assurance (QA) Agent

- Always creates Playwright test cases for each scoped feature and task, based on PM agent's prompts
- Ensures Playwright generates an HTML report of test results for every pipeline run
- Uploads the HTML report as a pipeline artifact for visibility and review
- Validates implementation against requirements
- Provides test results to PM for analysis
- Ensures quality standards are met

### Development (Dev) Agents

- Implements features based on PM scope
- Uses the fastest, most efficient static site generator (default: Astro)
- Iterates on implementation until all QA tests pass
- Works within defined requirements
- Collaborates with other agents through the pipeline

## Technical Stack

- **Node.js** (JavaScript/TypeScript): Main language and runtime
- **Ollama**: For local model deployment
- **HuggingFace**: For model integration and management
- **Astro** (default): Static site generator for modernized output
- **GitHub**: Source code, pipeline, and version control
- **GitHub Actions**: CI/CD for auto-deployment to GitHub Pages
- **GitHub Pages**: Deployment target for modernized static sites
- **Mermaid**: For architecture diagrams (see `architecture.md`)

## Development Rules

1. All agents must communicate through the defined pipeline
2. No direct agent-to-agent communication outside the pipeline
3. QA Agent always writes Playwright tests for each scoped feature and task, based on PM agent's prompts
4. Playwright HTML test reports must be generated and uploaded as pipeline artifacts for every run
5. All changes must pass QA tests before proceeding
6. PO Agent has final authority on product completion and MVP definition
7. PM Agent manages development scope and progress
8. Dev Agents must implement to pass all QA tests
9. Each product is output as a new GitHub repository, auto-deployed to GitHub Pages

## Directory Structure & Code Organization

This project uses **Node.js** with **JavaScript/TypeScript**. All source code is organized under the `src/` directory. Project dependencies and scripts are managed with `package.json`. If using TypeScript, configuration is in `tsconfig.json`.

```
llama/
├── src/
│   ├── agents/
│   │   ├── po/         # Product Owner Agent code, configs, and prompts
│   │   ├── pm/         # Project Manager Agent code, configs, and prompts
│   │   ├── qa/         # QA Agent code, configs, and prompts
│   │   └── dev/        # Development Agents code, configs, and prompts
│   ├── pipeline/       # Orchestration logic for agent communication and workflow
│   ├── models/         # Model files, adapters, or HuggingFace/Ollama integration code
│   ├── utils/          # Shared utility functions and helpers
│   └── data/           # Shared data, fixtures, or sample product requirements
├── tests/              # End-to-end and integration tests for the pipeline
├── docs/               # Static site content for GitHub Pages (documentation, diagrams, etc.)
├── package.json        # Node.js dependencies and scripts
├── tsconfig.json       # TypeScript configuration (if using TypeScript)
├── .env                # Environment variables (if needed)
├── README.md           # Project overview and rules
├── architecture.md     # Technical architecture and communication flow
└── .gitignore
```

### Agent Code Separation

- **Each agent has its own subdirectory under `src/agents/`**  
  Contains the agent's logic, configuration, and prompt templates.  
  Example: `src/agents/po/poAgent.ts`, `src/agents/po/prompts/`, `src/agents/po/config.json`
- **Shared code (e.g., message passing, logging, error handling) goes in `src/utils/`**
- **The `src/pipeline/` directory**  
  Contains the main orchestration logic that manages agent execution order, state, and communication.
- **Model integration code**  
  Placed in `src/models/` for easy swapping or updating of underlying LLMs.

#### Example: Agent Directory

```
src/agents/pm/
├── pmAgent.ts
├── prompts/
│   └── scopePrompt.txt
├── config.json
└── README.md   # (Optional: agent-specific documentation)
```

### Additional Notes

- Use `.js` or `.ts` extensions as appropriate for your codebase.
- Place environment-specific variables in `.env` and load them using a package like `dotenv`.
- All dependencies and scripts should be managed via `package.json`.
- If using TypeScript, ensure all source files are in `src/` and configure paths in `tsconfig.json`.
- Playwright is the standard test framework for QA in this pipeline. HTML reports are always generated and made available as pipeline artifacts for easy visibility and review.

## Version Control & Deployment

- **Version Control:**

  - This project uses [GitHub](https://github.com/) for source code management, collaboration, and issue tracking.
  - All code, documentation, and the pipeline orchestration logic are maintained in the repository.
  - Each product (modernized website) is output as a new GitHub repository with a standardized naming convention.

- **Deployment:**
  - [GitHub Pages](https://pages.github.com/) is used to deploy the modernized static sites.
  - CI/CD (GitHub Actions) is set up for auto-deployment if approved by the PO agent.
  - The `docs/` directory (or a dedicated branch) contains static site content for project documentation and diagrams.
  - The main site is automatically updated on push to the main branch (or as configured in repository settings).

For a detailed architecture diagram and communication flow, see [`architecture.md`](architecture.md).

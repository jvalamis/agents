# Project Roadmap

This roadmap outlines the steps to get the AI agent pipeline up and running, in line with the project README and architecture.

---

## 1. Project Setup

- [x] Scaffold directory structure and starter files for all agents, pipeline, models, utils, and data
- [ ] Initialize `package.json` and install core dependencies (TypeScript, Playwright, Astro, etc.)
- [ ] Set up `tsconfig.json` for TypeScript support
- [ ] Add `.gitignore` and configure environment variables in `.env` if needed

---

## 2. Agent Implementation

### a. Product Owner (PO) Agent

- [ ] Implement logic to analyze a website URL and prompt, and output a modernization scope, MVP, features, and CI/CD decision
- [ ] Integrate prompt template usage

### b. Project Manager (PM) Agent

- [ ] Implement logic to break down the PO's scope into actionable tasks for QA and Dev
- [ ] Integrate prompt template usage

### c. QA Agent

- [ ] Implement logic to generate Playwright test cases for each task
- [ ] Ensure Playwright HTML reports are generated and can be uploaded as artifacts

### d. Dev Agent

- [ ] Implement logic to modernize the site using the chosen static site generator (default: Astro)
- [ ] Ensure all QA tests are passed before proceeding

---

## 3. Pipeline Orchestration

- [ ] Implement the orchestrator to coordinate agent handoff and manage the full workflow
- [ ] Handle input (website URL + prompt), agent outputs, and error handling
- [ ] Integrate model management (Ollama/HuggingFace) as needed

---

## 4. GitHub Integration & Automation

- [ ] Implement logic to create a new GitHub repository for each product (modernized site) with a standardized naming convention
- [ ] Set up GitHub Actions for CI/CD:
  - [ ] Build the static site
  - [ ] Run Playwright tests and upload HTML reports as artifacts
  - [ ] Deploy to GitHub Pages automatically if approved by PO

---

## 5. Testing & Validation

- [ ] Write and run tests for each agent and the pipeline orchestrator
- [ ] Validate that the pipeline produces a modernized static site, passes QA, and deploys to GitHub Pages

---

## 6. Documentation & Visibility

- [ ] Ensure all agent and pipeline READMEs are up to date
- [ ] Document how to run the pipeline, add new agents, and interpret QA reports
- [ ] Optionally, publish pipeline and QA reports to the `docs/` directory or GitHub Pages for visibility

---

## 7. MVP Launch

- [ ] Run an end-to-end test: input a real website URL, modernize it, and deploy the result to GitHub Pages
- [ ] Review and iterate based on results and feedback

---

For architecture and workflow details, see `README.md` and `architecture.md`.

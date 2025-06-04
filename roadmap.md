# Project Roadmap (New Architecture)

This roadmap outlines the steps to get the new AI agent pipeline up and running, with all agent and LLM logic handled in a GitHub Actions YAML workflow. The UI is only responsible for triggering the pipeline.

---

## 0. User Interface

- [ ] Implement a simple web-based landing page as the entry point for the app (Next.js, located in `src/ui/`)
  - [ ] Centered input box for website URL and prompt (single field)
  - [ ] Submit button labeled 'Go' that triggers the GitHub Actions pipeline
  - [ ] To run the UI: `cd src/ui && npm run dev`

---

## 1. GitHub Actions Pipeline

- [ ] Write a GitHub Actions YAML workflow in `.github/workflows/`
  - [ ] Accept input from the UI (e.g., via repository_dispatch, issue creation, or workflow_dispatch)
  - [ ] Run all agent logic and LLM calls in the pipeline (using OpenAI, HuggingFace, etc.)
  - [ ] Clone/scrape the input website
  - [ ] Modernize the site and output a static site (Astro or similar)
  - [ ] Run tests and generate reports
  - [ ] Deploy the result to GitHub Pages

---

## 2. UI ↔ Pipeline Integration

- [ ] Wire up the UI to trigger the GitHub Actions workflow
  - [ ] Use the GitHub API to send a repository_dispatch event, create an issue, or trigger the workflow directly
  - [ ] Show feedback to the user that the pipeline has started

---

## 3. Documentation & Visibility

- [ ] Update README and docs to reflect the new architecture
- [ ] Document how to run the UI, trigger the pipeline, and interpret results

---

## 4. MVP Launch

- [ ] Run an end-to-end test: input a real website URL and prompt, trigger the pipeline, and deploy the result to GitHub Pages
- [ ] Review and iterate based on results and feedback

---

For architecture and workflow details, see `README.md` and `architecture.md`.

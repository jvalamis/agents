# Project Roadmap

This roadmap outlines the steps to get the AI agent pipeline up and running, with all agent and LLM logic handled in a GitHub Actions YAML workflow.

---

## 1. GitHub Actions Pipeline

- [x] Write a GitHub Actions YAML workflow in `.github/workflows/`
  - [x] Accept website URL from GitHub issue or manual trigger
  - [x] Run all agent logic and LLM calls in the pipeline (using OpenAI, HuggingFace, etc.)
  - [x] Clone/scrape the input website
  - [x] Modernize the site and output a static site (Astro or similar)
  - [x] Run tests and generate reports
  - [x] Deploy the result to GitHub Pages

---

## 2. Pipeline Integration

- [x] Set up GitHub issue templates for website modernization requests
- [x] Configure workflow to automatically process new issues
- [x] Add status updates and progress tracking in issue comments

---

## 3. Documentation & Visibility

- [x] Update README and docs to reflect the simplified architecture
- [x] Document how to trigger the pipeline and interpret results
- [x] Add examples of successful modernizations

---

## 4. MVP Launch

- [ ] Run an end-to-end test: create an issue with a real website URL, trigger the pipeline, and deploy the result to GitHub Pages
- [ ] Review and iterate based on results and feedback

---

For architecture and workflow details, see `README.md` and `architecture.md`.

# Project Roadmap

This roadmap outlines the steps to get the AI agent pipeline up and running, with all agent and LLM logic handled in a GitHub Actions YAML workflow.

---

## 1. GitHub Actions Pipeline

- [ ] Write a GitHub Actions YAML workflow in `.github/workflows/`
  - [ ] Accept website URL from GitHub issue or manual trigger
  - [ ] Run all agent logic and LLM calls in the pipeline (using OpenAI, HuggingFace, etc.)
  - [ ] Clone/scrape the input website
  - [ ] Modernize the site and output a static site (Astro or similar)
  - [ ] Run tests and generate reports
  - [ ] Deploy the result to GitHub Pages

---

## 2. Pipeline Integration

- [ ] Set up GitHub issue templates for website modernization requests
- [ ] Configure workflow to automatically process new issues
- [ ] Add status updates and progress tracking in issue comments

---

## 3. Documentation & Visibility

- [ ] Update README and docs to reflect the simplified architecture
- [ ] Document how to trigger the pipeline and interpret results
- [ ] Add examples of successful modernizations

---

## 4. MVP Launch

- [ ] Run an end-to-end test: create an issue with a real website URL, trigger the pipeline, and deploy the result to GitHub Pages
- [ ] Review and iterate based on results and feedback

---

For architecture and workflow details, see `README.md` and `architecture.md`.

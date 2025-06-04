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

## Agent Responsibilities

### Product Owner Agent

The Product Owner agent is the first to analyze the website and establish the modernization vision. It:

1. **Analyzes the Website**

   - Reviews the provided website URL
   - Identifies key areas for modernization
   - Understands the current user experience and functionality

2. **Defines Product Vision**

   - Creates a clear, compelling vision for the modernized website
   - Sets specific, measurable business goals
   - Establishes success criteria for the modernization

3. **Scope Review**

   - Assesses if the modernization scope is clear and achievable
   - Identifies potential risks and challenges
   - Makes a go/no-go decision on proceeding with the modernization
   - Provides specific feedback and adjustments needed

4. **Outputs**
   - Creates a GitHub issue with the complete analysis
   - Generates JSON artifacts containing:
     - Product vision and goals
     - Success criteria
     - Scope assessment
     - Risk analysis
     - Feedback and recommendations

### Project Manager Agent

The Project Manager agent takes the Product Owner's vision and creates a detailed execution plan. It:

1. **Creates Project Plan**

   - Breaks down the modernization into detailed tasks and subtasks
   - Estimates duration for each task
   - Identifies task dependencies and critical path
   - Determines resource requirements

2. **Outputs**
   - Generates JSON artifacts containing:
     - Detailed task breakdown
     - Project timeline
     - Dependency map
     - Resource requirements

### QA Agent

The QA Agent ensures quality and sets testing standards for the modernization. It:

1. **Creates Test Plan**

   - Defines comprehensive test scenarios and cases
   - Establishes quality metrics and benchmarks
   - Specifies test environment requirements
   - Sets clear acceptance criteria

2. **Outputs**
   - Generates JSON artifacts containing:
     - Test cases and scenarios
     - Quality metrics
     - Test environment specifications
     - Acceptance criteria

### Development Agent

The Development Agent creates the technical implementation plan. It:

1. **Technical Planning**

   - Recommends technical stack and tools
   - Defines implementation steps
   - Proposes code structure and architecture
   - Creates migration strategy

2. **Outputs**
   - Generates JSON artifacts containing:
     - Technical stack recommendations
     - Implementation steps
     - Code structure
     - Migration strategy

### Final Review

The pipeline concludes with a comprehensive review that:

1. **Assesses Overall Plan**

   - Evaluates completeness and feasibility
   - Identifies remaining risks
   - Provides final recommendations
   - Outlines next steps

2. **Outputs**
   - Creates a GitHub issue with the final review
   - Generates JSON artifacts containing:
     - Overall assessment
     - Risk analysis
     - Recommendations
     - Next steps

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

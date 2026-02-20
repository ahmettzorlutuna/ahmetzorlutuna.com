---
trigger: always_on
---

# Skill: Concise Planning
**Goal:** Prevent haphazard coding by enforcing a "Think-Before-You-Code" phase.

## Workflow
Before writing any code for a task, the Agent must provide a brief plan including:
1. **Objective:** What is the primary goal of this change?
2. **Affected Files:** List all files that will be modified or created (e.g., `src/data/projects.ts`, `src/components/portfolio/ProjectCard.tsx`).
3. **Architectural Impact:** Does this change follow ADR-001 (Monolith) and ADR-002 (Static Data)?
4. **Verification Step:** How will we test if this work is successful?

## Guidelines
- Keep the plan short and bulleted.
- If the plan involves a new UI element, ensure it uses **shadcn/ui** patterns.
- Do not proceed with coding until the user (Ahmet) gives a thumbs up or "OK".
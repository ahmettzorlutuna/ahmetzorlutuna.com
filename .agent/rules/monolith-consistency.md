---
trigger: always_on
---

# Skill: Monolith Consistency (ADR-001)
**Goal:** Maintain the integrity of the Next.js Monolith architecture as decided in ADR-001.

## Core Rules
1. **No Service Boundaries:** Do not suggest splitting parts of the app (like the blog or contact form) into separate repositories or microservices.
2. **Unified Data Management:** Follow the `src/` directory hierarchy strictly.
    - Static data (Projects, Skills) -> `src/data/`
    - Global UI Components -> `src/components/ui/`
    - Business Logic -> `src/lib/`
3. **Single Source of Truth:** Use a single Next.js project to manage both the (portfolio) and (blog) route groups.
4. **Minimal Complexity:** Reject suggestions that add unnecessary architectural overhead (e.g., Kafka, Kubernetes, or multiple databases) for this solo-developer project.

## Rationale
"You can always add complexity later; removing it is much harder." We prioritize development speed and maintainability.
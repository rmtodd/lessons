# Mission: Understand the CMBSDOCS Dashboard Overhaul Plan

## Why
Raymond is directing an AI-driven rebuild of CMBSDOCS's internal ops dashboard (the tool his team uses to track CMBS deal filings, presale documents, and monitoring tasks) but has no software development background. He needs to understand, in plain language, what each phase of the approved plan (`you-are-fable-the-piped-stallman.md`) actually does — not to write the code himself, but to read progress updates, ask sharp questions, catch mistakes, and make informed calls when the plan asks for a decision (e.g. "should the 15G review queue include all asset classes or just commercial-mortgage?").

## Success looks like
- Raymond can read a phase's progress-log entry (like the ones in §0 of the plan) and explain in his own words what changed and why it mattered.
- Raymond can explain the "override ledger" pattern well enough to know why it exists and what would break without it (the core, recurring concept across most phases).
- Raymond can recognize the handful of recurring technical concepts (migration, RLS, RPC, trigger, JWT/auth, audit log, actor attribution, field registry) across different phases, instead of re-learning them each time.
- Raymond can look at the Phase 13 list and know, phase by phase: what problem it solves, what's risky about it, and what "done" looks like.

## Constraints
- Zero prior software development background — no assumed familiarity with SQL, APIs, git, or web frameworks.
- Learning happens alongside a real, in-flight project — the plan is being executed phase by phase (Phases 1-4 are already done as of 2026-07-03; Phase 5 is next). Lessons should track the plan's actual structure, not a generic curriculum.
- Wants density over brevity: full explanations of *why*, not just *what*, even if a lesson runs long. Explicitly said not to skip detail for the sake of shortness.

## Out of scope
- Learning to write code personally (this is about comprehension and oversight, not hands-on implementation).
- General computer science fundamentals not needed to understand this specific plan (e.g. no detour into general algorithms/data structures unless a phase needs it).

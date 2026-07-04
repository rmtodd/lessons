# Dashboard Overhaul — Resources

## Knowledge

- [Supabase Docs: Database Migrations](https://supabase.com/docs/guides/deployment/database-migrations)
  What a "migration" is and why schema changes are written as versioned files instead of edited live. Use for: Phases 2-9, every time a lesson mentions "a migration."
- [Supabase Docs: Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
  Explains RLS in Supabase's own words — policies, `anon` vs `authenticated` roles. Use for: Phase 5 (auth + RLS), and the "who can read what" question that recurs later.
- [PostgreSQL Docs: Triggers](https://www.postgresql.org/docs/current/triggers.html)
  The official reference for what a database trigger is and when it fires (BEFORE/AFTER, per-row). Use for: Phase 4's "reassert" trigger and Phase 9's audit trigger.
- [PostgreSQL Docs: JSON/JSONB support](https://www.postgresql.org/docs/current/datatype-json.html)
  Why some data is stored as JSONB blobs instead of plain columns. Use for: Phase 4 (override ledger's `field_path`), Phase 7 (nested annex fields).
- [Supabase Docs: JWT (JSON Web Tokens) & Auth](https://supabase.com/docs/guides/auth/jwts)
  How a login proves "who is making this request" to the backend. Use for: Phase 5.
- [MDN: An overview of HTTP / REST-style APIs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
  What an "endpoint" and an HTTP request/response actually are — the plumbing under every `POST /overrides`-style line in the plan. Use for: any phase that lists new API endpoints (§11).
- [TanStack Query docs — Overview](https://tanstack.com/query/latest/docs/framework/react/overview)
  What "optimistic updates" and client-side data-fetching/caching mean for the dashboard's UI. Use for: Phase 1 and Phase 6 (wiring stubbed writes to real ones).
- [TanStack Router docs — Overview](https://tanstack.com/router/latest/docs/framework/react/overview)
  How the plan's "every filtered view is a shareable URL" design works. Use for: Phase 1 (IA/UI-first prototype).

## Wisdom (Communities)

- No community engagement requested yet. This mission is scoped to comprehension of one internal project plan, not general software-development skill-building — revisit if Raymond wants to discuss patterns (e.g. audit-log design, override ledgers) with outside practitioners later.

## Gaps

- No primary source yet on the specific "append-only ledger + write-through" pattern used for overrides (§5) — this is a general software-design pattern (sometimes called "event sourcing lite" or "shadow table") without one canonical doc. The glossary and Phase 4 lesson explain it from first principles instead.

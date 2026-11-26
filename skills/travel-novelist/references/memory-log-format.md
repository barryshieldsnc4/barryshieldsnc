# Memory Log Format

`memory-log.md` is an append-only ledger. Newest entries at the bottom. The user's raw words are sacred — clean typos, keep voice.

## Entry format

```markdown
## M-014 · 2026-09-03 · Ferry to Hydra
STATUS: UNUSED

**Raw:** Old guy at the rail fed the whole bag of bread to one gull and
ignored the rest. Told me "loyalty" in English and nothing else. Sea the
color of dishwater until the sun hit it.

**Hooks:**
- Character: bread man — one-word philosopher, chooses favorites
- Sensory: dishwater sea turning gold; gull mob noise
- Tension/oddity: deliberate unfairness as a principle

**Novel potential:** Feeds the "who deserves what" thread; bread man is
composite material for MENTOR figure.
```

## Rules

- **IDs are sequential** (M-001, M-002…) and never reused. Scene files cite them.
- **STATUS** is `UNUSED` or `USED → <scene file>`. A memory may be split — partial use gets `PARTIAL → <scene file>` with a note on what remains.
- **Hooks are extraction, not invention.** Pull what's actually in the memory. It's fine for a hook line to be sparse; don't pad.
- **Novel potential** is one line max, and only when a genuine bible connection exists. "None yet" is a valid entry — unconnected memories are the point of a ledger.
- Photos or voice-note transcripts the user describes are logged the same way; note the medium in Raw.
- Never delete an entry, even if the user disavows it — mark it `RETIRED` with a one-word reason instead, so IDs stay stable. Exception: if the user explicitly asks for a memory to be removed entirely, delete it and note the gap ("M-009 removed at author's request").

## Log-reply etiquette (restating SKILL.md, because it matters)

At log time the user gets speed: 2–4 sentences back, best hook reflected, thread named if one fits, at most one optional nudge question, and never drafted prose. The drafting urge goes in **Novel potential**, not the reply.

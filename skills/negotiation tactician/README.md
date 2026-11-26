# Negotiation Tactician

A Claude Agent Skill that operationalizes the negotiation methodology from Chris Voss's *Never Split the Difference* — tactical empathy, calibrated questions, the accusation audit, and the Ackerman bargaining model — as a coach and drafting partner. All methodology is encoded as original procedural instruction; no book text is reproduced.

## Install

**Claude.ai / Claude Desktop:** Upload `negotiation-tactician.skill` (or this folder) via Settings → Capabilities → Skills, or click **Save skill** on the presented file card.

**Claude Code:** Copy the `negotiation-tactician/` folder into your skills directory (e.g., `~/.claude/skills/` or your project's `.claude/skills/`).

## Structure

```
negotiation-tactician/
├── SKILL.md                          # Router: triggering, mode selection, operating rules
├── README.md
└── references/
    ├── nt-core-tactics.md            # Tactical empathy, mirroring, labeling, silence, tone
    ├── nt-calibrated-questions.md    # How/what questions, "no"-oriented framing, Rule of Three
    ├── nt-bargaining.md              # Ackerman model, anchoring, fairness, deadlines, hardball
    ├── nt-counterpart-reading.md     # Analyst/Accommodator/Assertive, black swans, 7-38-55
    ├── nt-accusation-audit.md        # Pre-emptive label sequences for hard conversations
    ├── nt-prep-one-sheet.md          # The prep template (always delivered filled-in)
    └── nt-lessons-log.md             # Append-only compounding memory (schema + examples)
```

## The four modes

1. **Prep** — "Prep me for my renewal call with Acme." → A completed one-sheet: objective, walk-away line, accusation audit, calibrated questions, Ackerman ladder with real numbers, counterpart read, prior lessons.
2. **Live/Drafting** — Paste what they said. → A read of what their message is doing, a named tactic recommendation, and 2–3 ready-to-send drafts at different assertiveness levels, each tagged with its technique.
3. **Diagnosis** — "Why did that land badly?" → The specific mechanical miss, the counterpart-type lens, and a drafted recovery move.
4. **Debrief** — "We closed; capture the lessons." → A structured entry appended to `nt-lessons-log.md`, which Prep and Live modes read on every future run.

The skill always names the technique it's applying — the goal is that you absorb the method, not just the outputs.

## Compounding intelligence

`references/nt-lessons-log.md` is the skill's memory: append-only debrief entries with a fixed schema. Prep and Live modes read it first and surface matching prior lessons (same counterpart, same type, same situation shape). Two worked example entries ship with the log to make the schema unambiguous — delete them once you have real entries, or keep them as reference.

## Regression test prompts

Run these after any revision; expected behavior in parentheses.

1. **Prep:** "I'm renegotiating our Acme SaaS contract next Thursday. They want a 12% increase; I can live with 4%. Prep me." (Completed one-sheet, all seven sections, Ackerman numbers computed, lessons-log match surfaced.)
2. **Live:** "Vendor just emailed: 'Our pricing is firm. We need a signature by Friday or the discount expires.' How do I respond?" (Read of the deadline pressure, named tactic, 2–3 drafts at different assertiveness levels with tactic tags.)
3. **Diagnosis:** "I asked my boss for a raise, she said 'you're right, you've done great work, let's revisit next cycle.' What happened?" (Identifies 'you're right' as a dismissal, names the miss, drafts the recovery.)
4. **Debrief:** "Closed the Acme deal at 3.8% with an SLA upgrade. Capture it." (Appends a schema-conformant entry to the lessons log, confirms in one line.)
5. **Non-trigger:** "Write a persuasive product-launch email for our newsletter." (Skill does not trigger; ordinary copywriting response.)

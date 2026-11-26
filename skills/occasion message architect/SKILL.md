---
name: occasion-message-architect
description: Writes warm, public-facing occasion and tribute messages (Father's Day, Mother's Day, Veterans Day, retirements, anniversaries, team milestones, memorials, holiday greetings) using a repeatable "reframe-and-elevate" story sequence. Use whenever the user wants a heartfelt message, social post, tribute, toast, dedication, or greeting that honors a person, group, or occasion and is meant to be shared aloud or published. Trigger on requests like "write a Father's Day post," "draft a retirement tribute," "I need something for our team's anniversary," "say a few words for," or any pasted example the user wants matched in tone and structure.
---

# Occasion Message Architect

Produces the kind of message that reads as effortless but is built on a deliberate rhetorical engine: it takes a surface understanding of an occasion, reverses it toward something deeper, then escalates that deeper truth through everyday specifics until it lands on a direct, warm address to the honoree.

This skill is the orchestration layer. It selects the story sequence, sets the register, and calls the reference files for the move-by-move mechanics and the occasion-specific raw material.

## What this skill is for

Public-facing, spoken-or-published messages that honor someone: holiday tributes, milestone posts, retirement and farewell words, memorials, dedications, toasts, team-appreciation notes, and seasonal greetings. Not for transactional copy, marketing CTAs, or private one-to-one notes (those have different load-bearing structures).

## Outcome first

Before writing, settle three things — infer them from the request when you can, ask only if genuinely missing:

1. **Occasion + honoree** — what is being marked, and exactly who is being honored (one person, a category like "every father figure," a team, the fallen).
2. **Venue + voice** — where this lives (LinkedIn, a pulpit, a toast, a card, a company all-hands) and whose voice it speaks in. This sets length and register.
3. **The deeper truth** — the single non-obvious thing this message exists to say. If the answer is generic ("fathers are great"), push for the reframe: *what does the audience overlook?* That overlooked thing is the spine of the whole piece. Do not start writing until you have it.

State any assumptions inline and proceed; do not stall for permission on routine choices.

## The core engine: the Reframe-and-Elevate sequence

Every message of this kind runs on one repeating move — **"some may say X… but really Y"** — deployed not once but as an escalating chain. The provided Father's Day example uses it four times, each reframe digging one layer deeper than the last. That repetition *is* the intelligence; a single reframe reads as a greeting-card line, a chain of them reads as a meditation.

The canonical seven-beat sequence:

1. **The Dismissive Open.** Voice the shallow take in someone else's mouth — "Some may say…" — then turn on it with "but." This earns trust by acknowledging the cynical reading before transcending it. *Never* open with the warm sentiment directly; open with its opposite and reverse.
2. **The Hidden Layer.** "You may recognize a [role] by X. But here's what goes unnoticed…" — move from the visible/public version of the honoree to the invisible/private one (the early mornings, the worries kept to themselves).
3. **The Everyday Catalog.** "Some might think it's about grand gestures. But the truth is, it's the everyday moments…" — then a concrete, rhythmic list of small specifics. Specificity is what makes it true; abstractions make it a Hallmark card.
4. **The Timeless Bridge.** "This was true yesterday, and it remains true today…" — anchor the truth across time, often against a "world moving faster than ever." This gives the message gravity and stakes.
5. **The Permission / Redefinition.** "But here's something we don't say often enough… it isn't about perfection, it's about commitment." — release the honoree from an impossible standard. This is the emotional pivot; it's where the reader feels *seen*.
6. **The Widening Embrace.** "Today we celebrate every [honoree], [adjacent figure], [adjacent figure]…" — expand from the prototype to everyone the message should include, so no one is left out.
7. **The Direct Address + Close.** Turn from third person to second: "Happy [occasion] to the [people] who…" then "Today is for you." End ON the honoree, never on a generalization. Optional emoji/hashtag tail when the venue is social.

Each beat carries an emotional escalation: *recognition → discovery → tenderness → weight → relief → belonging → blessing.* If two adjacent beats sit at the same emotional level, the sequence has stalled — vary or cut.

Read `references/sequence-playbook.md` for the full move-by-move construction, the connective phrase bank, the rhythm rules, and the failure modes to avoid.

## Workflow

1. **Read the trigger.** If the user pasted an example, treat it as the structural target — reverse-engineer its sequence (it will usually be a variant of the seven beats) and match its register, not just its topic.
2. **Lock the three outcome items** (occasion, venue/voice, deeper truth). Ask only what you can't infer.
3. **Pull occasion material.** Open `references/occasion-library.md` for the chosen occasion: its honoree set, the standard "shallow take" to reverse in Beat 1, the everyday specifics that ring true for Beat 3, the adjacent figures for Beat 6, and any sensitivities (e.g., memorials and Father's/Mother's Day both carry grief for some readers — handle per the notes there).
4. **Draft the sequence.** Write all seven beats in order. Keep each "but"-reversal genuinely surprising; if a reversal is obvious, deepen it. Front-load specificity in Beat 3.
5. **Tune for venue.** Compress for a card or toast, expand for a tribute or sermon, add the emoji/hashtag tail only for social. Match the user's voice if one was given.
6. **Deliver the finished message**, ready to publish or speak — not an outline. If the venue or relationship is ambiguous enough to change the piece materially, offer one alternate framing rather than a half-draft.

## Calibration rules

- **Reverse before you affirm.** The signature of this style is that every warm claim arrives *after* its skeptical version has been named and overturned. A draft that just stacks nice sentiments has missed the engine entirely.
- **Specificity is the proof.** Generic praise ("they do so much") is invisible. Named small acts (teaching a bike, showing up at the school event, the steady presence when things feel uncertain) are what land. Beat 3 must be concrete.
- **Earn the direct address.** "Today is for you" only works because six beats built to it. Don't open in second person.
- **Don't oversweeten.** The reframes keep the piece from being saccharine. Cut any sentence that would survive on a discount greeting card.
- **Honor the grief-adjacent reader.** For occasions that hurt some people (Father's/Mother's Day, memorials, "first holiday without"), the Widening Embrace beat is where you make room for them without derailing the celebration. See the occasion library notes.

## Reference files

- `references/sequence-playbook.md` — the full seven-beat construction guide: per-beat purpose, sentence patterns, a connective-phrase bank, rhythm and length rules, register dials (social ↔ pulpit ↔ toast), and the common failure modes with fixes.
- `references/occasion-library.md` — per-occasion raw material: honoree sets, the shallow take to reverse, everyday specifics, adjacent figures for the embrace, register defaults, and sensitivity notes. Covers Father's/Mother's Day, Veterans/Memorial Day, retirements, work anniversaries and team milestones, memorials/tributes, graduations, and major seasonal greetings, plus a template for occasions not yet listed.

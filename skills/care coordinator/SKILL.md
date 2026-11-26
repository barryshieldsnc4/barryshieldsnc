---
name: "care-coordinator"
description: "Coordinate scattered caregiving information — from family, doctors, nurses, specialists, and others' own research — into one reliable current state. Use whenever the user is tracking an ill or aging family member's care across multiple people (\"my mom is sick and I'm getting info from my dad, doctors, my wife\"), whenever reports about a diagnosis, medication, or care decision conflict, or whenever the user wants to log an update, get a briefing, or prep for a doctor's appointment or family conversation. Also use when they want to know what to ask the care team, what a clinical term means, or what's missing from a report — the clinical lenses generate questions for the doctors, never answers. Also trigger for any multi-person situation where \"retrieval\" (what people remember being said) gets mistaken for \"state\" (what was actually decided) — the pattern extends beyond caregiving to any fragmented, multi-source coordination problem."
---

# Care Coordinator

A two-speed system for turning scattered reports from many people into one
reliable current state. Built for family caregiving — tracking an ill or
aging relative's care across parents, siblings, a spouse, doctors, nurses,
and everyone's own research — but the underlying pattern (retrieval systems
losing state) applies to any fragmented, multi-source coordination problem.

## The core distinction

Most of what reaches the user is **retrieval**: someone's memory of what was
said in a conversation. Retrieval is lossy, partial, and colored by who's
recalling it. What the user actually needs is **state**: what is currently
true, what was actually decided, and what decision that replaced.

This skill never lets retrieval quietly become state. Every report gets
captured as a report, attributed to its source. State only updates when
something is confirmed, decided, or resolved — and a human, not this skill,
does the confirming.

## The RECORD framework

Every incoming report gets qualified against six checks before it's treated
as anything more than a logged entry. This isn't a separate process — it's
the explicit version of what Capture and Brief already do, made into a
checklist so the judgment behind each capture is visible and consistent
rather than silent.

- **R — Reported by.** Who said it, named specifically and consistently
  ("Dad," never sometimes "Dad" and sometimes "my father"). No identified
  source, no capture.
- **E — Evidence type.** Firsthand (the user heard the doctor say it
  directly) or secondhand (someone told the user what the doctor said).
  Always ask this explicitly when it isn't obvious — it's graded, not
  binary, and secondhand reports from an informed source (a family member
  who works in medicine, say) still rank as secondhand.
- **C — Conflict check.** Does this agree or disagree with what's already
  captured or already in state.md. A disagreement never gets silently
  resolved toward whichever version sounds more credible — it gets flagged
  as an open conflict immediately.
- **O — Ownership to decide.** Does this source actually have standing to
  make this call. A nurse noting a symptom is not the same as a doctor
  changing a dose, and a strongly worded secondhand report is not a
  DECISION just because it sounds definite. Ask, when it isn't obvious,
  whether the person relaying this is the one who made the call or someone
  reporting on a call made by someone else.
- **R — Resolution status.** Every entry is UNRESOLVED, FOLDED INTO STATE,
  or SUPERSEDED at all times — never left ambiguous.
- **D — Dated and traceable.** Tied to a specific, numbered capture entry
  and a date, never overwritten. Any state.md line should trace back to
  the capture that justified it.

RECORD doesn't replace the capture-format or state-format references below
— it's the lens for filling them in correctly. In particular, Evidence type
and Ownership to decide are the two checks most often skipped by going too
fast during Capture; slow down for those two specifically when a report
sounds authoritative but its source or standing isn't yet clear.

## Two speeds

**Capture** (the default). Any time the user relays something they heard —
from any source — log it fast. Don't synthesize, don't resolve, don't decide
what's true. Just get it captured before it's lost, running it through the
RECORD checks as you go. See `references/capture-format.md` for the entry
format and tagging rules.

**Brief** (on request — "what's the current state," "brief me before the
call," "what's changed"). Pull everything captured since the last brief and
update the single state file: what's newly confirmed, what conflicts and is
still unresolved, what was decided and what it replaced, what's still open.
See `references/state-format.md` for the file structure.

Never brief unprompted. The user may be mid-crisis, mid-conversation, or
just needs one fact — don't force a full state review on them when they
only asked you to log one thing.

## Setup (first use)

If this is the user's first time using the skill for this situation, set up
two files (in Drive, in a project, or as local files — ask the user where
they want them, the same way you'd ask about any persistent record):

1. **state.md** — from `references/state-template.md`. This is the file
   the user (or anyone they share it with) reads to understand what's
   actually going on right now.
2. **capture-log.md** — from `references/capture-log-template.md`. The
   append-only ledger of every report, ever.

If the user already has these files from a prior session, read `state.md`
first to load context before doing anything else.

## Capturing a report

When the user relays something someone said:

1. Identify the **source** (who said it — be specific: "Dad," "the
   oncologist," "Mom's home health nurse," "my wife (she's a medical social
   worker, so treat her read as informed but still a report, not a
   decision)"). This is RECORD's Reported by check.
2. Determine the **evidence type** — firsthand or secondhand. Ask if it
   isn't clear from how the user phrased it. This is RECORD's Evidence type
   check, and it directly affects what tag the entry can take: secondhand
   reports, however confident-sounding, should not be tagged DECISION.
3. Write the **raw** content close to what was actually said — resist the
   urge to clean it up or interpret it yet.
4. Tag it: NEW FACT / CONTRADICTS [existing entry] / DECISION / QUESTION /
   COLOR (context, not actionable). Before tagging DECISION, run RECORD's
   Ownership to decide check — does this source actually have standing to
   make this call, or are they reporting on someone else's call.
5. **If it contradicts something already in state.md or a recent capture**,
   don't silently resolve it. Flag it as a conflict in both the capture log
   and — this matters — in state.md's Open Conflicts section immediately,
   not just at the next brief. A live contradiction is exactly the kind of
   signal this skill exists to keep from getting lost. This is RECORD's
   Conflict check.
6. Append it to `capture-log.md` (never delete or overwrite prior entries;
   mark old entries SUPERSEDED when something replaces them, don't erase
   them — the trail matters). This entry's Resolution status and Dated and
   traceable fields (RECORD's last two checks) are what the capture format
   already requires — see `references/capture-format.md`.
7. Reply briefly, confirming what was captured. Don't produce a full state
   update unless asked — that's the Brief speed, not this one.

## Producing a brief

When the user asks for the current state, a briefing, or prep for a call:

1. Read `state.md` for the existing picture.
2. Read every `capture-log.md` entry since the last brief (or all of them,
   for a first brief).
3. Walk through each new capture and decide: does this update something in
   state.md, does it create or resolve a conflict, does it answer an open
   question, or is it just color that doesn't change anything yet? Only
   captures that pass RECORD in full (a named source, firsthand evidence or
   an authoritative direct statement, no unresolved conflict, real standing
   to decide) can move into state.md's confirmed sections.
4. Update `state.md` accordingly — status summary, care team, medications,
   decisions log (append, never overwrite — a changed decision gets a new
   line, with the old one marked superseded), open conflicts, open
   questions, watch list.
5. Present the brief to the user in the conversation: what's changed, what
   needs a decision, what's still open. Keep it scannable — this is often
   read right before a hard phone call or a family conversation, not at
   leisure.

## Clinical lenses (optional third speed)

Capture and Brief move information. The **lenses** help the user act on it
— by generating the questions worth asking, decoding terminology, and
flagging what a specialist would need that the report didn't include.

Five lenses plus a council, in `references/lenses/`:

- `lens-router.md` — which lens applies, and when not to run one. **Read
  this first, every time.**
- `lens-general-medicine.md` — whole-picture and geriatric framing
- `lens-pain.md` — pain characterization, including when self-report is
  unreliable
- `lens-anxiety.md` — distress described precisely enough to be sorted
- `lens-dementia.md` — cognitive vocabulary, function, and the early
  conversations
- `council-review.md` — staged disagreement when specialties pull against
  each other

### The line the lenses never cross

A lens produces **questions, decoded terminology, and gap flags**. It never
names a diagnosis, never touches a medication or a dose, never resolves an
Open Conflict, and never writes into state.md's Diagnosis, Medications, or
Decisions sections. Lens output is AI-generated reference material — it is
tagged LENS, and reaches state.md only as Open Questions marked
`(lens — not from a clinician)`. In RECORD terms, a lens has no Reported by
(it isn't a person), so it can never satisfy Ownership to decide and can
never pass into a confirmed section.

When a clinician answers one of those questions, *that* is a real capture,
from a real source, and that is what can move state.

Lenses never run during plain capture — capture stays fast. They run on
request: appointment prep, a brief, or an explicit "what should I be asking
about this."

## Handling conflicting information

This is the skill's central job, so it gets special handling:

- Never quietly pick the more recent, more credible-sounding, or more
  convenient version. Both versions get logged.
- The conflict goes into state.md's Open Conflicts section immediately,
  not just noted in the capture log — this is what stops it from getting
  lost the way an ordinary text-message conversation would lose it.
- A conflict is resolved only when the user tells you it's resolved (e.g.,
  "the doctor confirmed it's the lower dose") — never inferred, never
  auto-resolved because one source seems more authoritative. Medical and
  family-care decisions need an explicit human call, not a probabilistic
  guess.
- Once resolved, log the resolution as its own capture (tag: DECISION),
  update state.md, and remove the item from Open Conflicts — but leave the
  original conflicting entries in the capture log untouched, just marked.

## Tone

This is a hard, tiring situation for the user to be managing. Stay direct,
calm, and useful — a clear scratchpad, not a clinical form. Don't add
unsolicited emotional commentary on every capture, but don't be clinical to
the point of coldness either; a brief, genuine acknowledgment is fine when
it's warranted (a hard diagnosis, a difficult decision), especially the
first time something significant comes in. Otherwise, get out of the way
and let the information move.

## What this skill is not

Not medical advice, not a replacement for talking to the care team directly,
and not a substitute for the family actually making decisions together. It
exists purely to stop information from being lost between the people who
need it — the deciding still belongs to the humans.

## Reference files

- `references/capture-format.md` — entry format and tagging rules for
  capture-log.md
- `references/state-format.md` — full structure and section-by-section
  guidance for state.md
- `references/capture-log-template.md` — starter file for a new
  capture-log.md
- `references/state-template.md` — starter file for a new state.md
- `references/lenses/` — the clinical lenses; start with
  `lens-router.md`, which governs when the others run and the constraints
  they all operate under
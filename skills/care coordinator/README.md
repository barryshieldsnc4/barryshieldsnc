# care-coordinator v2 — clinical lenses

Adds a third speed to the skill. v1 had **Capture** (log what you heard)
and **Brief** (update the single state file). v2 adds **Lenses** — domain
expertise that helps you act on what's been captured.

## What changed

**New:** `references/lenses/` — six files.

| File | Job |
|---|---|
| `lens-router.md` | Which lens applies, when not to run one, the constraints all lenses share. Read first, every time. |
| `lens-general-medicine.md` | Whole-picture and geriatric framing; is this one problem or three |
| `lens-pain.md` | Pain characterization, including when self-report isn't reliable |
| `lens-anxiety.md` | Distress described precisely enough for a clinician to sort |
| `lens-dementia.md` | Cognitive vocabulary, function-based reporting, the early conversations |
| `council-review.md` | Staged disagreement when specialties pull against each other |

**Edited:**

- `SKILL.md` — new "Clinical lenses" section, expanded trigger description,
  lenses added to the reference list
- `references/capture-format.md` — new `LENS` tag with its constraints
- `references/state-format.md` — how lens questions live in Open Questions
  and what happens when a clinician answers one

**Unchanged:** both templates. The existing `state.md` and `capture-log.md`
in Drive need no migration.

## The design constraint

A lens produces **questions, decoded terminology, and gap flags**. It never
names a diagnosis, never touches a medication or a dose, never resolves an
Open Conflict, and never writes into Diagnosis, Medications, or Decisions.

This is not caution for its own sake. The skill's entire premise is that
sources stay distinguishable — that Dad's recollection never quietly becomes
what the doctor said. AI-generated clinical reasoning is the single most
dangerous thing that could enter this system unlabeled, because it is
fluent, confident, and has no source. So it gets its own tag, its own
section, and a one-way valve: a lens question can only become a fact by
being answered by a real clinician, logged as that clinician's capture.

## Why the council module matters most

Multi-specialty care for an older adult rarely fails because one physician
is wrong. It fails because each optimizes correctly inside their own domain
and nobody holds the tradeoff — pain control against cognition, anxiety
control against sedation, safety against autonomy. The family attends every
appointment, so the family is the default integrator whether or not anyone
said so. The council makes that role explicit and gives it a page of
questions instead of a feeling that something isn't adding up.

It includes a caregiver's-advocate voice on purpose. A plan nobody can
execute at 2am isn't a plan, and caregiver capacity is a real constraint.

## Install

Drop the folder into your plugin directory, replacing the existing
`care-coordinator`. Everything is additive — v1 behavior is unchanged if
you never invoke a lens.

## What this still isn't

Not medical advice, not a second opinion, not a substitute for the care
team. It helps you arrive prepared and leave with fewer things unasked.

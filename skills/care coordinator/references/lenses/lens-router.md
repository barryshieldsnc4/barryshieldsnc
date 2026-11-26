# Lens router

The orchestration layer for the clinical lenses. Decides which lens applies,
when to convene the council, and — most importantly — when *not* to run a
lens at all.

## The one rule that governs every lens

A lens produces **questions, decoded terminology, and gap flags**. Nothing
else. It never:

- names a diagnosis, or says which of two diagnoses is more likely
- recommends, adjusts, starts, or stops a medication or a dose
- resolves an Open Conflict, or says which source is more credible
- writes into `state.md`'s Diagnosis, Medications, or Decisions sections
- gets logged as a source alongside Dad, the nurse, or the oncologist

Lens output is AI-generated reference material. It is tagged **LENS** in the
capture log, and when it reaches `state.md` it reaches only **Open
Questions**, marked `(lens — not from a clinician)`. A clinician answering
one of those questions is a real capture, from a real source, and *that* is
what can move state.

If a lens ever feels like it wants to conclude something, that is the signal
to convert the conclusion into the question a caregiver should ask.

## When lenses run

**Never during plain capture.** Capture speed stays fast and dumb on
purpose. Log the report, confirm it, stop.

Lenses run only when:

1. The user asks for appointment prep or a brief.
2. The user explicitly asks — "what should I be asking about this," "what
   does this term mean," "what's missing from what Dad told me."
3. A capture contains terminology the user is unlikely to be able to act on
   without decoding — in which case offer the decode in one line, don't
   dump a full lens.

## Routing table

| Signal in the material | Lens |
|---|---|
| Multiple conditions, multiple prescribers, "is this all connected" | `lens-general-medicine` |
| Pain, discomfort, grimacing, guarding, "she seems uncomfortable" | `lens-pain` |
| Worry, panic, restlessness, agitation, sleep disruption | `lens-anxiety` |
| Memory, confusion, orientation, word-finding, personality change | `lens-dementia` |
| Sudden change in confusion over hours or days | `lens-general-medicine` **first** — acute change is a medical question before it is a psychiatric or cognitive one, and it is the single most common thing families attribute to dementia when it isn't |
| Two or more of the above interacting | `council-review` |

Default to fewer lenses. Running all five produces a wall of questions
nobody will bring to a fifteen-minute appointment. Three to five questions
that fit on an index card beat thirty that don't.

## When to convene the council

Convene `council-review` when the material contains a genuine tradeoff
between specialties — where doing the right thing by one system means
accepting a cost in another. The recurring ones in older adults:

- pain control vs. cognition and fall risk
- anxiety or agitation control vs. sedation and function
- treating a symptom vs. the number of medications already in play
- safety and supervision vs. autonomy and dignity

If the perspectives would all agree, don't convene — it wasn't a tradeoff,
it was a question, and one lens handles it.

## Output shape

Whatever the lens, the deliverable is the same three blocks:

```
**Ask the care team:** 3–5 questions, most important first, phrased so
  they can be asked out loud without a script.

**What's missing:** what wasn't in the report that a specialist would
  need before they can answer well.

**Decoded:** any terminology or instrument names translated to plain
  language, so the user can follow the answer they get.
```

Then a single line naming that this is lens output, not clinical advice,
and offering to log the questions to Open Questions.

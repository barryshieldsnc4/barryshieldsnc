---
name: work-cartographer
description: Map how a workflow actually happens today — a faithful, structured, swimlane current-state record with work-time vs wait-time, handoffs, friction as sourced evidence, and fidelity tags. Use after Engagement Intake · ROI returns a Pursue verdict and before any redesign, or whenever anyone says "map this process," "how does this actually work today," "document the current state," "where does the time go," or a redesign is about to run on a vague described process. Do NOT use to redesign, optimize, simplify, or recommend anything (Zero-Based Redesigner), to score steps for AI suitability (AI-Fit Mapper), to re-qualify the engagement or rebuild the ROI (Engagement Intake · ROI), or to document the official SOP as written — this skill maps the actual process as performed, and it never prescribes.
---

# Work Cartographer

Produce a faithful, structured map of how the work happens today — the current state, as actually performed. Nothing else. This is the descriptive step of the Diagnose & Redesign spine: it records what *is*, so the Zero-Based Redesigner has something honest to challenge. The redesigner keeps this map face-down while it designs from a blank sheet, then diffs against it — the completeness and honesty of the map directly set the quality of the change ledger downstream.

Two disciplines make a map worth anything. They govern every phase below:

1. **Descriptive, never prescriptive.** Record the current state. Do not redesign, optimize, simplify, or recommend. If the output contains a "this should be…", a fix, or an improved future step, it has failed — that is the redesigner's job. Capturing a 3-day wait and a 20% rework loop is the job; suggesting how to remove them is not.
2. **Map the actual, not the official — and source everything.** The real process is rarely the SOP. Map what people actually do; where official and actual diverge, record both and mark the gap. Every step, pain point, wait, and number carries a **fidelity tag** — *observed* / *reported* / *assumed* — and its source. A map is evidence; an unsourced or flattering map is worse than none, because the redesign that diffs against it inherits its errors.

## Grounding

Four named disciplines. Take the rigor, not the notation ceremony — the output is structured text a redesigner consumes, not a diagramming exercise.

- **Swimlane / cross-functional process mapping (BPMN concepts, text-first).** Activities in sequence, actors as lanes, gateways as decision points, and every handoff between lanes captured explicitly — handoffs are where delay, error, and rework concentrate.
- **Value-stream mapping (Lean).** Split *work time* (hands on the task) from *wait time* (queue, approval, batch) at every step, and roll up lead time and flow efficiency. The work-vs-wait split is the single most useful thing the map exposes: most lead time is usually waiting, not working.
- **Gemba / go-and-see.** Map from the people who actually do the work — walkthroughs, live observation, artifacts (tickets, timestamps, the shadow spreadsheet) — not from the process owner's memory or the SOP. Where you can't observe, say so with the fidelity tag.
- **SIPOC.** Fix the boundary before mapping: suppliers, inputs, process start and stop, outputs, customers. A map without a fixed boundary sprawls or truncates; both corrupt the diff downstream.

## Inputs

Require both before starting:

1. **The scoped engagement brief from Engagement Intake · ROI**, on a **Pursue** verdict: outcome, done-condition, trigger, stakeholders, constraint sort, and baseline volume/effort. No Pursue verdict, no mapping — route back to Intake.
2. **Access to the actual work:** the people who perform it (not only the owner), and/or system evidence — tickets, timestamps, queue reports, the artifacts the work leaves behind.

## Method — the mapping procedure

The shape below is fixed. The content is derived fresh per engagement. Never import steps, times, lanes, friction, or gaps from any prior map or from the worked sample — the sample shows the shape, not the answers.

### Phase 1 — Fix the boundary (SIPOC)

Anchor the map's edges to the brief before walking anything:

- **Start:** the brief's trigger. **Stop:** the brief's done-condition. The map covers exactly this span — flag scope creep in either direction rather than absorbing it.
- **Suppliers and inputs:** who/what feeds the process at the start.
- **Outputs and customers:** what the process emits and who consumes it.

If the walked reality contradicts the brief's trigger or done-condition (work actually starts earlier, or "done" isn't done), record the contradiction as a finding — do not silently move the boundary.

### Phase 2 — Walk the actual flow: the happy path in swimlanes

With the people who do the work, walk one real unit of work end to end. Build the step table:

| # | Step | Lane (actor/role) | Trigger/Input | Output | Systems/Data | Decision? | Work time | Wait time before/after | Fidelity + source |

Rules of the walk:

- **One lane per performing role.** Every lane change is a **handoff** — number each handoff and note what physically moves (a ticket, an email, a verbal ask) and what queue it lands in.
- **Decision points** are steps: state the question asked, who answers it, and what routes each way.
- **Systems and data** at every step: what is opened, keyed, copied, exported. Re-keying the same data into a second system is a fact worth its own note.
- **Ask "what actually happens," then verify against artifacts.** Timestamps, ticket histories, and sent-mail folders beat recollection. Where the official process (SOP, catalog, policy doc) and the walked reality diverge, record **both** in an official-vs-actual gap register — describe the divergence and its observed reason, without judging it.

### Phase 3 — Map the exception variants that carry volume

Not every rare edge — the branches that carry real volume or chronic pain. For each variant: the fork condition, the share of volume it carries (sourced), the steps that differ, and where it rejoins. State the coverage: happy path + mapped variants should account for a stated percentage of total volume; leave the remainder explicitly unmapped rather than pretending completeness.

### Phase 4 — Time the flow: work vs wait

For every step, capture **work time** (touch time, hands on) and **wait time** (before/after: queue, approval pending, batch window), each fidelity-tagged. Then roll up:

- **Total work time** per unit, **total lead time** trigger-to-done, and **flow efficiency** (work ÷ lead).
- Attribute the waiting: which queues, approvals, and batch windows hold the time, and in what amounts.

Where a time is unknown, write *unknown* with what evidence would establish it. Never estimate silently.

### Phase 5 — Capture friction as evidence

Record, as observed fact with magnitude and cost, never as recommendation:

- **Rework loops:** what bounces back, from where to where, how often (rate, sourced), and the cost per bounce.
- **Redundant re-keying:** the same data entered more than once — where, by whom.
- **Over-processing:** effort spent beyond what the output's consumer uses (reports nobody reads, approvals that never decline — state the observed decline rate, not a verdict on the approval).
- **Chronic exceptions:** the variants everyone treats as normal.

Phrasing discipline: friction entries state *what is and what it costs*. Strike any sentence containing a fix, a "should," or a future tense about the process.

### Phase 6 — Reconcile against Intake's baseline

Compare the mapped volume, per-unit effort, and cycle time against the ROI baseline in the brief. Where they agree, say so. Where they disagree, **flag the discrepancy with both numbers and both sources** — do not silently override either. The discrepancy note travels with the map; Intake's baseline is re-examined by humans, not overwritten by the Cartographer.

### Phase 7 — Pass the constraint sort through

Intake produced a constraint sort — live (with named sources) vs inherited — in the exact form the Zero-Based Redesigner's Phase 1 consumes. **Preserve it verbatim and pass it through intact.** Do not re-derive, restate, or edit it. You may **append** additional *inherited* constraints discovered during mapping (a batch window, a tool limit, a shadow-process dependency), each clearly tagged **[Cartographer finding]** with its source. Live-constraint claims you uncover are recorded as findings for Intake to verify — the Cartographer does not promote constraints to live status.

### Phase 8 — Run the QA gate

Mandatory. Do not deliver without it. See below.

## QA gate — hard, non-optional

Every item must pass. Fix and rerun before delivering.

- [ ] **Descriptive test.** No sentence in the output recommends, fixes, redesigns, or speculates about a better process. Scan for "should," "could," "recommend," "instead," "opportunity," "improve" — any hit referring to the process fails the map.
- [ ] **Boundary fixed.** SIPOC complete; map start = brief trigger, map stop = brief done-condition; any contradiction recorded as a finding, not absorbed.
- [ ] **Actual over official.** The map reflects the walked reality; every official-vs-actual divergence appears in the gap register with both versions described.
- [ ] **Row completeness.** Every step has a lane, trigger/input, output, systems/data, work time, wait time (value or *unknown* + evidence needed), and a fidelity tag with source.
- [ ] **Handoffs enumerated.** Every lane change is numbered and described; the handoff count matches the lane transitions in the table.
- [ ] **Variant coverage stated.** Happy path + variants account for a stated share of volume; the unmapped remainder is explicit.
- [ ] **Work/wait rollup done.** Total work time, total lead time, and flow efficiency computed; the waiting attributed to named queues/approvals/batches.
- [ ] **Baseline reconciled.** Agreement or discrepancy with Intake's baseline stated with both numbers and sources; nothing silently overridden.
- [ ] **Constraint sort intact.** Intake's sort passes through unedited; any additions are inherited-only, tagged [Cartographer finding], with sources; no constraint promoted to live.
- [ ] **Nothing invented.** Every number, step, pain, and gap has a source; no step, time, or volume appears without one.
- [ ] **Derive-don't-default.** Nothing specific to the worked sample or any prior map appears in the output.

## Delivery

Output is a single markdown document following `references/map-template.md`: SIPOC boundary, swimlane step table, handoff register, exception variants, work/wait rollup, friction register, official-vs-actual gap register, baseline reconciliation, and the passed-through constraint sort. Text-first; produce a diagram only on request.

**Handoff:** pass the map to **Zero-Based Redesigner** as its current-state input. If the redesign needs finer granularity on a specific step, **Task Decomposer** can break that step into tasks first.

## References

- `references/map-template.md` — the fill-in structure. Use it as the output skeleton.
- `references/sample-map.md` — one complete worked example (a new-hire access provisioning workflow). Read it for the shape and the bar; never copy its lanes, times, or gaps into a live map.

---
name: zero-based-redesigner
description: Redesign a mapped workflow from a blank sheet, agent-first — every existing step must re-earn its right to exist against the outcome. Use whenever a current-state map (from Work Cartographer) or a described process is ready to be rethought, or when anyone says "redesign this workflow," "what should this look like if we started over," "which steps should AI take," "rebuild this process around agents," or asks for a future-state design with a change ledger. Do NOT use to map or document the current state (that is Work Cartographer), to score individual steps for AI suitability (that is AI-Fit Mapper), to build or spec the agents themselves (Future-State Architect / Agent Spec Writer), or to produce an incremental "optimize what's there" plan — this skill exists precisely to prevent that.
---

# Zero-Based Redesigner

Take a mapped current-state workflow and redesign it from a blank sheet, agent-first. The output is a from-scratch future-state workflow plus a change ledger that accounts for every step — eliminated, merged, re-sequenced, newly-AI, or human-governed — with the reason for each move.

The discipline is zero-based: no step carries forward on incumbency. A step survives only by re-earning its place against the outcome. Automating a step that shouldn't exist is the failure mode this skill is built to catch.

## Grounding

The method draws on four named disciplines. Apply them; don't just cite them.

- **Zero-based budgeting applied to process** (Pyhrr). Nothing inherits a place in the future state. Every step starts at zero and must justify itself from the outcome, not from precedent.
- **Business process reengineering** (Hammer & Champy; Hammer, *"Reengineering Work: Don't Automate, Obliterate"*). Eliminate and merge before you automate. Automating waste makes waste faster. Redesign around outcomes, not tasks; have those who use the output of a process perform the process.
- **Outcome-backward design** (jobs-to-be-done; Amazon working-backwards). Start from the finished job and the done-condition, and derive the minimum path back to the trigger. Never start from step 1 of the current process.
- **Agent-first workflow design** (AI-native operating models). Design assuming AI agents operate and humans govern: humans set direction, handle exceptions, and own accountability. The question is not "which current steps can AI do" but "what is the minimum agent-operated path to the outcome, and where must a human govern it."

## Inputs

Require both before starting. If either is missing, stop and request it — do not reconstruct it yourself.

1. **Current-state map** — from Work Cartographer, or a described process with steps, actors, handoffs, and artifacts.
2. **Outcome and constraints** — from Engagement Intake · ROI: the job-to-be-done, the done-condition, and the constraints claimed to be non-negotiable.

Shared references this skill reads:

- **`model-selection`** — tiers any AI step T0–T4 by cost of failure, with per-run pricing. Read it in Phase 5. Route by cost of failure, never by task difficulty.
- **`cisco-brand-compliance`** — read only if producing visual output (diagrams, decks).

## Method — the zero-based challenge procedure

The shape below is fixed. The content is derived fresh from each engagement. Never import steps, verdicts, tiers, or examples from any prior redesign or from the worked sample — the sample shows the shape, not the answers.

### Phase 1 — Anchor the outcome

State, in one or two sentences each, with no reference to any current-state step:

- **Job-to-be-done:** what the requester is actually hiring this workflow to accomplish.
- **Done-condition:** the observable state that means the job is finished, and for whom.
- **Trigger:** the event that legitimately starts the work.

Then sort the stated constraints into two lists:

- **Live constraints** — regulatory, legal, contractual, safety, or data-governance obligations that bind regardless of design. Name the source of each.
- **Inherited constraints** — limits that exist only because of the old process: manual effort, pre-AI tooling, an org boundary, a batch cadence, a handoff, "the system requires it." These do not bind the future state. List them so they can be deliberately discarded.

If a constraint's source can't be named, treat it as inherited until someone produces the source.

**Gate:** if the outcome statement mentions a current-state step or artifact by name, rewrite it. The outcome must stand on its own.

### Phase 2 — Blank-sheet design (current map face-down)

Before interrogating the current state step by step, design the future state from nothing. This ordering is the core of the discipline: design first, then diff — never edit the current state into a future state.

Working backward from the done-condition to the trigger, design the **minimum path**: the fewest steps that produce the outcome under only the live constraints, assuming:

- **Agents operate.** Default every step to AI execution unless a live constraint or an accountability requirement forces a human.
- **Humans govern.** For each part of the path, place the human role explicitly as one of: *sets direction* (defines policy/criteria the agents execute against), *handles exceptions* (the defined escape path when the agent's confidence or the case falls outside policy), or *owns accountability* (signs, attests, or answers for the result).
- **Information moves without handoffs.** A handoff is a seam from the old org design; in the blank sheet, data flows to where the decision is made.

Write the blank-sheet path down before Phase 3. It is the reference design the current state will be reconciled against — not the other way around.

### Phase 3 — Challenge every current step

Now take the current-state map and interrogate every step, one at a time, in a challenge table. For each step answer four questions:

1. **What outcome-work does this step do?** State its contribution to the done-condition in one sentence. If you cannot, that is the answer.
2. **What constraint created it?** Name the constraint of origin: manual effort, pre-AI tooling, an org boundary, a handoff, a control requirement, a regulation. Every step has an origin; find it.
3. **Is that constraint still live?** Check it against the Phase 1 lists. Gone, inherited, or live-with-a-source.
4. **Verdict.** Exactly one of:
   - **Eliminate** — the constraint is gone and the step does no outcome-work the blank sheet doesn't already cover.
   - **Merge** — its outcome-work is real but belongs inside another step; name the step it folds into.
   - **Re-sequence** — the work survives but its position was an artifact of the old constraint; state the new position and why.
   - **Newly-AI** — the work survives, an agent operates it, tiered in Phase 5.
   - **Human-governed** — the work survives as a human governance point; name which of the three governance roles it is.
   - **Retain (re-earned)** — the step survives essentially as-is. This verdict requires a named live constraint as justification. It should be rare; if more than a quarter of steps land here, rerun Phase 1 — the constraint sorting was too generous.

Order of operations within the verdict is fixed: **eliminate, then merge, then decide operator.** Never assign Newly-AI to a step that hasn't first survived elimination and merging. That sequencing is the "don't automate, obliterate" guard.

### Phase 4 — Reconcile into the future state

Fold the Phase 3 survivors into the Phase 2 blank-sheet path:

- Survivors whose work the blank sheet already covers: absorbed — note where.
- Survivors carrying a live constraint the blank sheet missed (an audit checkpoint, a mandated notification): add them as the smallest possible step, and mark the constraint that forced the addition.
- Anything in the blank sheet with no current-state ancestor is a **new step** — it appears in the ledger as newly created, with its reason.

The result is the single future-state workflow: numbered steps, trigger to done-condition, each step labeled **AI-operated** or **human-governed**, with the governance role named for every human step and a defined exception path for every AI step.

### Phase 5 — Tier every AI step

Read `model-selection`. For each AI-operated step, assign a tier T0–T4 **by cost of failure**: what happens if this step is wrong — who is harmed, what is the blast radius, is it recoverable, is it visible. Record the tier, the cost-of-failure rationale in one sentence, and the per-run price from `model-selection`. A hard step with a cheap failure gets a low tier; an easy step whose failure touches people, money, or compliance gets a high tier. Difficulty is not the routing variable.

### Phase 6 — Write the change ledger

The ledger is the accountability artifact. Every current-state step appears exactly once; every net-new step appears exactly once. Columns:

| # | Step (current or new) | Verdict | Constraint of origin | Why (one sentence) | Future-state home | Tier (if AI) |

The ledger must be readable by the process owner as a complete answer to "what did you do to my process and why." No step vanishes silently.

### Phase 7 — Run the QA gate

Mandatory. Do not deliver without it. See below.

## QA gate — hard, non-optional

Every item must pass. If any item fails, fix the design and rerun the gate. Deliver only a passing design.

- [ ] **Outcome independence.** The Phase 1 outcome statement names no current-state step or artifact.
- [ ] **Sequence integrity.** The blank-sheet design (Phase 2) was written before the step-by-step challenge (Phase 3), and the future state was produced by reconciling into the blank sheet — not by editing the current map.
- [ ] **The zero-based test.** The future state is not a relabeled subset of the current steps. Concretely: at least one elimination or merge exists, or the ledger contains an explicit, live-constraint-backed justification for why every single step re-earned its place. If the future state could have been produced by "optimize the current steps," the design has failed — restart at Phase 2.
- [ ] **Obliterate-before-automate.** No step carries a Newly-AI verdict without having first survived eliminate and merge. No inherited constraint survived into the future state.
- [ ] **Full accounting.** Every current-state step appears in the ledger exactly once with a verdict, a constraint of origin, and a reason. Every new step appears with its reason.
- [ ] **Tier discipline.** Every AI step has a T0–T4 tier from `model-selection`, a cost-of-failure rationale, and a per-run price. No tier was assigned by task difficulty.
- [ ] **Governance completeness.** Every AI step has a defined exception path to a human; every human step names its governance role (direction / exceptions / accountability); accountability for the overall outcome is assigned to a named human role.
- [ ] **Derive-don't-default.** Nothing specific to the worked sample or any prior engagement appears in the output.

## Delivery

Output is a single markdown document following `references/redesign-template.md`: outcome anchor, blank-sheet design, challenge table, future-state workflow, change ledger, QA gate results. Produce visuals only on request, and read `cisco-brand-compliance` first if you do.

**Handoff:** pass the future-state workflow to **AI-Fit Mapper** to validate AI suitability per step before anything is built. Note in the delivery that Future-State Architect / Agent Spec Writer and Human-in-the-Loop are downstream of that validation.

## References

- `references/redesign-template.md` — the fill-in structure for a redesign engagement. Use it as the output skeleton.
- `references/sample-redesign.md` — one complete worked example (an HR approval workflow). Read it to see the shape and the bar. Never copy its content into a live engagement.

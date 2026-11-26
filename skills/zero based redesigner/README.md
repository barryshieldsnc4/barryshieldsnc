# Zero-Based Redesigner

Takes a mapped current-state workflow and redesigns it from a blank sheet, agent-first. Every existing step has to re-earn its place against the outcome. The output is a future-state workflow plus a change ledger that accounts for every step.

## When to use it
- A current-state map (from Work Cartographer) or a described process is ready to be rethought
- "Redesign this workflow", "what should this look like if we started over", "which steps should AI take", "rebuild this process around agents"

It does not map the current state, score individual steps for AI suitability, build the agents, or produce an incremental "optimize what's there" plan.

## Inputs
1. A current-state map
2. The outcome and constraints, from Engagement Intake · ROI

If either is missing, it stops and asks for it.

## Method
It combines zero-based budgeting, business process reengineering ("don't automate, obliterate"), outcome-backward design and agent-first workflow design.

1. **Anchor the outcome:** job-to-be-done, done-condition and trigger, with constraints sorted into live and inherited.
2. **Blank-sheet design:** the minimum path, designed before looking at the current state.
3. **Challenge every current step** in a table.
4. **Reconcile** the blank sheet against the current state.
5. **Tier every AI step** by cost of failure.
6. **Write the change ledger:** eliminated, merged, re-sequenced, newly AI, or human.
7. **Run the QA gate.**

## Files
- `SKILL.md`: the full skill
- `references/redesign-template.md`: the structure of the output
- `references/sample-redesign.md`: a sample showing the shape (not answers to reuse)

It refers to other skills (`model-selection`, `cisco-brand-compliance`) that are not in this repo.

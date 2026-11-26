# Work Cartographer

Produces a faithful, structured map of how a workflow actually happens today. It records the current state as performed, and nothing else.

## When to use it
- After Engagement Intake · ROI returns a Pursue verdict and before any redesign
- "Map this process", "how does this actually work today", "document the current state", "where does the time go"

It does not redesign, optimize or recommend anything. Redesign is the Zero-Based Redesigner's job. It also doesn't score steps for AI suitability or document the official SOP as written.

## Two rules
1. **Descriptive, never prescriptive.** If the output contains a "this should be...", it has failed.
2. **Map the actual, not the official.** Every step, wait and number is sourced and fidelity-tagged. Where the SOP and reality differ, both are recorded.

## Method
It draws on swimlane mapping, value-stream mapping (work time vs wait time), go-and-see observation and SIPOC.

1. Fix the boundary (SIPOC).
2. Walk the actual flow in swimlanes, numbering every handoff.
3. Map the exception variants that carry volume.
4. Time the flow: work vs wait, with lead time and flow efficiency.
5. Capture friction as evidence.
6. Reconcile against Intake's baseline.
7. Pass the constraint sort through.
8. Run the QA gate.

## Files
- `SKILL.md`: the full skill
- `references/map-template.md`: the structure of the map
- `references/sample-map.md`: a sample showing the shape (not answers to reuse)

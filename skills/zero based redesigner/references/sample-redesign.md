# Zero-Based Redesign — Tuition Reimbursement Approval (WORKED SAMPLE)

> **Sample only.** This file demonstrates the shape and the bar. Its specifics — the steps, verdicts, tiers, and numbers — belong to this fictionalized engagement and must never be copied into a live redesign.

**Engagement:** P3 education-benefits operations. ~1,900 tuition reimbursement requests/year; median cycle time 23 business days; two FTE-equivalents of processing effort across HR ops, managers, and finance.
**Current-state source:** Work Cartographer map, "Tuition Reimbursement v3" (9 steps, 4 actors, 3 handoffs).

---

## 1. Outcome anchor

**Job-to-be-done:** An eligible employee who completes a qualifying course gets reimbursed the correct amount, quickly, with a defensible record that policy was applied consistently.

**Done-condition:** Correct payment issued to the employee, decision and evidence archived to the benefits record, within 5 business days of a complete submission.

**Trigger:** Employee submits proof of course completion and payment.

### Live constraints
| Constraint | Source |
|---|---|
| Reimbursement above the annual IRS-excludable threshold must be flagged as taxable income | US tax code / payroll compliance |
| Decision evidence retained 7 years, auditable | Corporate records-retention policy REC-114 |
| Program annual cap per employee; eligible course criteria | Published benefits policy HR-EB-07 |
| Payment executed only through the payroll system of record | Finance controls SOX-aligned |

### Inherited constraints (discarded)
| Constraint | Old origin |
|---|---|
| Pre-approval required *before* enrolling | Manual budgeting era — annual cap is now checkable in real time |
| Manager signs every request | Org-boundary habit; policy HR-EB-07 contains no manager-discretion criteria |
| HR ops reviews every receipt by hand | Pre-AI tooling — no extraction capability existed |
| Finance batches payments monthly | Legacy ERP cadence; payroll now runs off-cycle payments daily |

---

## 2. Blank-sheet design

*Written before the challenge table. Backward from the done-condition, live constraints only.*

| # | Step | Operator | Governance role | Notes |
|---|---|---|---|---|
| B1 | Intake: employee submits completion proof + receipt via single form | AI (conversational intake, completeness check at submission) | — | Rejects nothing; asks for what's missing in the moment |
| B2 | Extract & verify: parse receipt/transcript, check course eligibility, cap balance, and taxable-threshold status against HR-EB-07 | AI | — | One decision step, not three |
| B3 | Decide & pay: within-policy → approve, route payment via payroll, write decision + evidence to record | AI | — | Payroll system of record satisfies SOX constraint |
| B4 | Exception review: out-of-policy, low-confidence, or threshold-flagged cases | Human (Benefits specialist) | Handles exceptions | Single queue; decision recorded with reason code |
| B5 | Govern: policy owner reviews monthly drift/consistency report and audit sample | Human (Benefits program owner) | Sets direction; owns accountability | Owns HR-EB-07 criteria; attests quarterly |

**Exception paths:** B2/B3 escalate to B4 when eligibility confidence is below threshold, cap or taxable limit is touched, or the amount exceeds the auto-approve ceiling set by the program owner.

---

## 3. Challenge table

| # | Current step | Outcome-work | Constraint of origin | Still live? | Verdict | Why |
|---|---|---|---|---|---|---|
| 1 | Employee requests pre-approval before enrolling | None toward done-condition | Manual budget tracking | Gone | **Eliminate** | Cap is checkable in real time at claim; pre-approval adds a 6-day wait and no control |
| 2 | Manager reviews and signs pre-approval | None; policy has no manager criteria | Org-boundary habit | Gone (inherited) | **Eliminate** | A signature against no criteria is ritual, not control |
| 3 | HR ops checks employee eligibility | Real: confirms HR-EB-07 eligibility | Pre-AI tooling (manual lookup) | Constraint gone; work survives | **Merge → B2** | Eligibility is one field-check inside the extraction/verification step |
| 4 | Employee submits receipts post-course | Real: the trigger evidence | — (intrinsic) | Live | **Newly-AI (B1)** | Survives as conversational intake with in-the-moment completeness checking |
| 5 | HR ops manually keys receipt data into tracker | None distinct; transcription | Pre-AI tooling | Gone | **Eliminate** | Extraction happens inside B2; a human retyping a PDF is waste made of salary |
| 6 | HR ops verifies amounts vs. cap and taxable threshold | Real: cap + tax compliance | Pre-AI tooling | Constraint gone; work survives (tax rule live) | **Merge → B2** | Same evidence, same moment as step 3's check |
| 7 | Second HR reviewer spot-checks 100% of files | Real control intent, wrong dose | Manual error rates | Gone in form | **Re-sequence → B5** | Control moves from 100% pre-payment review to post-payment audit sampling + drift report — better control, no cycle-time cost |
| 8 | Finance approves and batches payment monthly | Payment execution is real; batching is not | Legacy ERP cadence | Cadence gone; SOX routing live | **Newly-AI (B3)** | Auto-route through payroll system of record; the SOX constraint binds the *rail*, not a human batcher |
| 9 | HR ops files decision to employee record | Real: REC-114 retention | Manual filing tooling | Constraint (retention) live; tooling gone | **Merge → B3** | Archiving is a write, not a job |
| — | *(new)* Exception review queue | Policy-boundary judgment | REC-114 + program integrity | Live | **Human-governed (B4)** | Humans handle exceptions; every override carries a reason code |
| — | *(new)* Monthly drift report + audit sample + quarterly attestation | Direction + accountability | REC-114, HR-EB-07 ownership | Live | **Human-governed (B5)** | Humans set direction and own the outcome |

---

## 4. Future-state workflow

| # | Step | Operator | Tier | Governance role | Exception path |
|---|---|---|---|---|---|
| B1 | Conversational intake + completeness check | AI | T1 | — | Unparseable submission → B4 |
| B2 | Extract, verify eligibility, cap, taxable status | AI | T3 | — | Low confidence / threshold touched → B4 |
| B3 | Approve, pay via payroll, archive decision + evidence | AI | T2 | — | Payment rail error → B4 |
| B4 | Exception review | Human — Benefits specialist | — | Handles exceptions | — |
| B5 | Drift report review, audit sample, quarterly attestation | Human — Benefits program owner | — | Sets direction; owns accountability | — |

**Overall outcome accountability:** Benefits program owner (B5).

**Result vs. current state:** 9 steps → 3 AI-operated + 2 human-governance; 3 handoffs → 0; projected cycle time 23 days → same-day for within-policy cases (≈85% of volume, per prior-year distribution).

---

## 5. AI tiering (via `model-selection`)

| Step | Tier | Cost-of-failure rationale | Per-run price |
|---|---|---|---|
| B1 Intake | T1 | Failure = a bad submission gets asked to resubmit; fully recoverable, no money moves | per `model-selection` current rates |
| B2 Verify | T3 | Failure = wrong money paid or a taxable event misclassified — financial + compliance blast radius, partially recoverable | per `model-selection` current rates |
| B3 Pay & archive | T2 | Payment rail is deterministic (system of record enforces controls); failure = a mis-write caught by reconciliation | per `model-selection` current rates |

Note the routing: B2 is not the *hardest* step — extraction is routine — but its failure is the most expensive, so it carries the highest tier. That is cost-of-failure routing.

---

## 6. Change ledger

| # | Step | Verdict | Constraint of origin | Why | Future home | Tier |
|---|---|---|---|---|---|---|
| 1 | Pre-approval request | Eliminated | Manual budgeting | Real-time cap check removes the need | removed | — |
| 2 | Manager sign-off | Eliminated | Org-boundary habit | No policy criteria behind the signature | removed | — |
| 3 | Eligibility check | Merged | Pre-AI tooling | Folds into unified verification | B2 | T3 |
| 4 | Receipt submission | Newly-AI | Intrinsic trigger | Becomes conversational intake | B1 | T1 |
| 5 | Manual data entry | Eliminated | Pre-AI tooling | Extraction replaces transcription | removed | — |
| 6 | Cap/tax verification | Merged | Pre-AI tooling (tax rule live) | Same evidence, same decision moment | B2 | T3 |
| 7 | 100% second review | Re-sequenced | Manual error rates | Becomes post-payment audit sampling | B5 | — |
| 8 | Finance batch payment | Newly-AI | Legacy ERP cadence (SOX rail live) | Auto-route through payroll system of record | B3 | T2 |
| 9 | Manual filing | Merged | Manual tooling (retention live) | Archiving is a write inside pay step | B3 | T2 |
| new | Exception queue | Human-governed | Program integrity | Humans handle exceptions with reason codes | B4 | — |
| new | Drift report + attestation | Human-governed | REC-114 / policy ownership | Direction + accountability | B5 | — |

**Summary:** Eliminated 3 · Merged 3 · Re-sequenced 1 · Newly-AI 2 · Human-governed 2 (new) · Retained 0 · New 2

---

## 7. QA gate results

| Check | Pass? | Note |
|---|---|---|
| Outcome independence | ✅ | Anchor names no current step |
| Sequence integrity | ✅ | §2 written before §3; future state reconciled into blank sheet |
| Zero-based test | ✅ | 3 eliminations, 3 merges; not producible by optimizing existing steps |
| Obliterate-before-automate | ✅ | Steps 1, 2, 5 died before any automation decision; no inherited constraint survived |
| Full accounting | ✅ | 9 current + 2 new steps, each exactly once |
| Tier discipline | ✅ | Highest tier sits on highest cost of failure (B2), not hardest task |
| Governance completeness | ✅ | Every AI step has an exception path; accountability assigned (B5) |
| Derive-don't-default | ✅ | Sample flagged as non-transferable at top of file |

---

## 8. Handoff

→ **AI-Fit Mapper**: validate B1–B3 for AI suitability before build. Downstream: Agent Spec Writer (B1–B3 agents), Human-in-the-Loop (B4/B5 governance design).

# Current-State Map — New-Hire System-Access Provisioning (WORKED SAMPLE)

> **Sample only.** This file demonstrates the shape and the bar. Its lanes, steps, times, gaps, and numbers belong to this fictionalized engagement and must never be copied into a live map. Note what is absent throughout: recommendations. The map states what is.

**Engagement brief:** Engagement Intake · ROI, "New-hire access provisioning," **Pursue** verdict (expected payback 14–20 months) — confirmed.
**Mapped with:** 2 onboarding coordinators (HR Ops), 1 IT service-desk agent, 2 hiring managers, 1 application owner (walkthroughs); 1 half-day live observation of the coordinator queue.
**Evidence base:** ITSM ticket export (last 2 quarters, n=563 provisioning tickets), identity-platform sync logs, the HR Ops team's shared tracking spreadsheet, sent-mail samples from 2 managers.
**Date / cartographer:** [Q_] / Workflow Design

**Fidelity tags:** `[O]` observed · `[R]` reported · `[A]` assumed — each with a source.

---

## 1. Boundary (SIPOC)

| Element | Content |
|---|---|
| **Start (trigger, per brief)** | Offer accepted and start date confirmed in the HRIS |
| **Stop (done-condition, per brief)** | New hire can perform role work: identity active, standard bundle + role-specific applications accessible, verified working |
| Suppliers | Recruiting (offer record), hiring manager (role/app requirements), app owners (entitlements) |
| Inputs | HRIS joiner record; role profile; manager's app list |
| Outputs | Active identity; granted entitlements; provisioning ticket closed |
| Customers | New hire; hiring manager; security/compliance (access records) |

**Boundary findings:** Walked reality matches the brief's trigger. The brief's done-condition ("verified working") has no owner in practice — no step verifies access works before ticket closure; verification happens when the new hire reports failures (see F3). Recorded as a boundary finding; boundary not moved.

---

## 2. Swimlane step table — happy path

Lanes: **HM** hiring manager · **HRC** HR Ops onboarding coordinator · **ITSD** IT service desk · **AO** application owner(s) · **SYS** automated system action

| # | Step | Lane | Trigger/Input | Output | Systems/Data | Decision? | Work time | Wait (before/after) | Fidelity + source |
|---|---|---|---|---|---|---|---|---|---|
| 1 | Joiner record confirmed; onboarding case auto-created | SYS | Offer accepted in HRIS | Onboarding case | HRIS → case tool | — | ~0 | after: overnight batch to case tool `[O]` sync logs | `[O]` sync logs |
| 2 | Coordinator picks up case, emails HM the "role needs" form | HRC | Case in queue | Form sent | Case tool, email, team spreadsheet (case re-keyed) | — | 15 min `[O]` observation | before: 0.5–2 days in queue `[O]` case timestamps | `[O]` |
| 3 | HM fills role-needs form (standard bundle + role apps) | HM | Form received | Completed form | Email, form doc | — | 20–30 min `[R]` 2 HMs | before: 1–4 days awaiting HM `[O]` ticket export | `[R]/[O]` |
| 4 | Coordinator submits standard-bundle request | HRC | Completed form | ITSM ticket (bundle) | ITSM catalog; form data re-keyed into ticket | — | 20 min `[O]` | after: ticket triage queue 1–2 days `[O]` ITSM export | `[O]` |
| 5 | Service desk validates ticket, creates identity | ITSD | Ticket assigned | Identity created | Identity platform, ITSM | Gate: record complete? incomplete → bounce (see F1) | 25 min `[R]` ITSD agent | after: overnight identity sync batch `[O]` sync logs | `[R]/[O]` |
| 6 | Standard bundle entitlements applied | SYS | Identity synced | Bundle active | Identity platform | — | ~0 | after: overnight batch `[O]` | `[O]` |
| 7 | HM emails app owners directly for role-specific apps | HM | Bundle confirmation (or start-date pressure) | Email requests (2–5 apps typical) | Email; tracked in HRC team spreadsheet when HM cc's | — | 15–25 min `[R]` 2 HMs | — | `[R]` — see G1 |
| 8 | Each app owner reviews and grants (or queries) | AO | HM email | Entitlement granted per app | App admin consoles (per app) | Gate: role justification sufficient? query → back to HM | 10–20 min per app `[R]` 1 AO | before: 2–5 days per app, parallel `[R]` AO + HM; spreadsheet dates corroborate `[O]` | `[R]/[O]` |
| 9 | Coordinator marks case complete when HM confirms | HRC | HM "all set" email | Case + ticket closed | Case tool, ITSM, spreadsheet (third keying of same case) | — | 10 min `[O]` | before: 0–3 days awaiting HM confirmation `[R]` HRC | `[O]/[R]` |

### Handoff register
| H# | From → To | Between steps | What moves | Lands in | Typical wait | Fidelity + source |
|---|---|---|---|---|---|---|
| H1 | SYS → HRC | 1→2 | Case | Coordinator queue | 0.5–2 days | `[O]` case timestamps |
| H2 | HRC → HM | 2→3 | Form via email | HM inbox | 1–4 days | `[O]` ticket export |
| H3 | HM → HRC | 3→4 | Completed form | Coordinator inbox | <0.5 day | `[R]` HRC |
| H4 | HRC → ITSD | 4→5 | ITSM ticket | Triage queue | 1–2 days | `[O]` ITSM export |
| H5 | HM → AO | 7→8 | Email per app | Each AO's inbox | 2–5 days per app | `[R]` corroborated `[O]` spreadsheet |
| H6 | AO/HM → HRC | 8→9 | "All set" email | Coordinator inbox | 0–3 days | `[R]` HRC |

Six handoffs across four human lanes; three of the six queues (H2, H4, H5) hold the majority of lead time (see §4).

---

## 3. Exception variants (volume-carrying branches)

**Coverage:** happy path ~61% + variants below ~31% = ~92% of volume mapped; remainder ~8% (contractors, rehires, acquisitions) explicitly unmapped `[O]` ticket export categorization.

### Variant V1 — Incomplete-record bounce
- **Fork condition:** ticket fails ITSD validation (missing cost center, wrong role code, start date mismatch) — at step 5
- **Share of volume:** ~22% of tickets `[O]` ITSM export (124/563 reopened at triage)
- **Steps that differ:** ticket bounces to HRC (re-queue 1–2 days), HRC re-queries HM in ~half the bounces (adds H2/H3 round trip), resubmit re-enters triage queue
- **Rejoins at:** step 5

### Variant V2 — Day-1 arrival without role apps
- **Fork condition:** start date arrives before step 8 completes — effectively time-based
- **Share of volume:** ~35% of hires start with bundle only, role apps pending `[O]` spreadsheet date comparison, corroborated `[R]` both HMs
- **Steps that differ:** new hire begins work without role apps; HM escalates by email/chat to AOs; ITSD receives "day-1 no access" tickets (avg 41/quarter `[O]` ITSM export)
- **Rejoins at:** step 8

---

## 4. Work vs wait rollup

| Measure | Value | Fidelity + source |
|---|---|---|
| Total work time per unit (happy path) | ~2.5–3.5 hrs | sum of table `[O]/[R]` |
| Total lead time (trigger → done) | 8–15 business days, median ~11 | `[O]` case-open to case-close timestamps, 2 quarters |
| **Flow efficiency (work ÷ lead)** | **~3–4%** | computed |

**Where the waiting lives:**
| Queue / approval / batch | Wait contributed | Fidelity + source |
|---|---|---|
| H5: app-owner approvals (parallel, longest pole governs) | 2–5 days | `[R]/[O]` |
| H2: HM role-needs form turnaround | 1–4 days | `[O]` |
| H4: ITSM triage queue | 1–2 days | `[O]` |
| Batch windows: HRIS→case sync + identity sync (steps 1, 5–6) | 2 overnight cycles | `[O]` sync logs |
| H1 + H6: coordinator queue in/out | 0.5–5 days combined | `[O]/[R]` |

---

## 5. Friction register — evidence only

| F# | Type | What is observed | Magnitude | Cost | Fidelity + source |
|---|---|---|---|---|---|
| F1 | Rework loop | Tickets bounce at ITSD validation for incomplete/incorrect joiner data (V1) | ~22% of tickets; adds 2–4 days each | ~30 min combined HRC+ITSD handling per bounce; 124 bounces over 2 quarters | `[O]` ITSM export |
| F2 | Re-keying | The same case data is keyed three times: case tool (step 2), ITSM ticket (step 4), team spreadsheet (steps 2, 9) | Every case | ~15 min/case across keyings; spreadsheet and ITSM disagree on close dates in ~9% of sampled cases | `[O]` observation + spreadsheet/ITSM comparison, n=60 |
| F3 | Chronic exception | Access is not verified before closure; failures surface as new-hire reports after start | 41 "day-1 no access" tickets/quarter; V2 affects ~35% of hires | New hires idle on role work 1–5 days; HM escalation time | `[O]` ITSM export, `[R]` HMs |
| F4 | Over-processing | App-owner review at step 8: of 88 sampled grants, 87 approved as requested | 99% approval-as-requested rate | 10–20 min AO time per app per hire | `[O]` sample from 2 app consoles, `[R]` AO |

---

## 6. Official-vs-actual gap register

| G# | Official process says | What actually happens | Observed reason | Fidelity + source |
|---|---|---|---|---|
| G1 | Role-specific access is requested through the ITSM catalog by the hiring manager, one catalog item per app, before day 1 | HMs email app owners directly (step 7); requests are tracked, when at all, in the HR Ops spreadsheet; the catalog items for ~half the role apps are outdated or missing | HMs report the catalog forms are slower than email and reject entries for apps whose items are stale | `[R]` both HMs, `[R]` HRC; catalog staleness `[O]` — 11 of 23 sampled role-app items point to deprecated approvers |
| G2 | The coordinator closes the case only after access verification | Cases close on the HM's "all set" email; no verification step is performed by anyone | No lane owns verification; the case tool has no verification field | `[O]` walkthrough + case-tool field inspection |

---

## 7. Baseline reconciliation (vs Intake's ROI baseline)

| Measure | Intake baseline (source) | Mapped value (source) | Agreement / DISCREPANCY |
|---|---|---|---|
| Volume /yr | ~1,100 hires (HRIS annual report) | ~1,126 annualized (563 tickets / 2 quarters, `[O]`) | Agreement (±3%) |
| Effort per unit | ~1.5 hrs (process-owner estimate) | ~2.5–3.5 hrs (`[O]/[R]`, step table) | **DISCREPANCY** — mapped effort roughly double; owner estimate excluded HM and AO lanes |
| Cycle time | "about a week" (process-owner estimate) | median ~11 business days (`[O]` timestamps) | **DISCREPANCY** — timestamps vs recollection |

**Discrepancy notes:** Both effort and cycle time map higher than the Intake baseline; sources shown. Flagged for Intake to re-examine the ROI arithmetic — the baseline is not overridden here.

---

## 8. Constraint sort — passed through from Intake, intact

**Live constraints** *(verbatim from Intake)*
| Constraint | Source |
|---|---|
| Access grants require documented approval and are subject to segregation-of-duties rules for financial systems | Access-control policy AC-31 (SOX-aligned) |
| Joiner identity records and access grants retained 7 years, auditable | Records-retention policy REC-114 |
| Entitlements beyond the standard bundle require the application owner's authorization | Data-access policy DA-16 |

**Inherited constraints** *(verbatim from Intake)*
| Constraint | Old origin |
|---|---|
| Provisioning waits on the overnight HRIS→case and identity sync batches | Legacy integration cadence |
| All requests pass through the ITSM triage queue regardless of type | Ticketing habit, single-queue design |

**Appended inherited constraints — [Cartographer finding]**
| Constraint | Old origin | Source |
|---|---|---|
| Role-app requests depend on each app owner's personal inbox availability | Catalog staleness; email shadow process (G1) | `[R]/[O]` §6 |
| Case truth is split across three records (case tool, ITSM, spreadsheet) | Tooling gaps bridged manually | `[O]` F2 |

**Possible live constraints surfaced during mapping — for Intake to verify (not promoted here):**
- One app owner reported their application's grants require an export-control check `[R]` — source policy not produced during mapping.

---

## 9. QA gate results

| Check | Pass? | Note |
|---|---|---|
| Descriptive test | ✅ | Zero recommendations; F4 states the 99% approval rate without a verdict on the approval |
| Boundary fixed | ✅ | Matches brief; done-condition ownership gap recorded as finding, boundary unmoved |
| Actual over official | ✅ | G1, G2 registered with both versions |
| Row completeness | ✅ | All 9 steps fully attributed |
| Handoffs enumerated | ✅ | 6 handoffs = 6 lane transitions |
| Variant coverage stated | ✅ | 92% mapped, 8% explicitly unmapped |
| Work/wait rollup done | ✅ | Flow efficiency ~3–4%; waiting attributed |
| Baseline reconciled | ✅ | Two discrepancies flagged, neither overridden |
| Constraint sort intact | ✅ | Verbatim pass-through; 2 tagged additions, inherited only; 1 possible-live routed to Intake |
| Nothing invented | ✅ | Every figure carries tag + source |
| Derive-don't-default | ✅ | Sample flagged non-transferable at top |

---

## 10. Handoff

→ **Zero-Based Redesigner** — this map is the current-state input, to be kept face-down during blank-sheet design and then diffed. Note for the diff: the two baseline discrepancies (§7) and the unowned done-condition finding (§1) are facts the redesign must not inherit silently.

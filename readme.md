# Ledger — Resume & Portfolio Design System

An editorial design system for building single-page resume/portfolio websites: a confident, minimal, whitespace-driven look for career professionals to present their work history, expertise, and impact. Built from scratch for this project (no existing brand/codebase was attached); seeded with placeholder content from Barry Shields' résumé (content & curriculum leadership / AI strategy) as a realistic content example — swap freely for any profession.

**Namespace:** `window.Ledger` (component bundle global).

## Content fundamentals
- **Tone:** confident and concise. Short declarative sentences, first-person ("I've built...", "I use..."), no hedging or filler adjectives.
- **Casing:** sentence case for prose; Title Case for role/org names and section headings; UPPERCASE + wide letter-spacing (mono) for small eyebrow labels and meta (dates, locations).
- **Numbers do the bragging:** impact is stated in hard metrics ($493.9M, -66%, 72%) rather than adjectives — let the StatCallout component carry the confidence, not exclamation points.
- **No emoji.** No em-dash-heavy hype copy. Em dashes are fine for editorial asides (used sparingly), not enthusiasm.
- **Bullets are outcome-first:** lead each highlight with the result or artifact ("Co-developed and launched SalesGPT...") not the activity.

## Visual foundations
- **Palette:** warm paper background (`--paper #F5F2EC`), near-black warm ink for text, one confident deep-sage accent (`--accent #37493B`) for primary actions/links, and a secondary clay accent (`--clay #A8542F`) reserved for eyebrows and one standout highlight per section. Max two accent colors, used sparingly — this is a quiet, editorial palette, not a saturated brand palette.
- **Type:** two families. `Newsreader` (serif) for name, hero, and section titles — gives the editorial/publication feel. `Manrope` (sans) for all body copy and UI chrome. `IBM Plex Mono` as a third, minor accent strictly for meta labels (dates, locations, eyebrows) in uppercase with wide tracking — a small editorial signature, not a general body font.
- **Spacing:** generous, air-first. 4px base scale (4 → 128px). Sections breathe with 56–72px of padding; timeline rows get their own 32px rhythm with a hairline top rule instead of boxed cards.
- **Backgrounds:** flat paper color throughout, no gradients, no photography/texture required (site works with just a headshot slot if the person wants one — not required).
- **Borders & shadows:** hairline 1px borders (`--rule`) do most of the separating work; shadows are reserved for two levels only (`--shadow-sm`, `--shadow-md`) and used sparingly, e.g. a raised card on hover. Cards default to a border, not a shadow.
- **Radius:** small and restrained — 4px default, 8px for card panels, pill only for tag chips. No large rounded corners.
- **Animation:** minimal. A single `--duration-fast` (120ms) ease on hover/press color changes; no entrance animations, bounces, or parallax — the editorial tone should feel calm.
- **Hover/press:** hover darkens the primary button (`--action-primary-hover`) and underlines nav links; press has no scale/shrink effect (kept subtle, per the calm-motion rule).

## Iconography
No icon system is used. The system deliberately avoids icon fonts, SVG icon sets, and emoji — labels are typographic (mono eyebrows, plain text links). If a future iteration needs icons (e.g. social links), substitute a stroke-based CDN set like Lucide at 1.5px stroke to match the hairline-border aesthetic, and document the substitution here.

## Structure
- `styles.css` — root stylesheet, imports everything below.
- `tokens/` — `colors.css`, `typography.css` (includes Google Fonts `@import` for Newsreader/Manrope/IBM Plex Mono — no local font files were provided), `spacing.css`, `effects.css`.
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand groups).
- `components/core/` — Button, Tag, StatCallout, TimelineItem, NavBar, SectionHeading, Card. Each has `.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard`-tagged demo HTML.
- `ui_kits/portfolio/index.html` — the full one-page resume/portfolio site (also tagged as a Starting Point).

## Intentional additions
No source codebase/Figma was attached, so this is a from-scratch component set sized to a resume/portfolio site's actual needs (not a generic full app kit): Button, Tag, Card, StatCallout, TimelineItem, NavBar, SectionHeading. No Toast/Dialog/Tabs/etc. — a static one-page site doesn't need them.

## Fonts
Newsreader, Manrope, and IBM Plex Mono are loaded from Google Fonts CDN via `@import` in `tokens/typography.css` (no local font files were provided to self-host).

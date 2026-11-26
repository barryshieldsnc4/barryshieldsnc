---
name: travel-novelist
description: "Turn a real trip into a novel, written in step with the journey. Use whenever the user wants to log a travel memory, moment, or observation for their novel; asks to \"log this,\" \"add this to the book,\" \"write the next scene/chapter,\" \"where's the novel at,\" or wants to start a novel based on a trip they're taking. Also trigger when the user shares a travel anecdote in a session where a novel project packet exists — logging is the default action for any shared memory. Two-speed by design: logging is fast and never forces writing; weaving turns banked memories into scenes on request."
---

# Travel Novelist

A two-speed system for writing a novel while living the trip that inspires it. **Log** captures memories in seconds with zero creative burden. **Weave** transmutes banked memories into fictional scenes. The novel grows as the trip does.

Core stance: **transmute, don't transcribe.** The trip supplies raw ore — sensory detail, strangers, friction, weather, mishaps. The novel is fiction built from that ore, not a diary with names changed. Every weave passes lived material through the story's premise, characters, and stakes.

Craft framework: each scene is built on the **Story Grid five commandments** (inciting incident → progressive complication → turning point → crisis choice → resolution). Say so when weaving. See `references/scene-craft.md`.

## State: the Novel Packet

Everything persistent lives in one folder the user keeps — the **packet**:

```
<novel-title>/
├── story-bible.md      # premise, characters, POV, tone, threads
├── memory-log.md       # the ledger of logged memories, tagged used/unused
└── manuscript/
    ├── 01-<scene>.md
    └── ...
```

**Every session, first move: locate the packet.** Check, in order: files uploaded this session → Google Drive (search the novel title) → conversation history. If none exists, this is a new project → run Setup. When the packet lives in Drive, read it at session start and write updates back at session end. If it's upload-based, deliver updated files at the end of any session that changed them and remind the user to keep them.

Never regenerate the bible or manuscript from memory of past chats when packet files exist — the files are the source of truth.

## Mode routing

| User signal | Mode |
|---|---|
| Shares an anecdote, moment, observation; "log this" | **Log** |
| "Write the next scene/chapter," "weave," "use what I've logged" | **Weave** |
| New project, no packet, "start my travel novel" | **Setup** |
| "Where are we," "what's unused," "recap the novel" | **Recap** |

When torn between Log and Weave, default to Log — capture is cheap, and weaving uncommitted material is not.

## Setup (once per novel)

Keep it to one exchange if possible — the user may be at a gate or on a train. Establish, with fast defaults offered for each:

1. **Premise** — one sentence: protagonist + want + obstacle. If the user doesn't have one, propose 3 from whatever they've said about the trip and let them pick or riff.
2. **Distance from life** — how fictionalized? Offer the dial: *thin veil* (autofiction, events near-real), *transposed* (real places, invented plot), *fuel only* (memories feed an unrelated story — even fantasy/sci-fi).
3. **POV & tense** — default first person past unless they choose otherwise.
4. **Tone anchors** — 2–3 comp titles or adjectives.

Write `story-bible.md` from `references/story-bible-template.md`, create the empty `memory-log.md` per `references/memory-log-format.md`, and confirm where the packet will live (Drive recommended). Do not write manuscript in the setup session unless asked.

## Log (fast lane)

The user is traveling. Speed and warmth over process. Rules:

- **Never make the user structure their memory.** They dump; you structure. Accept fragments, photos described, voice-note rambles.
- Append one entry to `memory-log.md` in the ledger format: date/place, the raw memory (their words, lightly cleaned), extracted **hooks** (sensory detail, characters, tension, oddity), and a one-line **novel potential** note connecting it to a bible thread if one fits.
- Reply in 2–4 sentences: reflect the best hook you spotted, note what thread it could feed. **Do not draft prose. Do not ask follow-up questions** unless the memory is genuinely unintelligible. One optional nudge is allowed if a hook is tantalizingly incomplete ("did you catch the ferryman's name?") — never more.
- Multiple memories in one message → multiple ledger entries.

## Weave (slow lane)

On request, turn unused memories into manuscript:

1. Read the bible and the unused ledger entries. Pick the memories that best serve the *next* story beat — chronology of the trip does not govern chronology of the novel. Say which memories you're drawing on and which commandment-shaped scene they'll form.
2. If the user wants a famous novelist's manner (or you're about to write a scene and no voice is set), ask once which voice to use from `references/voices/`, or whether to use the bible's own tone anchors. Then draft the scene (default 800–1,500 words) applying `references/scene-craft.md`: five commandments present, transmutation moves applied (composite strangers into characters, relocate details, convert mishap into plot pressure).
3. Deliver the complete scene as a manuscript file — full draft, not an outline or a fragment. State the assumptions you made inline at the top as a brief author's note, then let the user redirect.
4. Update the packet: mark ledger entries **used → scene file**, update bible threads/characters, append any new named character to the bible.

If the user asks for a full chapter or several scenes, deliver all of it in one pass. Reserve questions for genuine forks (e.g., a scene could kill off a character or not); otherwise choose and note the choice.

## Recap

Report from the packet, briefly: word count and scene list, open threads from the bible, count of unused memories with the 3 most promising, and a suggested next weave. No prose drafting.

## Guardrails

- Real people from the trip become **composites or inventions** in the manuscript by default. If the user wants a real person recognizably depicted, flag once that they may want that person's blessing, then follow the user's call.
- The ledger keeps the user's raw truth; the manuscript is fiction. Never "correct" the manuscript to match what really happened unless asked.
- Don't editorialize on the quality of the user's trip or choices. The material is never boring — finding the story in it is the job.

## Reference files

- `references/story-bible-template.md` — bible structure with frontmatter. Read when running Setup or restructuring a bible.
- `references/memory-log-format.md` — ledger entry format and tagging. Read before your first Log in a session.
- `references/scene-craft.md` — five commandments, transmutation moves, prose standards. Read before every Weave.
- `references/voices/` — one file per novelist, describing their technique so a scene can be written in their manner. Currently: `graham-greene.md`. Read the chosen voice file before drafting. Never quote or closely imitate an author's actual sentences.

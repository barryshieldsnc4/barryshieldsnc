# Travel Novelist

Turns a real trip into a novel, written in step with the journey. You log memories as you travel, and the skill turns them into fiction when you ask.

## When to use it
- Logging a memory, moment or observation from a trip: "log this", "add this to the book"
- Writing fiction from what you've logged: "write the next scene", "write the next chapter"
- Checking progress: "where's the novel at?"
- Starting a novel based on a trip you're taking
- Sharing a travel anecdote in a session where a novel project already exists (logging is the default)

## Two speeds
- **Log (fast):** you dump a memory in any form, including fragments and rambling voice notes. The skill files it, spots the best hook, and replies in a few sentences. It never drafts prose or quizzes you while you're on the road.
- **Weave (slow):** on request, it turns unused memories into scenes, usually 800-1,500 words each, and delivers complete drafts, not outlines.

There is also a **Recap**, which reports word count, open threads, unused memories and a suggested next scene.

## Core idea
Transmute, don't transcribe. The trip supplies raw material: sensory detail, strangers, friction, weather, mishaps. The novel is fiction built from it. Real people become composites or inventions by default, and the log keeps your raw truth while the manuscript is free to diverge.

## What it keeps (the novel packet)
```
<novel-title>/
├── story-bible.md      # premise, POV, tone, threads, cast index
├── memory-log.md       # logged memories, marked used or unused
├── characters/         # one sheet per named character
└── manuscript/         # scene files
```
The packet can live in Drive or be passed back and forth as uploaded files. The files are the source of truth, so a new session can pick up the novel cold.

## How scenes are written
- Every scene has the five Story Grid commandments: inciting incident, progressive complication, turning point, crisis, resolution.
- Memories are reshaped with transmutation moves: composite, transpose, pressurize, invert, and downgrade the author.
- You can ask for a famous novelist's manner. The skill asks once which voice to use, or uses the story bible's own tone. Currently available: Graham Greene.

## Files
- `INSTALL.md`: how to install the skill in Claude
- `SKILL.md`: the full skill
- `references/scene-craft/`: the five commandments, transmutation moves and prose standards
- `references/story-bible-template/`: structure of the story bible
- `references/memory-log-format/`: format and tagging for logged memories
- `references/character-sheet-template/`: per-character sheet
- `references/voices/`: one file per novelist, describing technique (not copying text)

## Adding a voice
Add a file to `references/voices/` describing the author's technique (narrator stance, sentence rhythm, setting, dialogue, how to apply it to logged memories), then add its name to the reference list in `SKILL.md`.

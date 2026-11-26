# Installing Travel Novelist in Claude

The skill is the contents of this folder. Claude needs it as a folder named `travel-novelist` (matching the `name` in `SKILL.md`) with `SKILL.md` directly inside it. Keep that name. The folder here is called `travel novelist` with a space, so rename it when you package it.

## Option 1: Claude.ai or the Claude app (upload a zip)

1. **Get the files.** Download the repo (Code > Download ZIP on GitHub) and unzip it, or clone it.
2. **Rename the folder.** Copy `skills/travel novelist` somewhere else and rename the copy to `travel-novelist`.
3. **Zip it.** Zip the `travel-novelist` folder itself, so the zip contains one top-level folder with `SKILL.md` and `references/` inside it:

   ```bash
   zip -r travel-novelist.zip travel-novelist
   ```

   The zip must not have `SKILL.md` loose at the top level, and it must not be wrapped in an extra folder.
4. **Upload it.** In Claude, open Settings, go to the Skills section (under Capabilities), and choose to upload a skill. Select `travel-novelist.zip`.
5. **Turn it on.** Make sure the skill's toggle is enabled.

Menu names change from time to time. If you can't find them, search the Settings page for "Skills".

## Option 2: Claude Code (copy the folder)

Put the folder in your skills directory under the hyphenated name.

For all your projects:

```bash
mkdir -p ~/.claude/skills
cp -r "skills/travel novelist" ~/.claude/skills/travel-novelist
```

For one project only, copy it to `.claude/skills/travel-novelist` inside that project instead.

Start a new Claude Code session so it picks the skill up.

## Check that it works

Start a new conversation and try:

> I want to start a novel based on a trip I'm taking.

Claude should recognize the skill and start setup. After that, send a memory ("Log this: ...") to try logging.

## Updating

When you change the skill in this repo, repeat the steps above. In Claude.ai, upload the new zip over the old version, or delete the old one first if it won't replace it. In Claude Code, copy the folder over the old one.

## Where the novel is saved

The skill keeps your novel in a folder called the packet (story bible, memory log, character sheets, manuscript). It can live in Google Drive or be handed back and forth as uploaded files. Keep the packet safe. It is your book, and it is separate from the skill.

## Troubleshooting

- **Upload is rejected:** check that the zip has one top-level `travel-novelist` folder with `SKILL.md` directly inside, and that the folder name has no space.
- **The skill doesn't trigger:** confirm it's switched on in Settings, then start a new conversation. Mentioning the novel or logging a trip memory should trigger it.
- **Changes don't show up:** you're probably still on the old uploaded version. Re-upload the zip.

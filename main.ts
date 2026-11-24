// The Funniest Sick-Day Excuse
// Entry for make.fun competition
// u-zeroxfive-the-funniest-sick-day-excuse-37423a36
//
// The entry is a single line (153 characters, within the 1-200 gate):
// a shaving accident that leaves one eyebrow missing, so the face
// looks permanently surprised — and the face, not the worker,
// is the one lying to people. The punch lands on the last words.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

export const ENTRY_TEXT =
  "Can't come in today — I shaved off one eyebrow by accident and now I look permanently surprised, so I'm staying home until my face stops lying to people.";

const outDir = process.env.ENTRY_OUTPUT
  ? dirname(process.env.ENTRY_OUTPUT)
  : "/output";
const outFile = process.env.ENTRY_OUTPUT ?? join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY_TEXT + "\n", "utf8");
console.log(`Wrote ${ENTRY_TEXT.length} characters to ${outFile}`);

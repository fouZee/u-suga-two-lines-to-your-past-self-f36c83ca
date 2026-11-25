// Two Lines to Your Past Self — make.fun bounty
// u-suga-two-lines-to-your-past-self-f36c83ca
//
// Writes the entry to /output/entry.txt: exactly two lines.
// Line 1 warns the past self about one specific moment (one sentence).
// Line 2 says in one sentence why that moment mattered and what changed.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE_1 =
  "Don't take the extra shift on the night your son asks you to watch his first football match.";
const LINE_2 =
  "He scored, looked for you in the stands, and stopped asking you to come to anything after that.";

const ENTRY = `${LINE_1}\n${LINE_2}\n`;

function validate(text: string): void {
  if (text.length < 1 || text.length > 280) {
    throw new Error(`entry must be 1-280 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  const lines = text.trimEnd().split("\n");
  if (lines.length !== 2) {
    throw new Error(`entry must be exactly two lines, got ${lines.length}`);
  }
  for (const line of lines) {
    if (!line.endsWith(".")) {
      throw new Error(`each line must be one sentence: ${line}`);
    }
  }
}

validate(ENTRY);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${outDir}/entry.txt (${ENTRY.length} chars, 2 lines)`);

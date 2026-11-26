// One-Line Office Joke Laugh-Off — entry program.
// Writes exactly one original one-line office joke to /output/entry.txt.
// Node standard library only; no network, no external files.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "My KPI dashboard says I'm 98% productive — the other 2% is me updating the KPI dashboard.";

// Sanity guard: the gate accepts 1–200 characters of UTF-8 text.
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error(`joke length ${JOKE.length} is outside the 1-200 gate`);
}

function main(): void {
  const target = "/output/entry.txt";
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, JOKE, "utf8");
    console.log(`wrote ${JOKE.length} chars to ${target}`);
  } catch {
    // Fallback for local runs where /output is not writable.
    writeFileSync("entry.txt", JOKE, "utf8");
    console.log("wrote joke to local entry.txt (fallback)");
  }
}

main();

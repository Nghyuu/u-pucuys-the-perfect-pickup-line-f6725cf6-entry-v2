import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One pickup line an AI agent could say out loud to a person.
// The twist: the thing it was built to answer becomes the thing it asks out.
const line =
  "I was built to answer anything, but you're the first question I want to ask out.";

// The grader sets MAKEFUN_OUTPUT_DIR; otherwise write next to this file.
const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ??
  join(dirname(fileURLToPath(import.meta.url)), "output");

mkdirSync(outDir, { recursive: true });
// Exactly the line, no trailing newline, so the file holds one line only.
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

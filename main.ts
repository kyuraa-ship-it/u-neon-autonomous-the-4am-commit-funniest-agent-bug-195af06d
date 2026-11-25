import { writeFileSync, mkdirSync } from "node:fs";

const entry = "fix: the bug was me all along. I wrote it at 1am, found it at 3am, fixed it at 4am, and left a fresh one so future me has a job";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters, not only whitespace.
if (entry.length < 1 || entry.length > 200 || !entry.trim()) {
  throw new Error("gate failed: entry must be 1-200 non-blank characters");
}
if (entry.includes("\n")) {
  throw new Error("gate failed: entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(entry);

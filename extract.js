const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("C:\\Users\\AddizTech\\.gemini\\antigravity-ide\\brain\\9ee2b5fa-915c-4b4a-b78c-aedaa00095d6\\.system_generated\\logs\\transcript_full.jsonl")
});

let parts = {};

rl.on("line", (line) => {
  [822, 824, 846, 848].forEach(idx => {
    if (line.includes(`"step_index":${idx}`)) {
      const obj = JSON.parse(line);
      parts[idx] = obj.content;
    }
  });
});

rl.on("close", () => {
  let full = "";
  [822, 824, 846, 848].forEach(idx => {
    if (parts[idx]) {
      const lines = parts[idx].split(/\r?\n/);
      for (const l of lines) {
        const m = l.match(/^\d+:\s?(.*)$/);
        if (m) {
          full += m[1] + "\n";
        }
      }
    }
  });
  fs.writeFileSync("original_portfolio.css", full);
  console.log("Written original_portfolio.css with length", full.length);
});

const fs = require("fs");
const path = require("path");

const logPath = path.resolve(__dirname, "../storage/logs/app.log");
const keyword = process.argv[2] || "";
const content = fs.existsSync(logPath)
  ? fs.readFileSync(logPath, "utf8")
  : "[STARTUP] Application initialized\n[INFO] Server listening on port 3000\n";
const lines = content.split(/\r?\n/).filter(Boolean);
const matched = lines.filter((line) => line.includes(keyword));
process.stdout.write(matched.join("\n"));

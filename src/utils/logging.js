import { EventEmitter } from "events";
import fs from "fs";
import path from "path";
import moment from "moment";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const customLogs = path.join(__dirname, "../../public/logs/accessLogs/");
if (!fs.existsSync(customLogs)) {
  try {
    fs.mkdirSync(customLogs, { recursive: true });
  } catch (error) {
    console.warn('Could not create logs directory:', error.message);
  }
}

const eventEmitter = new EventEmitter();

eventEmitter.on("logging", (msg) => {
  if (process.env.DEBUG === "true") {
    console.log(`\x1b[33m\x1b[2m[DEBUG]\x1b[0m \x1b[2m${msg}\x1b[0m`);
  }

  const data = `
        CUSTOM LOGGING AT ${moment()
          .utcOffset("+05:30")
          .format("YYYY-MM-DD HH:mm:ss")} - ${
    typeof msg !== "string" ? JSON.stringify(msg) : msg
  }  ↵  
    `;

  if (fs.existsSync(customLogs)) {
    fs.appendFile(
      path.resolve(customLogs, `log_${moment().format("YYYY-MM-DD")}.log`),
      data,
      (err) => {
        if (err) {
          console.log(err);
          console.error(err.message);
        }
      }
    );
  }
});

export default eventEmitter;

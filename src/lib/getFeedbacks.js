import fs from "fs";
import path from "path";

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

function toAltText(fileName) {
  const parsed = path.parse(fileName).name;
  const readable = parsed.replace(/[-_]+/g, " ").trim();

  if (!readable) {
    return "Feedback";
  }

  return readable.charAt(0).toUpperCase() + readable.slice(1);
}

export function getFeedbacks() {
  const feedbackDir = path.join(process.cwd(), "public", "feedbacks");

  if (!fs.existsSync(feedbackDir)) {
    fs.mkdirSync(feedbackDir, { recursive: true });
    return [];
  }

  return fs
    .readdirSync(feedbackDir, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((fileName) => !fileName.startsWith("."))
    .filter((fileName) => ALLOWED_EXTENSIONS.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, "pt-BR"))
    .map((fileName) => ({
      src: `/feedbacks/${fileName}`,
      alt: toAltText(fileName)
    }));
}

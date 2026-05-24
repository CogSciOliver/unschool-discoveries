const fs = require("fs");
const path = require("path");

const rssPath = path.join(process.cwd(), "src", "rss.xml");

function decodeXml(value = "") {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&#(\d+);/g, (_, num) =>
      String.fromCharCode(parseInt(num, 10))
    )
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value = "") {
  return decodeXml(decodeXml(value))
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/p>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getTag(block, tagName) {
  const match = block.match(
    new RegExp(`<${tagName}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tagName}>`, "i")
  );

  return match ? match[1].trim() : "";
}

function getAttr(block, tagName, attrName) {
  const tagMatch = block.match(new RegExp(`<${tagName}\\b([^>]*)>`, "i"));

  if (!tagMatch) {
    return "";
  }

  const attrMatch = tagMatch[1].match(new RegExp(`${attrName}="([^"]*)"`, "i"));

  return attrMatch ? decodeXml(attrMatch[1].trim()) : "";
}

function formatDate(value) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

module.exports = function () {
  if (!fs.existsSync(rssPath)) {
    return [];
  }

  const xml = fs.readFileSync(rssPath, "utf8");

  return [...xml.matchAll(/<item\b[^>]*>([\s\S]*?)<\/item>/gi)]
    .map((match) => {
      const item = match[1];

      const title = stripHtml(getTag(item, "title"));
      const description = stripHtml(getTag(item, "description"));
      const link = stripHtml(getTag(item, "link"));
      const pubDate = stripHtml(getTag(item, "pubDate"));
      const duration = stripHtml(getTag(item, "itunes:duration"));
      const season = stripHtml(getTag(item, "itunes:season"));
      const episode = stripHtml(getTag(item, "itunes:episode"));

      const audioUrl = getAttr(item, "enclosure", "url");
      const audioType = getAttr(item, "enclosure", "type");
      const image = getAttr(item, "itunes:image", "href");

      let label = "Podcast Episode";

      if (season && episode) {
        label = `Season ${season} · Episode ${episode}`;
      } else if (episode) {
        label = `Episode ${episode}`;
      } else if (season) {
        label = `Season ${season}`;
      }

      return {
        title,
        description,
        link,
        pubDate,
        dateLabel: formatDate(pubDate),
        duration,
        season,
        episode,
        label,
        audioUrl,
        audioType,
        image,
      };
    })
    .filter((episode) => episode.title && episode.pubDate && episode.audioUrl)
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
};
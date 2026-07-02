import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const mustContain = [
  '<title>Bear Group DCM | Design &amp; Construction Management</title>',
  '<meta name="description" content="Bear Group DCM provides owner representation, design management, and construction management for retail and mixed-use projects across the Washington, DC metro area.">',
  '<link rel="canonical" href="https://beargroupdcm.com/">',
  '<meta property="og:type" content="website">',
  '<meta property="og:title" content="Bear Group DCM | Design &amp; Construction Management">',
  '<meta property="og:url" content="https://beargroupdcm.com/">',
  '<meta property="og:image" content="https://beargroupdcm.com/assets/hero-rotating-1.jpg">',
  '<meta name="twitter:card" content="summary_large_image">',
  '<link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">',
  '<link rel="manifest" href="/site.webmanifest">',
  '<script type="application/ld+json">',
];

for (const expected of mustContain) {
  assert.ok(html.includes(expected), `Missing expected SEO markup: ${expected}`);
}

assert.match(html, /"@type": "ProfessionalService"/, "JSON-LD should identify the business type");
assert.match(html, /"name": "Bear Group DCM"/, "JSON-LD should include the business name");
assert.match(html, /"email": "pbautista@beargroupdcm\.com"/, "JSON-LD should include the public email");
assert.match(html, /"sameAs": \[\]/, "JSON-LD should not list social channels until they exist");

for (const file of [
  "../assets/favicon.svg",
  "../site.webmanifest",
  "../robots.txt",
  "../sitemap.xml",
]) {
  assert.ok(existsSync(new URL(file, import.meta.url)), `Missing ${file}`);
}

const robots = readFileSync(new URL("../robots.txt", import.meta.url), "utf8");
assert.match(robots, /Sitemap: https:\/\/beargroupdcm\.com\/sitemap\.xml/);

const sitemap = readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
assert.match(sitemap, /<loc>https:\/\/beargroupdcm\.com\/<\/loc>/);

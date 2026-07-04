import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const heroImageOrder = [...html.matchAll(/<img class="hero-slide(?: is-active)?" src="([^"]+)"/g)].map(
  (match) => match[1],
);

assert.deepEqual(
  heroImageOrder,
  [
    "assets/hero-rotating-3.jpg",
    "assets/hero-rotating-2.jpg",
    "assets/hero-rotating-4.jpg",
    "assets/hero-rotating-1.jpg",
    "assets/hero-rotating-5.jpg",
  ],
  "Hero images should progress from sketch concept to realistic nighttime",
);

assert.ok(
  html.includes("const heroRotationDelay=5000;"),
  "Hero images should rotate on a 5-second loop",
);

assert.ok(
  html.includes("setInterval(showNextHeroSlide,heroRotationDelay);"),
  "Hero carousel should advance automatically on the configured interval",
);

assert.ok(
  !html.includes("localStorage") && !html.includes("Math.random"),
  "Hero image selection should not depend on per-visit storage or randomness",
);

assert.ok(
  html.includes("object-position:center center"),
  "Hero images should share the same crop position so the building stays anchored",
);

assert.ok(
  html.includes("transition:opacity 1.2s ease-in-out"),
  "Hero image transitions should be a smooth fade",
);

assert.ok(
  html.includes("transform:translate3d(var(--hero-x,0),var(--hero-y,0),0) scale(var(--hero-scale,1.04))"),
  "Hero images should use a slight shared zoom with per-slide offsets for alignment",
);

for (const slideNumber of [1, 2, 3, 4, 5]) {
  assert.ok(
    html.includes(`.hero-slide:nth-child(${slideNumber})`),
    `Hero slide ${slideNumber} should have an explicit alignment rule`,
  );
}

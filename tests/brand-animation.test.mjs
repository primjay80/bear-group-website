import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

const expectedMarkup = [
  '<div class="bb-logo-wrap" aria-label="Bear Group DCM animated logo">',
  '<span class="bb-scan-wake" aria-hidden="true"></span>',
  '<span class="bb-scan-line" aria-hidden="true"></span>',
  '<img class="bb-logo" src="assets/logo-bgdcm.png" alt="Bear Group DCM">',
];

for (const expected of expectedMarkup) {
  assert.ok(html.includes(expected), `Missing brand animation markup: ${expected}`);
}

const expectedStyles = [
  ".brandband.is-visible .bb-logo",
  "@keyframes bbLogoReveal",
  "@keyframes bbPrecisionLines",
  "@keyframes bbScanLine",
  "@keyframes bbScanWake",
  "@media(prefers-reduced-motion:reduce)",
];

for (const expected of expectedStyles) {
  assert.ok(html.includes(expected), `Missing brand animation style: ${expected}`);
}

const expectedScript = [
  "const brandBand=document.querySelector('.brandband');",
  "brandObserver.observe(brandBand);",
  "brandBand.classList.toggle('is-visible',entry.isIntersecting);",
];

for (const expected of expectedScript) {
  assert.ok(html.includes(expected), `Missing brand animation trigger script: ${expected}`);
}

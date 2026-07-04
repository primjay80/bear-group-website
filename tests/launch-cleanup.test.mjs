import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");

assert.ok(!html.includes("__bundler_"), "index.html should not include bundler scaffolding");
assert.ok(!html.includes('href="#"'), "index.html should not include placeholder links");
assert.ok(html.includes("&amp;family="), "Google Fonts URL should escape query-string ampersands");
assert.ok(!existsSync(new URL("../Bear Group DCM - single file.html", import.meta.url)), "generated single-file bundle should not be tracked");

const retiredSelectors = [
  ".svc-table",
  ".svc-row",
  ".proj-grid",
  ".sheet{",
  ".sheet-top",
  ".sheet-specs",
  ".build-grid",
  ".foot-logo",
];

for (const selector of retiredSelectors) {
  assert.ok(!html.includes(selector), `Retired CSS selector should be removed: ${selector}`);
}

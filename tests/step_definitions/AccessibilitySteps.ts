// import {
//   verifyAccessibility,
//   outputAccessibilityReport,
// } from "feather-test-utils/e2e/accessibility.js";
// import { Then } from "@cucumber/cucumber";
// import { expect } from "chai";
// import { axe } from "axe-core";
//
// Then("page complies with accessibility guidelines", async () => {
//   // https://www.deque.com/axe/axe-for-web/documentation/api-documentation/
//   if (
//     "browserName" in browser.capabilities &&
//     browser.capabilities.browserName !== "safari"
//   ) {
//     //exclude specific components
//     const axeOptions: axe.RunOptions = {
//       exclude: [],
//     };
//     const results = await verifyAccessibility(axeOptions);
//
//     await outputAccessibilityReport(results);
//
//     expect(results.violations.length).to.equal(
//       0,
//       `Violations exist - See violation report - ${JSON.stringify(
//         results.violations,
//         null,
//         2
//       )}`
//     );
//   }
// });

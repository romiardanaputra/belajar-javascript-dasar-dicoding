import { test } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("should add correctly", () => {
  // arrange
  const paramA = 1;
  const paramB = 2;

  // Action
  const actualValue = sum(paramA, paramB);

  // Assert
  const expectedValue = 3;
  assert.equal(actualValue, expectedValue);
});

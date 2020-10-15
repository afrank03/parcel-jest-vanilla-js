import { it, describe } from "@jest/globals";
import { sum } from "./../scripts/sum";

describe("Describe Sum", () => {
  it("should count number correctly", () => {
    expect(sum(1, 3)).toBe(4);
  });
});

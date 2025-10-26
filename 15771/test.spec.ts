import { describe, expect, test } from '@jest/globals';

 describe("Describe example", () => {
    test("Test example", async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      expect(true);
    });
  });
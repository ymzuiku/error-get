import { describe, expect, it } from "vitest";
import errorGet from ".";

describe("simple error", () => {
  it("simple promies fn", async () => {
    const errorInPromise = async () => {
      throw Error("error in promise");
    };
    const err = await errorGet(errorInPromise);

    expect(err.message).toMatch(/error in promise/);
  });

  it("simple promies obj", async () => {
    const errorInPromise = async () => {
      throw Error("error in promise");
    };
    const err = await errorGet(errorInPromise());

    expect(err).toMatch(/error in promise/);
  });
});

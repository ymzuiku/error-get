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

  it("simple promies not", async () => {
    const errorInPromise = async () => {
      throw Error("error in promise");
    };
    const err = await errorGet(errorInPromise());

    expect(err).toMatch(/error in promise/);
  });

  it("simple promies not error", async () => {
    const errorInPromise = async () => {
      return { dog: "aaa", age: 5 };
    };
    const err = await errorGet(errorInPromise());

    expect(err).deep.eq({ dog: "aaa", age: 5 });
  });

  it("simple no promies", async () => {
    const errorInPromise = () => {
      return { dog: "aaa", age: 5 };
    };
    const err = await errorGet(errorInPromise());

    expect(err).deep.eq({ dog: "aaa", age: 5 });
  });
});

import errorGet from "../lib";

describe("simple error", () => {
  test("simple promies fn", async () => {
    const errorInPromise = async () => {
      throw "error in promise";
    };
    const err = await errorGet(errorInPromise);

    expect(err).toMatch(/error in promise/);
  });

  test("simple promies obj", async () => {
    const errorInPromise = async () => {
      throw "error in promise";
    };
    const err = await errorGet(errorInPromise());

    expect(err).toMatch(/error in promise/);
  });
});

import { QueryStringHelper } from "./query-string-helper";

describe("query string helper", () => {
  test("should return empty on empty object given", () => {
    const sut = new QueryStringHelper();
    expect(sut.fromObject({})).toEqual("");
  });
  test("should return the expected query", () => {
    const sut = new QueryStringHelper();
    expect(
      sut.fromObject({
        foo: "hi there",
        bar: "100%",
      })
    ).toEqual("?foo=hi%20there&bar=100%25");
  });
});

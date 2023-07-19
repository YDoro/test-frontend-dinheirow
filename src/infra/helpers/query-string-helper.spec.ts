import { QueryStringHelper } from "./query-string-helper";

describe("query string helper", () => {
  test("should return empty on empty object given", () => {
    const sut = new QueryStringHelper();
    expect(sut.fromObject({})).toEqual("");
  });
});

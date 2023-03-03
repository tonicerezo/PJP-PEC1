import { ex1, ex2 } from "./pec1";

describe("ex1", () => {
  test("should return true when temp is bigger or equal than 37.0", () => {
    expect(ex1(9.0)).toBe(false);
    expect(ex1(35.0)).toBe(false);
    expect(ex1(37.0)).toBe(true);
    expect(ex1(40.0)).toBe(true);
  });
});

describe("ex2", () => {
  test("should return the right output", () => {
    expect(ex2(10, 0.21)).toEqual(12.1);
    expect(ex2(0, 0.21)).toEqual(0.0);
    expect(ex2(2, 0.0)).toEqual(2.0);
  });
});

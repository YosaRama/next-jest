import PlusCalculate from "../../helper/calculate";

test("should calculate", () => {
  const x = 4;
  const y = 6;

  const result = PlusCalculate(x, y);

  expect(result).toEqual(10);
});

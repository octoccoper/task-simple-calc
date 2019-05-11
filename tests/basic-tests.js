describe("Функция calc", () => {
  it("правильно вычитает числа", () => {
    expect(calc(3, 1, "-", 2)).toEqual(true);
  });
});

describe('ToBe vs ToEqual', () => {
  // always use toEqual to check objects and arrays
  xit('Should test "ToBe" matcher', () => {
    let a = {
      val: 10,
    };
    let b = {
      val: 10,
    };
    expect(a).toBe(b);
  });
  it('Should test "ToBe" matcher', () => {
    let a = {
      val: 10,
    };
    let b = {
      val: 10,
    };
    expect(a).toEqual(b);
  });
});

describe('String Matcher Test', () => {
  // using ToBe to compare strings and value only
  it('Testing string, "ToBe" for matcher===', () => {
    const str = 'Hello World';
    expect(str).toBe('Hello World');
  });

  // using ToEqual to compare strings, value and Objects
  it('Testing string,  "toEqual" for matcher==', () => {
    const str = 'Hello World!';
    expect(str).toEqual('Hello World!');
  });

  //using ToContain to check if a string is present in another string.
  it('Testing String, "toContain" check a string is present', () => {
    const str = 'Hello Nesreen';
    expect(str).toContain('Nesreen');
  });

  //using ToMatch to check if a string or number is present in another string.
  it('Testing String, "toMatch" check a string is present', () => {
    const str = 'This is the 14th of May';
    // expression to check if a number is present
    expect(str).toMatch(/\d+/);
    expect(str).toMatch('May');
  });

  //using ToEqual to check if a array is present.
  it('Testing Array, using "toEqual"', () => {
    const arr = [1, 2, 3];
    expect(arr).toEqual([1, 2, 3]);
  });

  //using ToContain to check if a part of an array is present.
  it('Testing Array, using "toContain"', () => {
    const arr = ['abc', 'def', 'xyz'];
    expect(arr).toContain('abc');
  });

  // testing not.Equal
  it('Testing Array, using "not.toEqual"', () => {
    const arr = ['abc', 'def', 'xyz'];
    expect(arr).not.toEqual('ac');
  });
});

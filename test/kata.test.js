const { Kata } = require('../src/kata');

describe('First story', () => {
  test('GIVEN [1] WHEN runs logic THEN returns [1,1]', () => {
    const kata = new Kata();
    expect(kata.minMax([1])).toStrictEqual([1, 1]);
  });

  test('GIVEN [1,2,3,4,5]  WHEN runs logic THEN returns [1,5]', () => {
    const kata = new Kata();
    expect(kata.minMax([1, 2, 3, 4, 5])).toStrictEqual([1, 5]);
  });
});





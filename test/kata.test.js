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

  test('GIVEN [2334454,5]  WHEN runs logic THEN returns [5,2334454]', () => {
    const kata = new Kata();
    expect(kata.minMax([2334454, 5])).toStrictEqual([5, 2334454]);
  });

  test('GIVEN [200,4,6,8,10,2]  WHEN runs logic THEN returns [2,200]', () => {
    const kata = new Kata();
    expect(kata.minMax([200, 4, 6, 8, 10, 2])).toStrictEqual([2, 200]);
  });
});





import { sum } from '../src/sum'

describe('sum() function test', () => {

  test('sum of two integer numbers 1, 2 is 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('sum of two integer numbers 1, 2, 3 is 6', () => {
    expect(sum(1, 2, 3)).toBe(6)
  })

  test('sum of two floating point numbers 1.1, 2.2, is 3.3', () => {
    expect(sum(1.1, 2.2)).toBeCloseTo(3.3)
  })

})

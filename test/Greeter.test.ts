import { Greeter } from '../src/Greeter'

describe('Greeter class', () => {

  test('should return expected result', () => {
    const greeter = new Greeter('Hi')
    const greeting = greeter.greet('Alice')

    expect(greeting).toBe('Hi, Alice!')
  })

  test('should work without argument', () => {
    const greeter = new Greeter()
    const greeting = greeter.greet()

    expect(greeting).toBe('Hello, World!')
  })

})
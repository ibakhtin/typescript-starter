export class Greeter {
  
  constructor(public greeting: string) {}

  greet(name = "World"): string {
    return `${this.greeting}, ${name}!`
  }
}
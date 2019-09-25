export class Greeter {
  
  constructor(private greeting = "Hello") {}

  greet(name = "World"): string {
    return `${this.greeting}, ${name}!`
  }
}
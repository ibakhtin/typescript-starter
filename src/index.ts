import { Greeter } from './Greeter'

const greeting: string = 'Hello'
const name: string = 'Ivar'
const helloGreeter = new Greeter(greeting)

console.log(helloGreeter.greet(name))

import { Animal } from './cls';
export class Tiger extends Animal {

    run() : void {
        // super.run()
        console.log(`From Tiger Class ${this.legs++}`)
    }
}
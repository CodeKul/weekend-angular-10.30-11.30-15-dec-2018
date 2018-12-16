
// before es6
function Car() { }

Car.prototype.increaseSpeed = function() {
    Car.prototype.speed++
} 

Car.prototype.speed = 100

let cr = new Car()
cr.increaseSpeed()
console.log(`Car Speed is ${Car.prototype.speed}`)

//es6
export default class Mouse {
    
    constructor() {
        this.x = 10
        this.y = 20
    }

    move() {
        this.x++
        this.y++
    }
    plot() {
        console.log(`
        x is ${this.x}, y is ${this.y}
        `)
    }
}

let ms = new Mouse()
ms.move()
ms.plot()
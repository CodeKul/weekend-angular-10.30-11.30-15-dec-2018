let car = {
    brand : 'Audi',
    color : 'Red',
    price : 7,
    calcIns : () => console.log('Calc Ins')
}

console.log(`
    Brand is ${car.brand},
    Color is ${car.color},
    Price is ${car.price}
`)

car.calcIns()
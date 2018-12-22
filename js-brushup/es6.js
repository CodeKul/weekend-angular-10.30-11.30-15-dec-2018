var ver = 10
ver = 'android'
let nm = 'HoneyComb'
if(true) {
    var ver = 20
    let nm = 'Mango'
}
console.log('Version is '+ver)
console.log('OS is '+nm)
console.log(`OS is ${nm}`)

console.log(` 
    We have Android in codekul 
    and version
    is ${ver} and OS is ${nm}
`)


let fn = function() {
    console.log(`This Traditional Function`)
}

let fn2 = () => console.log(`This is lambda or fat arrow`)
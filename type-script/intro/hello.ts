let bike: string = 'android'
let num: number = 10
let con: boolean = true
let arr: number[] = [10, 52]
let obj: { [key: number]: any } = {
    1: 'android'
}
let mxd: string | number = 'string'
mxd = 10
let fn: () => void = function () {

}
fn = () => {

}

class Stu {
    ne: any
}

let st: Stu | number = new Stu()
// st = 10

function sampleFn(num1: number, num2: number): void | number | Stu{

}

sampleFn(56, 89)

function sampleFnPrm(cbFn: (str: string) => void) {
    cbFn('sample')
}

sampleFnPrm(function (str: string) {

})
 
sampleFnPrm((str : string) => {

})

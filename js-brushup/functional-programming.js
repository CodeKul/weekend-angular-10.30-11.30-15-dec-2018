let fn1 = function () {
 // functions can be assigned to variables
}
fn1() // invocation

let fn1Lmd = () => {}
fn1Lmd()

function fnPrm( cbFn ) {
    // functions can be passed as parameter
    cbFn()
}

fnPrm(function() {

})

fnPrm( 
    () => {}
)

function fnRt() {
    return function() {
        // functions can be returned
    }
}

function fnRtLmd() {
    return () => {}
}

let fnInr = fnRt()
fnInr()

fnRt()()
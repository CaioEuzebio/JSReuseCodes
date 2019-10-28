// To generate standard value strategia 1
function soma1(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1())
console.log(soma1(2))

//  Strategia undefine, in aeguments, isNaN
function soma2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0))

// valor padrão es62015
function soma3(a =1, b = 1, c = 1) {
    return a + b + c
}
console.log(soma3())
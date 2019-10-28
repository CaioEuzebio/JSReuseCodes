function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }
    return soma
}
console.log(soma(1,2,3,4,5,6,7,8,9,10))
// Or
console.log(soma(1,2,3,4,5,6,7,8,9,10, " Test string"))
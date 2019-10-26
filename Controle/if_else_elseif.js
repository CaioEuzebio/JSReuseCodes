Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim
}

const imprimirresultado = function (nota) {
    if (nota.entre(9, 10)) {
        console.log('Quadro de Honra!') 
    } else if (nota.entre(7,8.99)) {
        console.log('Aprovado!')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação!')  
    } else if(nota.entre(0, 3.99)) {
        console.log('reprovado')
    } else {
        console.log('Nota Inválida')
    }
    console.log('Fim')
}

imprimirresultado(10)
imprimirresultado(8.99)
imprimirresultado(4)
imprimirresultado(3)
imprimirresultado(11)
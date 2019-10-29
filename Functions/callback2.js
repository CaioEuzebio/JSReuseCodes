// No Callback
const notas = [0.1, 7, 8, 9, 3, 4, 5, 6]

const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

//with callback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Using Arrow

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
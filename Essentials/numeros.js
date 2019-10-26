const peso1 = 1.1
const peso2 = Number('2.0')

//console.log(peso1, peso2)
//console.log(Number.isInteger(peso1))
//console.log(Number.isInteger(peso2))

const avali1 = 9.7
const avali2 = 6.7

const total = avali1 * peso1 + avali2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))
console.log(media.toString(2))
console.log(typeof media)
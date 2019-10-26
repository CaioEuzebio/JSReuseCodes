const nome = 'Caio'

const concatenacao = 'Ola ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

//expressoes...
console.log(` 1 + 1 = ${1 + 1}`)

const up = texto => texto.toUperCase()
console.log(`Ei... ${up.('Cuidado')}!`)
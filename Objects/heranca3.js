const pai = { nome: 'Pedro', corcabelo: 'Preto' }

const filha1 = Object.create(pai)

filha1.nome = 'Ana'

console.log(filha1.corcabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerate: true }

})


console.log(filha2.nome)
filha2.nome = 'Carla' //testin gwitable false
console.log(`${filha2.nome} tem cor do cabelo ${filha2.corcabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

//testing own attr or hier

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por heranca: ${key}`)
}
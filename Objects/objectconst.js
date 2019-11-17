//pessoa 
const pessoa = {nome: 'João'}
console.log(pessoa)
pessoa.nome = 'Pedro'
console.log(pessoa)

//not possible
//pessoa = { nome: 'Ana' }


//Freeze objects
Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)
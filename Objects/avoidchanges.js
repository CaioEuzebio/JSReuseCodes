// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Celular', preco: 199, tag: 'Promotion'
})

console.log('Extensível:', Object.isExtensible(produto))
produto.nome = 'Borracha'
produto.descricao = 'Escolar'
delete produto.tag

console.log(produto)

// Object.seal

const pessoa = { nome:'Ana', idade: 35}
Object.seal(pessoa)

console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)


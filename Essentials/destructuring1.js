// Recurso intruduzido no ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        lugradouro: 'Rua Sem nome',
        numero: 45
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

// ou nomeando variaveis

const { nome: n, idade: i} = pessoa
console.log(n, i)

// obtendo estruturas de objetos aninhados
const { endereco: { lugradouro, numero, cep} } = pessoa
console.log(lugradouro, numero, cep)
const produto = new Object
produto.nome = 'Cadeira'
produto.marca = 'Generica'
produto.preco = 200
produto.fabricacao = 'Sao Paulo'

//Deletar atributos
  //delete produto.preco
console.log(produto)

const carro = {
    nome: 'Gol',
    valor: 5000,
    marca: 'VW',
    proprietario: {
        nome: 'Marcos',
        idade: 25,
        cidade: 'SP'
    },
    condutores: [{
        nome: 'Ana',
        idade: 23
    }, {
        nome: 'Maria',
        idade: 34
    }],
    calculaValorSeguro: function() {
        valor * (1- .2 *valor)
    }
}
console.log(carro)
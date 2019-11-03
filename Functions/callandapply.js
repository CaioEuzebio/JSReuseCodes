function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1- this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.14,
    getPreco
}

// 1
global.preco = 20
global.desc = .1
console.log(getPreco())
// 2
console.log(produto.getPreco())
//3
const  carro = {preco: 49990, desc: .2}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
//4
console.log(getPreco.call(carro,0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))
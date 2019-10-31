function criarProduto(nomeprod, preco) {
    return {
        nomeprod,
        preco,
        desconto: .1
    }
}
console.log(criarProduto('celular', 55))
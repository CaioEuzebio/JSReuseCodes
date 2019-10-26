function gerarInterintroaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0
 do {

    opcao = gerarInterintroaleatorio(-1, 10)
    console.log('A Opção Escolhida Foi: ', opcao)
}   while (opcao != -1)
console.log('Até a Proxima!')
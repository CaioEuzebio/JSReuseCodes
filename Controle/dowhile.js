function gerarInterintroaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)

}

let opcao = 0

while (opcao != -1) {
    opcao = gerarInterintroaleatorio(-1, 10)
        console.log('A Opção Escolhida Foi: ', opcao)
}
console.log('Até a Proxima!')
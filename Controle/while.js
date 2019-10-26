function getInteiroaleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
    opcao = getInteiroaleatorio(-1, 10)
    console.log('Opção Escolhida foi: ', opcao)
}
console.log('Até a Proxima')
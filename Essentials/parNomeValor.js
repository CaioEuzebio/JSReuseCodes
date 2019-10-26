// par nome/valor

const saudacao = 'Opa!' //context lexico 1


function exec() {
    const saudacao = 'Falaaaa' //contexto lexico 2
    return saudacao
}

//objetos sao grupos anunhados de pares nome/valor

const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
        lugaroudo: 'Rua sem nome',
        numero: 23
}
console.log(saudacao)
console.log(exec())
console.log(cliente)
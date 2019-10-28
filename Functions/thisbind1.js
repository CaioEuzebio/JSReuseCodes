const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

// cinflict
const falar = pessoa.falar
falar()

// bind to attach function to global own object
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
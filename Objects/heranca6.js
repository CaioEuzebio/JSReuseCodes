function aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula('Bem vindo', 123)
const aula2 = new aula('Até Breve', 456)
console.log(aula1, aula2)

//simulating new

function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params) 
    return obj
}

const aula3 = novo(aula, 'Bem vindo', 789)
console.log(aula3)
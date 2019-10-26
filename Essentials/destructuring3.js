function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj1 = { min: 50, max: 40 }
console.log(rand(obj1))
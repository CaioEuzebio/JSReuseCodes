function Carro(velocidadeMaxima = 200, delta = 5) {
    //privatr attr
    let velocidadeAtual = 0

    //public method
    this.acelerar = function () {
        if (velocidadeAtual+delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    //public method
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const car = new Carro
car.acelerar()
console.log(car.getVelocidadeAtual())

const ferrari = new Carro(350, 100)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())
class Lancamentos {
    constructor(nome = 'Generico', valor =0) {
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos) {
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario() {
        let valorconsolidado = 0
        this.lancamentos.forEach(l => {
            valorconsolidado += l.valor
        })

        return valorconsolidado
    }

}



const salario = new Lancamentos('salario', 3000)
const contadeluz = new Lancamentos('contaluz', -200)

const contas = new CicloFinanceiro(4, 2019)
contas.addLancamentos(salario, contadeluz)
console.log(contas.sumario())
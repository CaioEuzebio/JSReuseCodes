function tratarELancar(erro) {
    throw new Error('....')
}

function imprimirnomegritado(obj) {
    try{
        console.log(obj.nome.toUppercase() + '!!!!')
    } catch (e) {
        tratarELancar(e)
    } finally {
        console.log('Final')
    }
}

const obj = { nome: 'Roberto' }
imprimirnomegritado(obj)
function soBoanoticia(nota) {
    if(nota >=7) {
        console.log('Aprovado com nota' + nota)
        
    }
}

soBoanoticia(8.1)
soBoanoticia(6.1)

function seForVerdade(valor) {
    if(valor){
        console.log('É Verdade...' + valor)
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade('')
seForVerdade(0)
seForVerdade(-1)
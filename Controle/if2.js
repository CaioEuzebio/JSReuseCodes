// incorreto

function test1(num) {
    if(num > 7)
        console.log(num)
    console.log('Final')
    
}

test1(6)
test1(8)


// nao usar ; nas estruturas de controle
function test2(numero) {
    if(numero > 7);{
        console.log(numero)
    }
}

test2(6)
test2(8)
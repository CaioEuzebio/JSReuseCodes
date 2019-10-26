// Nessa semano tenho um trabalho na terça e na quinta 1 e a,
//se o treabalho um e o trabalho 2 der certo no fds comprar tv de 50
// se apenas um dos dois der certo comprar tv de 32
// se nao der certo nenhum dos dois nao compra
// se der certo um dos dois ira tomar sorvete
// se nada der certo fica em casa

function compras(trabalho1, trabaçho2) {
    const comprarSorvete = trabalho1 || trabaçho2 //or
    const comprarTV50 = trabalho1 && trabaçho2 // and
    //const ComprarTv32 = !!(trabalho1 ^ trabaçho2) //btwise xor 
    const ComprarTv32 = trabalho1 != trabaçho2
    const manterSaudavel = !comprarSorvete
    
    return { comprarSorvete, comprarTV50, ComprarTv32, manterSaudavel }
}

console.log(compras(true, true))

console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
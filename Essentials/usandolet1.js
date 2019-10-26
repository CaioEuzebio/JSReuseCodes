var numero = 1
{
    let numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)

//a preferencia é sempre do maior escopo

var numero = 1
{
    let numero2 = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)
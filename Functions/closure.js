//Closure is a scope created when a function is declared
//This scope allows the function to access and manipulate variables external to the function.

const x = 'Global'

function out() {
    const x = 'Local'
    function insidef() {
        return x
    }
    return insidef
}

const myFunction = out()

console.log(myFunction())
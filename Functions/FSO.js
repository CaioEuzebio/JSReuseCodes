// Literal

function fun1() {}

// In Var
const fun2 = function () {}

// In Array

const array = [function (a, b) { return a + b}, fun1, fun2]
console.log(array[0](2,3))

// As Object Attr.

const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())

// As function param.

function run(fun) {
    fun()
}
run(function () { console.log('Nice!')})

// function to return function

function soma(a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2,3)(4)


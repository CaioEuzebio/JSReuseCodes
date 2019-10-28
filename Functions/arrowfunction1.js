let dobro = function (a) {
    return 2 * a
}

// with arrow
dobro = (a) => {
    return 2 * a
}

// or

dobro = a => 2 * a

let hello = function () {
    return 'Hello'
}

hello = () => 'Hello'
// or
hello =_=> 'Hello'
console.log(hello())
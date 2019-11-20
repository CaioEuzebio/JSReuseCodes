const obj = { a: 1, b: 2, c: 3, soma() { return a+ b +c} }
console.log(JSON.stringify(obj))

console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1,"b": "Name","c": true, "d": [5,6,7], "e": {"name": "Ana", "age": 30}}'))
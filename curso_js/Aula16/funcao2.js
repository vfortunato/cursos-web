
function soma(n1, n2){ 
    return n1 + n2
}

let res = console.log(soma(5))


//se não declarar valores no console.log os parâmetros seram igualados a zero caso
function soma(n1=0, n2=0){ 
    return n1 + n2
}

console.log(soma(7 + 7))
console.log(soma(5))

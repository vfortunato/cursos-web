let num = ['e', 'f', 'd', 'c']
num.push('a') //adiciona na ultima posição
num.sort() //ordena em ordem crescente/ alfabética
num.push('b')
//num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log (`Nosso vetor é o ${num}`)
/*
for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let loc = num.indexOf('d')
console.log(`O valor d está na posição ${loc}`)
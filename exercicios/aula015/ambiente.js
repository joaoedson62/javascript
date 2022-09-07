let num = [5, 8, 2, 9, 3]
num.push(1) // Acrecenta um valor no vetor
num.sort()  // Ordena os numeros no vetor
console.log(num) // Mostra os números do vetor
console.log(`Nosso vetor tem ${num.length} posições`)   
console.log(`O primeiro valor do vetor é ${num[3]}`)

// Usando condições.

let pos = num.indexOf(9)  // indexOF é usado para localizar valores num array (vetor)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos}`)
}

/*Escreva uma função que receba um array de números e retorne o maior e o menor elemento do array em um novo array, 
sendo o maior na posição 1 e o menor na posição 2.*/
function maiorMenor(arrayN){ 
    let arrayMaiorMenor = [Math.max(...arrayN), Math.min(...arrayN)]
    return arrayMaiorMenor
}
let array = [3,4,5,6,10]
console.log(maiorMenor(array))
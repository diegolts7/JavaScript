//Escreva uma função que receba dois arrays e retorne um novo array que seja a fusão dos dois arrays originais.
function fusaoArray(array1,array2){
    return newArray = array1.concat(array2)
    // or newArray = [...array1, ...array2]
}
let array1 = [1,2,3,4,5]
let array2 = [6,7,8,9,10]
console.log(fusaoArray(array1, array2))
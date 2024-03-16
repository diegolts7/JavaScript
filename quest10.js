//Escreva uma função que receba um array de números e retorne, em um novo array, a soma (na posição 1) e a média (na posição 2) 
//de todos os elementos no array utilizando o método reduce.
function SomaMedia(array){
    let soma = array.reduce((contador, i) => contador + i, 0)
    let media = soma / array.length
    return newArray = [soma, media]
}
let array = [2,3,7,10,34,57]
console.log(SomaMedia(array))
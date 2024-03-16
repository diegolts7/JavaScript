/*Escreva uma função que receba um array com nomes e uma letra e retorne um novo array apenas 
com os nomes que começam com a letra informada. Utilize filter para resolver essa questão.*/
function filtrarLetra(arrayNomes, letra){
    return newArray = arrayNomes.filter(i => i[0] == letra)
}
let array = ["diego","Darkiane","sergio","alex"]
console.log(filtrarLetra(array, "d"))
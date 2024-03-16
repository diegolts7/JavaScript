//Escreva uma função chamada contarPropriedades que aceita um objeto como argumento e retorna o número de propriedades nesse objeto.
function contarPropriedades(objeto){
    let cont = 0
    for( let prop in objeto){
        cont += 1
    }
    return cont
}
const pessoa = {
    nome: "diego",
    idade: 13,
}
console.log(contarPropriedades(pessoa))
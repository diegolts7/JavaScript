//Escreva uma função chamada verificarPropriedade que aceita um objeto e uma string como argumentos e verifica se a propriedade especificada existe no objeto. Retorne verdadeiro se existir e falso caso contrário.
let objeto = {
  nome: '',
  idade: 13,
  cpf: 1234
};
function verificarPropriedade (string){
  return string in objeto;
}
console.log(verificarPropriedade('cpf'));
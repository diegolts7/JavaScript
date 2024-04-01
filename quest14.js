//Escreva um array com vários objetos Funcionário com Nome, Cargo e Salário. Em seguida, escreva uma função concederAumento que recebe o array de funcionários e um numero X que representa uma porcentagem e concede um aumento de X% para todos os funcionários, retornando os novos funcionários em seguida.
const funcionarios = [
    { Nome: 'Diego', Cargo: 'Ajudante', Salario: 1000},
    { Nome: 'Alek', Cargo: 'pedreiro', Salario: 1200},
    { Nome: 'Sergin', Cargo: 'Cadeirante', Salario: 0},
    { Nome: 'Chicao', Cargo: 'Herdeiro', Salario: 10000},
];
function concederAumento(array, aumento){
    array.forEach(funcionario => {
        console.log(`${funcionario.Nome} - ${funcionario.Cargo} - ${funcionario.Salario += funcionario.Salario * (aumento/100)}`)
    })
}
concederAumento(funcionarios,10);
concederAumento(funcionarios,20);
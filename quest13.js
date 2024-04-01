//Escreva um array com vários objetos carro com propriedades modelo, marca, ano e cor, itere sobre o array e imprima todos os carros, um em cada linha, seguindo o modelo "Modelo - Marca - Cor - Ano".
let carros = [
    { modelo: 'Gol', marca: 'Volkswagen', ano: 2020, cor: 'Prata' },
    { modelo: 'Civic', marca: 'Honda', ano: 2019, cor: 'Preto' },
    { modelo: 'HB20', marca: 'Hyundai', ano: 2018, cor: 'Branco' }
];
carros.forEach(carro => {
    console.log(`${carro.modelo} - ${carro.marca} - ${carro.cor} - ${carro.ano}`);
});
let string = ['diego','oiiii']
console.log(string)
class retangulo {
    constructor(altura, largura){
        this.altura = altura
        this.largura = largura
    }
    calcularArea() {
        return this.altura * this.largura
    }
}
let novoRetangulo = new retangulo(10,10)
console.log(novoRetangulo.calcularArea())
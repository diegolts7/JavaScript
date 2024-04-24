// Criação da classe Pessoa que vai corresponder a cada pessoa

class Pessoa {
    constructor(nome,idade,matricula){
        this.nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }
}

// implementando a classe ListaPessoa que tem como propriedade principal criar um objeto Map() que vai ser base para as operações do CRUD

class ListaPessoa {
    constructor(){
        this.ListaPessoas = new Map();
        this.contMatricula = 0;
        this.matriculaRemovidaMeio = 0;
    }
    addPessoa(Nome,Idade){          //Metodo para adicionar nova pessoa

        let cont = this.contMatricula;

        function setMatricula() {           // função para gerar uma matricula válida

            let data = new Date();
            let mes = data.getMonth();
            let ano = data.getFullYear();
            let stringMatricula = `${ano}${mes}${cont}`;
            return Number(stringMatricula);
        
        }

        let matricula = setMatricula();

        // parte que sera exucutada normalmente para adicionar pessoa

        if(this.matriculaRemovidaMeio === 0){           
            this.ListaPessoas.set(matricula, new Pessoa(Nome,Idade,matricula));     //adiciona caso ainda não tenha sido removido pessoa ou a pessoa removida seja a ultima da lista;
            this.contMatricula++;
        }else {   //essa parte é executada quando o usuario remove alguma pessoa que não seja a ultima da lista para que não aconteça a perca de matriculas
            this.ListaPessoas.set(this.matriculaRemovidaMeio, new Pessoa(Nome,Idade,this.matriculaRemovidaMeio));
            this.matriculaRemovidaMeio = 0;
            this.contMatricula++;
        }

    }
    exibirTodos() {     // metodo para exibir todos da lista

        this.ListaPessoas.forEach(pessoa =>{
            console.log(`Pessoa\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nMatricula: ${pessoa.matricula}\n`);
        });

    }
    exibirFiltro(arrayFiltrado) {       // metodo que é chamado quando se tem um filtro especifico para exibir, e recebe um array
        arrayFiltrado.forEach((pessoa) => {
            console.log(`Pessoa\nNome: ${pessoa.nome}\nIdade: ${pessoa.idade}\nMatricula: ${pessoa.matricula}\n`);
        });
    }
    removerPessoa(matricula) {      //metodo para remover pessoa da lista

        if(!this.ListaPessoas.has(matricula)){         //tratamento de erro
            console.log("Erro ao excluir! Esse usuario não existe.");
        }else{

            let todasChaves = this.ListaPessoas.keys();  // pegando todas as chaves do meu Map()

            if(matricula !== Array.from(todasChaves)[this.ListaPessoas.size -1]){      //verificando pelas chaves se quem eu quero remover é o ultimo da lista
                this.matriculaRemovidaMeio = matricula;     //atribuo a matricula dele a essa propriedade, para evitar perca de matricula ao adicionar uma nova pessoa
            }

            this.ListaPessoas.delete(matricula);
    
            if(this.ListaPessoas.size === 0){           //zerando as propriedades caso a lista não tenha mais ninguem
                this.contMatricula = 0;
            }else{
                this.contMatricula--;               // removo -1 dessa propriedade pois houve uma remoção
            }

        }
    }
    removerTodos() {            // metodo para zerar todo o Map()

        this.ListaPessoas.clear();
        this.contMatricula = 0;

    }
    atualizar(matricula,nome,idade) {       //metodo para atualizar os dados de acordo com a matricula

        this.ListaPessoas.forEach((elemento, chave) => {
            if(matricula === chave){
                elemento.nome = nome;
                elemento.idade = idade;
            }
        })

    }
    buscar(valor) {         //metodo para fazer a busca por nome,idade e matricula
        
        if(typeof valor === "string"){      //verifica se é o nome e chama o metodo exibir filtro

            let arrayBusca = Array.from(this.ListaPessoas.values());
            let arrayFiltro = arrayBusca.filter(elemento => elemento.nome === valor.toLowerCase());
            if(arrayFiltro.length === 0){
                console.log("Nome não encontrado!");
            }else{
                this.exibirFiltro(arrayFiltro);
            }
            

        }else if(typeof valor === "number"){        //verifica se é numero e depois se é a idade ou matricula e chama o metodo exibir filtro
            if(valor < 150){

                let arrayBusca = Array.from(this.ListaPessoas.values());
                let arrayFiltro = arrayBusca.filter(elemento => elemento.idade === valor);
                if(arrayFiltro.length === 0){
                    console.log("Idade não encontrada!");
                }else{
                    this.exibirFiltro(arrayFiltro);
                }
                
            }else{

                let arrayBusca = Array.from(this.ListaPessoas.values());
                let arrayFiltro = arrayBusca.filter(elemento => elemento.matricula === valor);
                if(arrayFiltro.length === 0){
                    console.log("Matricula não encontrada!");
                }else{
                    this.exibirFiltro(arrayFiltro);
                }
                
            }
        }
        
    }

}

    //EXEMPLO DE FUNCIONAMENTO  



const lista = new ListaPessoa();

lista.addPessoa("Joao",23);
lista.addPessoa("SousaDev",20);
lista.addPessoa("Mary",18);

lista.exibirTodos();

lista.removerPessoa(202430);        //a matricula funciona: ano Ex: 2024 - mes Ex: 3 - iterador contMatricula Ex: 0

lista.atualizar(202431, "diego", 26);

lista.buscar("Mary");

lista.removerTodos();
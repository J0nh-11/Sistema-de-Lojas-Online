const prompt = require('prompt-sync')();
const produto = require('./produto.js');
const produtoRoupa = require('./produtoRoupa.js');
const produtoEletronico = require('./produtoEletronico.js');
const produtoAlimento = require('./produtoAlimento.js');

//class main, sistema da loja:
class main {
    constructor(){
        this.escolha = '';
    }
    //Método de compra de roupas
    compraRoupa(){
        //Cria e apresenta os produtos
        console.clear();
        const roupa1 = new produtoRoupa("Camiseta", 50.00, "Roupas", "Camiseta de algodão", "M", "Algodão");
        const roupa2 = new produtoRoupa("Calça Jeans", 120.00, "Roupas", "Calça jeans azul", "42", "Denim");
        const roupa3 = new produtoRoupa("Jaqueta", 200.00, "Roupas", "Jaqueta de couro", "G", "Couro");
        console.log( [roupa1 `Nome do produto: ${roupa1.getNome()}, Preço: R$${roupa1.getPreço()}, Descrição: ${roupa1.getExibirInformações()}, Desconto da promoção: R$${roupa1.getDescontoFixo()}`,
                roupa2 `Nome do produto: ${roupa2.getNome()}, Preço: R$${roupa2.getPreço()}, Descrição: ${roupa2.getExibirInformações()}, Desconto da promoção: R$${roupa2.getDescontoFixo()}`,
                roupa3 `Nome do produto: ${roupa3.getNome()}, Preço: R$${roupa3.getPreço()}, Descrição: ${roupa3.getExibirInformações()}, Desconto da promoção: R$${roupa3.getDescontoFixo()}`]);
    }
    //Método de compra de eletrônicos
    compraEletronico(){
        //Cria e apresenta os produtos
          console.clear();
        const eletronico1 = new produtoEletronico("Smartphone", 1500.00, "Eletrônicos", "Smartphone com 128GB", "MarcaX", 24);
        const eletronico2 = new produtoEletronico("Notebook", 3500.00, "Eletrônicos", "Notebook com 16GB RAM", "MarcaY", 12);
        const eletronico3 = new produtoEletronico("Fone de Ouvido", 300.00, "Eletrônicos", "Fone de ouvido Bluetooth", "MarcaZ", 6);
        console.log( [eletronico1 `Nome do produto: ${eletronico1.getNome()}, Preço: R$${eletronico1.getPreço()}, Descrição: ${eletronico1.getExibirInformações()}`,
        eletronico2 `Nome do produto: ${eletronico2.getNome()}, Preço: R$${eletronico2.getPreço()}, Descrição: ${eletronico2.getExibirInformações()}`,
                eletronico3 `Nome do produto: ${eletronico3.getNome()}, Preço: R$${eletronico3.getPreço()}, Descrição: ${eletronico3.getExibirInformações()}`]);
    }
    //Método de compra de alimentos
    compraAlimento(){   
        //Cria e apresenta os produtos
          console.clear();
        const alimento1 = new produtoAlimento("Arroz", 20.00, "Alimentos", "Pacote de arroz 5kg", "2024-12-31");
        const alimento2 = new produtoAlimento("Feijão", 15.00, "Alimentos", "Pacote de feijão 1kg", "2024-10-15");
        const alimento3 = new produtoAlimento("Macarrão", 8.00, "Alimentos", "Pacote de macarrão 500g", "2025-01-20");
        console.log([alimento1 `Nome do produto: ${alimento1.getNome()}, Preço: R$${alimento1.getPreço()}, Descrição: ${alimento1.getExibirInformações()}, Validade: ${alimento1.validade}`,
                alimento2 `Nome do produto: ${alimento2.getNome()}, Preço: R$${alimento2.getPreço()}, Descrição: ${alimento2.getExibirInformações()}, Validade: ${alimento2.validade}`,
                alimento3 `Nome do produto: ${alimento3.getNome()}, Preço: R$${alimento3.getPreço()}, Descrição: ${alimento3.getExibirInformações()}, Validade: ${alimento3.validade}`]);
    }
    //Método que inicia o sistema da loja
    iniciar() {

        console.log("Bem vindo a loja!");
        //Instância do prompt para perguntar o nome do cliente
        let nomeCliente = prompt("Por favor, digite seu nome: ");
        console.log(`Olá ${nomeCliente}, seja bem vindo(a) a nossa loja!`);
        this.escolha = prompt( `Escolha a categoria de produto que deseja ver:
                                            1 - Roupas;
                                            2 - Eletrônicos;
                                            3 - Alimentos;\n `)
                                           
        //Equanto não for verdadeiro irá esperar o cliente digitar a opção válida.
        let opcaoValida = ['1', '2', '3'];
        while (opcaoValida.includes(this.escolha) === false) {
            if ( this.escolha === '1') {
                console.clear();
                 this.compraRoupa()
               } else if ( this.escolha === '2') {
                console.clear();
                    this.compraEletronico();
                } else if ( this.escolha === '3') {
                   console.clear();
                    this.compraAlimento();
                } else {
                    console.clear();
                    console.log("Opção inválida, por favor escolha uma opção válida.");
                    break;
                }
        }
    }
    
}

//Inicia o sistema da loja
const sistemaLoja = new main();
sistemaLoja.iniciar();

const Produto = require('./produto.js');
const ProdutoRoupa = require('./produtoRoupa.js');
const ProdutoEletronico = require('./produtoEletronico.js');
const ProdutoAlimento = require('./produtoAlimento.js');
const EstoqueProdutos = require('./estoqueProdutos.js');
const Perguntas = require('./perguntas.js');

//class main, sistema da loja:
class Main {
    constructor(escolha, cadastrar) {
        this.escolha = escolha;
        this.cadastrar = cadastrar;
    }
    //Método que inicia o sistema da loja
    iniciar() {

        console.log("Bem vindo a loja!");
        //Instância do prompt para perguntar o nome do cliente
        const nomeCliente = sistemaLoja.Perguntas.perguntaNomeCliente();
        console.log(`Olá ${nomeCliente}, seja bem vindo(a) a nossa loja!\n`);
        sistemaLoja.Perguntas.perguntaDaOpcaoMenu();
    }

    //Método do menu de compra
    menuCompra() {
       perguntaDaCompra();
    }
    //Menu principal
    menuPrincipal() {
        /**Cadastrar produto
Listar produtos
Buscar produto
Simular compra */
        perguntaDaOpcaoMenu();
}
    cadastrarProduto() {
        this.escolha = prompt(`
            Qual produto você quer cadastrar?
            1 - Roupa;\n
            2 - Eletrônico;\n 
            2 - Alimento;\n 
            4 - Voltar ao menu principal;\n `);
        switch (this.escolha) {
            case '1': {
                this.cadastrar.push()
            }
        }
    }
}

module.exports = Main;
//Inicia o sistema da loja
const sistemaLoja = new Main();
sistemaLoja.Perguntas = new Perguntas();
sistemaLoja.iniciar();


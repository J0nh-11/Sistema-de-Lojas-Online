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
        const nomeCliente = this.perguntas.perguntaNomeCliente();
        console.log(`Olá ${nomeCliente}, seja bem vindo(a) a nossa loja!\n`);
        this.perguntas.perguntaDaOpcaoMenu();
    }

    //Método do menu de compra
    menuCompra() {
        this.perguntas.perguntaDaCompra();
    }

    //Menu principal
    menuPrincipal() {
        this.perguntas.perguntaDaOpcaoMenu();
    }
}

module.exports = Main;

//Inicia o sistema da loja
const sistemaLoja = new Main();
sistemaLoja.perguntas = new Perguntas();
sistemaLoja.iniciar();


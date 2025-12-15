const Main = require('./main.js');
const EstoqueProdutos = require('./estoqueProdutos.js');
const prompt = require('prompt-sync')();

class Perguntas {
    perguntaDaOpcaoMenu() {
    this.escolha = prompt(`Menu Principal - Escolha uma opção:
    1 - Cadastrar produto;
    2 - Listar produtos;
    3 - Buscar produto;
    4 - Simular compra;\n `);
        switch (this.escolha) {
            case '1': {
                this.cadastrarProduto();
                break;
            }
            case '2': {
                this.listaHistoricoProduto();
                break;
            }
            case '3': {
                this.buscarProduto();
                break;
            }
            case '4': {
                this.perguntaDaCompra();
                break;
            }
            default: console.log("Opção inválida. Por favor, escolha uma opção válida.");
                this.perguntaDaOpcaoMenu();
                break;
        }

    }
    perguntaDaCompra() {
         this.escolha = prompt(`Escolha a categoria de produto que deseja ver:
    1 - Roupas;
    2 - Eletrônicos;
    3 - Alimentos;
    4 - Carrinho;
    5 - Voltr o inicio;\n `);
        console.clear();
        switch (this.escolha) {
            case '1': {
                console.clear();
                this.compraRoupa();
                break;
            }
            case '2': {
                this.compraEletronico();
                break;
            }
            case '3': {
                this.compraAlimento();
                break;
            }
            case '4': {
                this.carrinhoProduto();
                break;
            }
            case '5': {
                this.perguntaDaOpcaoMenu();
                break;
            }

            default: console.log("Opção inválida. Por favor, escolha uma opção válida.");
                this.perguntaDaCompra();
        }
    }
    perguntaNomeCliente() {
        let nomeCliente = prompt("Por favor, digite seu nome: ");
        return nomeCliente;
    }
}

module.exports = Perguntas;
const Main = require('./main.js');
const EstoqueProdutos = require('./estoqueProdutos.js');
const prompt = require('prompt-sync')();
const Produto = require('./produto.js');
const ProdutoRoupa = require('./produtoRoupa.js');
const ProdutoEletronico = require('./produtoEletronico.js');
const ProdutoAlimento = require('./produtoAlimento.js');
const GerenciandoLoja = require('./gerenciandoLoja.js');


class Perguntas {
    perguntaDaOpcaoMenu() {
        this.escolha = prompt(`Menu Principal - Escolha uma opção:
    1 - Cadastrar produto;
    2 - Listar produtos;
    3 - Buscar produto;
    4 - Simular compra;\n `);
        switch (this.escolha) {
            case '1': {
                console.log("Você escolheu a opção: Cadastrar produto\n");
                this.perguntaDoCarrinho()
                break;
            }
            case '2': {
                console.log("Você escolheu a opção: Listar produto\n");
                GerenciandoLoja.listaHistoricoProduto();
                break;
            }
            case '3': {
                console.log("Você escolheu a opção: Buscar produto\n");
                GerenciandoLoja.buscarProduto();
                break;
            }
            case '4': {
                console.log("Você escolheu a opção: Simular compra\n");
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
                console.log("Você escolheu a opção: Roupas\n");
                EstoqueProdutos.compraRoupa();
                break;
            }
            case '2': {
                console.log("Você escolheu a opção: Eletrônicos\n");
                EstoqueProdutos.compraEletronico();
                break;
            }
            case '3': {
                console.log("Você escolheu a opção: Alimentos\n");
                EstoqueProdutos.compraAlimento();
                break;
            }
            case '4': {

                console.log("Você escolheu a opção: Carrinho\n");
                EstoqueProdutos.carrinhoProduto();
                break;
            }
            case '5': {
                console.log("Voltando ao menu principal...\n");
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
    perguntaDoCarrinho() {
        this.escolha =
            prompt(`Escolha a categoria do produto que você quer adicionar?\n
             1 - Alimentos;\n
             2 - Eletrônicos;\n
             3 - Roupas;\n
             4 - Voltar ao menu de compras;\n `);
        switch (this.escolha) {
            case '1': {
                console.log("Você escolheu a opção: Alimentos\n");
                this.perguntasAlimentos();
                break;
            }
            case '2': {
                console.log("Você escolheu a opção: Eletrônicos\n");
                this.perguntaEletronicos();
                break;
            }
            case '3': {
                console.log("Você escolheu a opção: Roupas\n");
                this.perguntaRoupas();
                break;
            }
            case '4': {
                console.log("Voltando ao menu de compras...\n");
                this.perguntaDaCompra();
                break;
            }
            default: console.log("Opção invalida, digite um número!");
                this.perguntaDoCarrinho();
                break;
        }
    }
    perguntasAlimentos() {
        let nome = prompt("Digite o nome do alimento: ");
        let preço = parseFloat(prompt("Digite o preço do alimento: "));
        let categoria = prompt("Digite a categoria do alimento: ");
        let descrição = prompt("Digite a descrição do alimento: ");
        let validade = prompt("Digite a validade do alimento (ANO-MÊS-DIA'): ");
        const alimento = new ProdutoAlimento(nome, preço, categoria, descrição, validade);
        console.log("Alimento cadastrado!\n");
        GerenciandoLoja.cadastrarProduto() = alimento;
    }
    perguntaEletronicos() {
        let nome = prompt("Digite o nome do eletrônico: ");
        let preço = parseFloat(prompt("Digite o preço do eletrônico: "));
        let categoria = prompt("Digite a categoria do eletrônico: ");
        let descrição = prompt("Digite a descrição do eletrônico: ");
        let voltagem = prompt("Digite a voltagem do eletrônico (110V ou 220V): ");
        let garantia = prompt("Digite a garantia do eletrônico (em meses): ");
        const eletronico = new ProdutoEletronico(nome, preço, categoria, descrição, voltagem, garantia);
        console.log("Eletrônico cadastrado!\n");
        GerenciandoLoja.cadastrarProduto() = eletronico;
    }
    perguntaRoupas() {
        let nome = prompt("Digite o nome da roupa: ");
        let preço = parseFloat(prompt("Digite o preço da roupa: "));
        let categoria = prompt("Digite a categoria da roupa: ");
        let descrição = prompt("Digite a descrição da roupa: ");
        let tamanho = prompt("Digite o tamanho da roupa (P, M, G, GG): ");
        let material = prompt("Digite o material da roupa: ");
        const roupa = new ProdutoRoupa(nome, preço, categoria, descrição, tamanho, material);
        console.log("Roupa cadastrada!\n");
        GerenciandoLoja.cadastrarProduto() = roupa;
    }
}
module.exports = Perguntas;
const Main = require('./main.js');
const Perguntas = require('./perguntas.js');
const Produto = require('./produto.js');
const ProdutoRoupa = require('./produtoRoupa.js');
const ProdutoEletronico = require('./produtoEletronico.js');
const ProdutoAlimento = require('./produtoAlimento.js');
const EstoqueProdutos = require('./estoqueProdutos.js');
const perguntas = require('./perguntas.js');

class GerenciandoLoja {

    // Código da classe GerenciandoLoja

    static cadastrarProduto() { 
        let produto = [];
        return produto.push(Perguntas.alimento);
    };
    static listaHistoricoProduto() { };
    static buscarProduto() { };
}

module.exports = GerenciandoLoja;
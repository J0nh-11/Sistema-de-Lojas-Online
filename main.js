const produto = require('./produto.js');
const produtoRoupa = require('./produtoRoupa.js');
const produtoEletronico = require('./produtoEletronico.js');
const produtoAlimento = require('./produtoAlimento.js');

function crinadoProdutos() {

    const camisa = new produtoRoupa('Camisa', 50, 'Roupa', 'Camisa social manga longa', 'M', 'Algodão');
    const celular = new produtoEletronico('Smartphone', 1500, 'Eletrônico', 'Smartphone Android com 128GB', 5, 2);
    const feijao = new produtoAlimento('Feijão', 7, 'Alimento', 'Feijão carioca tipo 1', '2024-12-31');
    console.log("Desconto Camisa: R$ " + camisa.setCalcularDesconto(15));
    console.log("Desconto Celular: R$ " + celular.setCalcularDesconto(10));
    console.log("Desconto Feijão: R$ " + feijao.setCalcularDesconto(0));
    console.log(feijao.getExibirInformações());

}

console.log(crinadoProdutos());

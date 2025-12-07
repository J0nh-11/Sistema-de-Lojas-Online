const paiProduto = require('./produto.js');
const Produto = paiProduto;
class produtoEletronico extends Produto {
    #voltagem;
    #garantia;
    constructor(nome, preço, categoria, descrição ,voltagem, garantia) {
        super(nome, preço, categoria, descrição)
        this.#voltagem = voltagem;
        this.#garantia = garantia;
    }
    getExibirInformações() {
        return `${super.getExibirInformações()} - Voltagem:  ${this.#voltagem} - Garantia: ${this.#garantia}`;
    }
}
const celular = new produtoEletronico('Smartphone', 1500, 'Eletrônico', 'Smartphone Android com 128GB', 5, 2);
console.log(celular.setCalcularDesconto(10));

module.exports = produtoEletronico;
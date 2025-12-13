const paiProduto = require('./produto.js');
const Produto = paiProduto;
class ProdutoEletronico extends Produto {
    #voltagem;
    #garantia;
    constructor(nome, preço, categoria, descrição, voltagem, garantia) {
        super(nome, preço, categoria, descrição)
        this.#voltagem = voltagem;
        this.#garantia = garantia;
    }
    getExibirInformações() {
        return `${super.getExibirInformações()} - Voltagem:  ${this.#voltagem} - Garantia: ${this.#garantia}`;
    }
}

module.exports = ProdutoEletronico;
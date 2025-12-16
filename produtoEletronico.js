const Produto = require('./produto.js');

class ProdutoEletronico extends Produto {
    #voltagem;
    #garantia;
    constructor(nome, preço, categoria, descrição, voltagem, garantia) {
        super(nome, preço, categoria, descrição)
        this.#voltagem = voltagem;
        this.#garantia = garantia;
    }
    getVolts() {
        return this.#voltagem;
    }
    getGarantia() {
        return this.#garantia;
    }
    getExibirInformações() {
        return `${super.getExibirInformações()} - Volts:  ${this.getVolts()} - Garantia: ${this.getGarantia()}\n`;
    }
}

module.exports = ProdutoEletronico;
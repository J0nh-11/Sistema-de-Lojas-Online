const Produto = require("./produto");

class ProdutoRoupa extends Produto {
    #tamanho;
    #material;
    constructor(nome, preço, categoria, descrição, tamanho, material) {
        super(nome, preço, categoria, descrição);
        this.#tamanho = tamanho;
        this.#material = material;
    }
    getTamanho() {
        return this.#tamanho;
    }
    getMaterial() {
        return this.#material;
    }   
    setDescontoFixo() {
        this.setCalcularDesconto(10);
    }
        getExibirInformações() {
            return `${super.getExibirInformações()} \nTamanho: ${this.getTamanho()}\nMaterial: ${this.getMaterial()}\n`;
    };
};

module.exports = ProdutoRoupa;
const Produto = require("./produto");

class ProdutoRoupa extends Produto {
    constructor(nome, preço, categoria, descrição, tamanho, material) {
        super(nome, preço, categoria, descrição);
        this.tamanho = tamanho;
        this.material = material;
    }
    setDescontoFixo() {
        this.setCalcularDesconto(10);
    }
        getExibirInformações() {
            return super.getExibirInformações() + `\nTamanho: ${this.tamanho}\nMaterial: ${this.material}\n`;
    };
};

module.exports = ProdutoRoupa;
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
};

module.exports = ProdutoRoupa;
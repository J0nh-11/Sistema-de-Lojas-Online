const Produto = require("./produto");

class ProdutoRoupa extends Produto {
    constructor(nome, preço, categoria, descrição, tamanho, material) {
        super(nome, preço, categoria, descrição);
        this.tamanho = tamanho;
        this.material = material;
    }

};

module.exports = ProdutoRoupa;
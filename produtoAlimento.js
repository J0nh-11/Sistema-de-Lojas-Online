const Produto = require("./produto");

class ProdutoAlimento extends Produto {
    constructor(nome, preço, categoria, descrição, validade) {
        super(nome, preço, categoria, descrição);
        this.validade = validade;
    }
};

module.exports = ProdutoAlimento;
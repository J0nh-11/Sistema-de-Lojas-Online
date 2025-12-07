const produto = require("./produto");

class produtoAlimento extends produto {
    constructor(nome, preço, categoria, descrição, validade) {
        super(nome, preço, categoria, descrição);
        this.validade = validade;
    }
}
const feijao = new produtoAlimento('Feijão', 7, 'Alimento', 'Feijão carioca tipo 1', '2024-12-31');
console.log(feijao.setCalcularDesconto(0));
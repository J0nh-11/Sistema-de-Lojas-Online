const Produto = require("./produto");

class ProdutoAlimento extends Produto {
    constructor(nome, preço, categoria, descrição, validade) {
        super(nome, preço, categoria, descrição);
        this.validade = validade;
    }
    //Verifica a data de validade do alimento
     setValodadeDoAlimento(dataValidade)  {
        const hoje = new Date();
        const validade = new Date(dataValidade);
        if (validade >= hoje) {
            return `Data de validade do alimento: ${dataValidade}`;
        } else {
            return `Alimento vencido`;
        }
    }
        getExibirInformações() {
        return `${super.getExibirInformações()} Validade: ${this.setValodadeDoAlimento(this.validade)}\n`;
    };
};

module.exports = ProdutoAlimento;
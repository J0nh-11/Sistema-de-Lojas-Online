const Produto = require("./produto");

class ProdutoAlimento extends Produto {
    constructor(nome, preço, categoria, descrição, validade) {
        super(nome, preço, categoria, descrição);
        this.validade = validade;
    }
    //Verifica a data de validade do alimento
     setValodadeDoAlimento(dataValidade)  {
        let data = dataValidade;
        for (let i = 0; i < 2027; i++) {
            if (data <= data[i])
                return `Data de validade do alimento: ${data}`;
            else {
                return `Alimento vencido`;
            }
        }
    }
        getExibirInformações() {
        return `${super.getExibirInformações()} Validade: ${this.setValodadeDoAlimento()}\n`;
    };
};

module.exports = ProdutoAlimento;
const Main = require('./main.js');
const Perguntas = require('./perguntas.js');

class GerenciandoLoja {
    // Código da classe GerenciandoLoja
    static cadastrarProduto() {

        let cadastro = []
        if (this.escolha === '1') {
            Perguntas.perguntasAlimentos();
            cadastro.push(`${super.getExibirInformações()} Validade: ${this.setValodadeDoAlimento()}\n`);

            console.log('Produto adicionado com sucesso!');
        }
        else if (this.escolha === '2') {
            cadastro.push(`${super.getExibirInformações()} - Volts:  ${this.getVolts()} - Garantia: ${this.getGarantia()}\n`);
            console.log('Produto adicionado com sucesso!');
        }
        else if (this.escolha === '3') {
           cadastro.push(`${super.getExibirInformações()} - \nTamanho: ${this.getTamanho}\nMaterial: ${this.getMaterial}\n`);
            console.log('Produto adicionado com sucesso!');
        }

    }
    static listaHistoricoProduto() { }
    static buscarProduto() { }
}

module.exports = GerenciandoLoja;
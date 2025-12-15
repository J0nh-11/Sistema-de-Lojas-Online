class Produto {
    #nome;
    #preço;
    #categoria;
    #descrição;

    constructor(nome, preço, categoria, descrição) {
        this.#nome = nome;
        this.#preço = preço;
        this.#categoria = categoria;
        this.#descrição = descrição;
    };
    getNome() {
        return this.#nome;
    };
    getPreço() {
        return this.#preço;
    };
    getCategoria() {
        return this.#categoria;
    };
    getDescricao() {
        return this.#descrição;
    }
    getExibirInformações() {
        return `Nome: ${this.#nome}\nPreço: R$${this.#preço.toFixed(2)}\nCategoria: ${this.#categoria}\nDescrição: ${this.#descrição}`;
    };
    setCalcularDesconto(percentual) {
        if (percentual <= 0)
            return percentual = this.#preço;

        const desconto = this.#preço * (percentual / 100);
        return this.#preço - desconto;
    };
};
module.exports = Produto;

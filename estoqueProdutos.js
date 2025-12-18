const produto = require('./produto.js');
const produtoRoupa = require('./produtoRoupa.js');
const produtoEletronico = require('./produtoEletronico.js');
const produtoAlimento = require('./produtoAlimento.js');
const Produto = require('./produto.js');

class EstoqueProdutos {
    static produtos = [];
    static adicionarNoCarrinho(produto) {
        this.produtos.push(produto);
    }
    //Método de compra de roupas
    static compraRoupa() {
        //Cria e apresenta os produtos
        const roupa1 = new produtoRoupa("Camiseta", 50.00, "Roupas", "Camiseta de algodão", "M", "Algodão");
        const roupa2 = new produtoRoupa("Calça Jeans", 120.00, "Roupas", "Calça jeans azul", "42", "Denim");
        const roupa3 = new produtoRoupa("Jaqueta", 200.00, "Roupas", "Jaqueta de couro", "G", "Couro");
        console.log(roupa1.getExibirInformações(), '\n\n',
            roupa2.getExibirInformações(), '\n\n',
            roupa3.getExibirInformações()), '\n\n';

        // Lista produtos cadastrados dinamicamente
        if (this.produtos.length > 0) {
            console.log("Produtos cadastrados:");
            this.produtos.forEach(prod => {
                if (prod instanceof produtoRoupa) {
                    console.log(prod.getExibirInformações(), '\n');
                }
            });
        } else {
            console.log("Nenhum produto de roupa cadastrado.");
        }
    }
    //Método de compra de eletrônicos
    static compraEletronico() {
        //Cria e apresenta os produtos
        const eletronico1 = new produtoEletronico("Smartphone", 1500.00, "Eletrônicos", "Smartphone com 128GB", "MarcaX", 24);
        const eletronico2 = new produtoEletronico("Notebook", 3500.00, "Eletrônicos", "Notebook com 16GB RAM", "MarcaY", 12);
        const eletronico3 = new produtoEletronico("Fone de Ouvido", 300.00, "Eletrônicos", "Fone de ouvido Bluetooth", "MarcaZ", 6);
        console.log(eletronico1.getExibirInformações(), '\n',
            eletronico2.getExibirInformações(), '\n',
            eletronico3.getExibirInformações()), '\n';

        // Lista produtos cadastrados dinamicamente
        if (this.produtos.length > 0) {
            console.log("Produtos cadastrados:");
            this.produtos.forEach(prod => {
                if (prod instanceof produtoEletronico) {
                    console.log(prod.getExibirInformações(), '\n');
                }
            });
        } else {
            console.log("Nenhum produto eletrônico cadastrado.");
        }
    }
    //Método de compra de alimentos
    static compraAlimento() {
        //Cria e apresenta os produtos
        const alimento1 = new produtoAlimento("Arroz", 20.00, "Alimentos", "Pacote de arroz 5kg", "2024-12-31");
        const alimento2 = new produtoAlimento("Feijão", 15.00, "Alimentos", "Pacote de feijão 1kg", "2024-10-15");
        const alimento3 = new produtoAlimento("Macarrão", 8.00, "Alimentos", "Pacote de macarrão 500g", "2025-01-20");
        console.log(alimento1.getExibirInformações(), '\n',
            alimento2.getExibirInformações(), '\n',
            alimento3.getExibirInformações()), '\n';

        // Lista produtos cadastrados dinamicamente
        if (this.produtos.length > 0) {
            console.log("Produtos cadastrados:");
            this.produtos.forEach(prod => {
                if (prod instanceof produtoAlimento) {
                    console.log(prod.getExibirInformações(), '\n');
                }
            });
        } else {
            console.log("Nenhum produto de alimento cadastrado.");
        }
    }
    static getExibirInformaçõesDaLista() {
        console.log("=== PRODUTOS CADASTRADOS ===\n");

        if (this.produtos.length === 0) {
            console.log("Nenhum produto cadastrado no carrinho.\n");
            return;
        }

        // Separar por categoria
        const roupas = this.produtos.filter(prod => prod instanceof produtoRoupa);
        const eletronicos = this.produtos.filter(prod => prod instanceof produtoEletronico);
        const alimentos = this.produtos.filter(prod => prod instanceof produtoAlimento);

        if (roupas.length > 0) {
            console.log("--- ROUPAS ---");
            roupas.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }

        if (eletronicos.length > 0) {
            console.log("--- ELETRÔNICOS ---");
            eletronicos.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }

        if (alimentos.length > 0) {
            console.log("--- ALIMENTOS ---");
            alimentos.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }
    }
    static buscaPorCategoriaOuNome() {
        console.log("== BUSCA DE PROUTOS ==\n");

        if (this.produtos.length === 0) {
            console.log("Nenhum produto para busca.\n");
            return;
        }

        // Separar por categoria
        const roupas = this.produtos.filter(prod => prod instanceof produtoRoupa);
        const eletronicos = this.produtos.filter(prod => prod instanceof produtoEletronico);
        const alimentos = this.produtos.filter(prod => prod instanceof produtoAlimento);

        if (roupas.length > 0) {
            console.log("--- ROUPAS ---");
            roupas.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }

        if (eletronicos.length > 0) {
            console.log("--- ELETRÔNICOS ---");
            eletronicos.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }

        if (alimentos.length > 0) {
            console.log("--- ALIMENTOS ---");
            alimentos.forEach(prod => console.log(prod.getExibirInformações(), '\n'));
        }
    }
}
module.exports = EstoqueProdutos;
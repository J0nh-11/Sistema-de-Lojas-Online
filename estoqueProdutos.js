const produto = require('./produto.js');
const produtoRoupa = require('./produtoRoupa.js');
const produtoEletronico = require('./produtoEletronico.js');
const produtoAlimento = require('./produtoAlimento.js');

class EstoqueProdutos{
//Método de compra de roupas
    compraRoupa() {
        //Cria e apresenta os produtos
        console.clear();
        const roupa1 = new produtoRoupa("Camiseta", 50.00, "Roupas", "Camiseta de algodão", "M", "Algodão");
        const roupa2 = new produtoRoupa("Calça Jeans", 120.00, "Roupas", "Calça jeans azul", "42", "Denim");
        const roupa3 = new produtoRoupa("Jaqueta", 200.00, "Roupas", "Jaqueta de couro", "G", "Couro");
        console.log(roupa1.getExibirInformações(), '\n\n',
            roupa2.getExibirInformações(), '\n\n',
            roupa3.getExibirInformações()), '\n\n';
    }
    //Método de compra de eletrônicos
    compraEletronico() {
        //Cria e apresenta os produtos
        console.clear();
        const eletronico1 = new produtoEletronico("Smartphone", 1500.00, "Eletrônicos", "Smartphone com 128GB", "MarcaX", 24);
        const eletronico2 = new produtoEletronico("Notebook", 3500.00, "Eletrônicos", "Notebook com 16GB RAM", "MarcaY", 12);
        const eletronico3 = new produtoEletronico("Fone de Ouvido", 300.00, "Eletrônicos", "Fone de ouvido Bluetooth", "MarcaZ", 6);
        console.log(eletronico1.getExibirInformações(), '\n',
            eletronico2.getExibirInformações(), '\n',
            eletronico3.getExibirInformações()), '\n';
    }
    //Método de compra de alimentos
    compraAlimento() {
        //Cria e apresenta os produtos
        console.clear();
        const alimento1 = new produtoAlimento("Arroz", 20.00, "Alimentos", "Pacote de arroz 5kg", "2024-12-31");
        const alimento2 = new produtoAlimento("Feijão", 15.00, "Alimentos", "Pacote de feijão 1kg", "2024-10-15");
        const alimento3 = new produtoAlimento("Macarrão", 8.00, "Alimentos", "Pacote de macarrão 500g", "2025-01-20");
        console.log(alimento1.getExibirInformações(), '\n',
            alimento2.getExibirInformações(), '\n',
            alimento3.getExibirInformações()), '\n';
    }
}
    module.exports = EstoqueProdutos;
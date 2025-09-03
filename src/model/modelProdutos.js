'use strict'

var produtos = [
    {
        id: 1,
        nome: 'Camiseta P',
        descricao: 'lorem ipsum dolor',
        preco: 59.99,
        categoria: 'roupa',
        estoque: 10,
        ativo: true
    },
    {
        id: 2,
        nome: 'Headset RedDragon',
        descricao: 'lorem ipsum dolor artus manus',
        preco: 559.99,
        categoria: 'informatica',
        estoque: 26,
        ativo: true
    }
]

function getProdutos() {
    return produtos
}

function getProdutoId(id) {
    const idProduto = produtos.find(produto => produto.id === id)
    return idProduto
}

function getProdutoNome(nome) {
    const nomeProduto = produtos.find(produto => produto.nome == nome)
    return nomeProduto
}

function setProduto(newProdutoDados) {
    let newId = 0

        if (produtos.length > 0) {
            newId = produtos[produtos.length - 1].id + 1
        } else {
            newId = 1
        }
    

    let newProduto = {id: newId, ...newProdutoDados}
    produtos.push(newProduto)
    return newProduto
}

function alterarProduto(id, newDados) {
    for (let i = 0; i < produtos.length; i++) {
        if (produtos[i].id === id) {
            produtos[i].preco = newDados.preco
            produtos[i].estoque = newDados.estoque
        }
        
    }
    
}

module.exports = {
    getProdutos,
    getProdutoId,
    getProdutoNome,
    setProduto,
    alterarProduto
}
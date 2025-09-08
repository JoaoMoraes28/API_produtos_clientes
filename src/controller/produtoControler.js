'use strict'
const modelProdutos = require('../model/modelProdutos')

const getAllProdutos = (req, res) => {
    const produtos = modelProdutos.getProdutos()
    res.status(200).json(produtos)
}

const getProdutoId = (req, res) => {

    let id = parseInt(req.params.id)

    const produtoId = modelProdutos.getProdutoId(id)
    res.status(200).json(produtoId)
}

const getProdutoNome = (req, res) => {
    let nome = req.params.nome

    const produtoNome = modelProdutos.getProdutoNome(nome)
    res.status(200).json(produtoNome)
}

const setNewProduto = (req, res) => {

    let { nome, descricao, preco, categoria, estoque, ativo } = req.body

    const newProduto = modelProdutos.setProduto({ nome, descricao, preco, categoria, estoque, ativo })
    res.status(201).json(newProduto)

}

const setAlteracao = (req, res) => {
    let id = parseInt(req.params.id)
    let {preco, estoque} = req.body

    const alteracao = modelProdutos.alterarProduto(id, {preco, estoque})
    res.status(201).json(alteracao)
}

const deletProduto = (req, res) => {
    let id = parseInt(req.params.id)
    const deletar = modelProdutos.deletarProduto(id)
    res.status(200).json(deletar)
}

module.exports = {
    getAllProdutos,
    getProdutoId,
    getProdutoNome,
    setNewProduto,
    setAlteracao,
    deletProduto
}
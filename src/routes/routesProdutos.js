'use strict'

const express = require('express')
const routerProdutos = express.Router()
const controler = require('../controller/produtoControler')

routerProdutos.get('/', controler.getAllProdutos)

routerProdutos.get('/:id', controler.getProdutoId)

routerProdutos.get('/nome/:nome', controler.getProdutoNome)

routerProdutos.post('/', controler.setNewProduto)

routerProdutos.patch('/:id', controler.setAlteracao)

routerProdutos.delete('/:id', controler.deletProduto)

module.exports = routerProdutos
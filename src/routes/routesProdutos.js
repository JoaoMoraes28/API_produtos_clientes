'use strict'

const express = require('express')
const router = express.Router()
const controler = require('../controller/produtoControler')

router.get('/', controler.getAllProdutos)

router.get('/:id', controler.getProdutoId)

router.get('/nome/:nome', controler.getProdutoNome)

router.post('/', controler.setNewProduto)

router.patch('/:id', controler.setAlteracao)

module.exports = router
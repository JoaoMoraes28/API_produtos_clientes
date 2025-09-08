'use strict'

const express = require('express')
const routerClientes = express.Router()
const controler = require('../controller/clienteControler')

routerClientes.get('/', controler.allClientes)

routerClientes.get('/:id', controler.clienteId)

routerClientes.get('/name/:name', controler.clienteName)

routerClientes.post('/', controler.createCliente)

routerClientes.patch('/:id', controler.atualizarCliente)

routerClientes.delete('/:id', controler.excluirCliente)

module.exports = routerClientes
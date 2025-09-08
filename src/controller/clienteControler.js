'use strict'

var modelClientes = require('../model/modelCliente')

const allClientes = (req, res) => {
    let clientes = modelClientes.getAllClientes()
    res.status(200).json(clientes)
}

const clienteId = (req, res) => {
    let id = parseInt(req.params.id)
    let clienteId = modelClientes.getClienteId(id)
    res.status(200).json(clienteId)
}

const clienteName = (req, res) => {
    let name = req.params.name
    let clienteName = modelClientes.getClienteName(name)
    res.status(200).json(clienteName)
}

const createCliente = (req, res) => {
    let {name, telefone, email, salario} = req.body

    let newCliente = modelClientes.setCliente({name, telefone, email, salario})
    res.status(200).json(newCliente)
}

const atualizarCliente = (req, res) => {
    let id = parseInt(req.params.id)
    let {name, telefone, email, salario} = req.body

    let atualizacoes = modelClientes.updateCliente(id, {name, telefone, email, salario})
    res.status(200).json(atualizacoes)
}

const excluirCliente = (req, res) => {
    let id = parseInt(req.params.id)
    
    let excluido = modelClientes.deletarCliente(id)
    res.status(200).json(excluido)
}

module.exports = {
    allClientes,
    clienteId,
    clienteName,
    createCliente,
    atualizarCliente,
    excluirCliente
}

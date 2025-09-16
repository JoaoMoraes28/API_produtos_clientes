'use strict'

var modelClientes = require('../model/modelCliente')

const allClientes = (req, res) => {
    let clientes = modelClientes.getAllClientes()
    res.status(200).json(clientes)
}

const clienteId = (req, res) => {
    let id = parseInt(req.params.id)
    let clienteId = modelClientes.getClienteId(id)

    if (clienteId) {
        res.status(200).json(clienteId)

    } else {
        res.status(400).json({ message: "ERROR: Não foi possível realizar o procedimento!" })
    }

}

const clienteName = (req, res) => {
    let name = req.params.name
    let clienteName = modelClientes.getClienteName(name)

    if (clienteName) {
        res.status(200).json(clienteName)

    } else {
        res.status(400).json({ message: "ERROR: Não foi possível realizar o procedimento!" })
    }

}

const createCliente = (req, res) => {
    let { name, telefone, email, salario } = req.body

    let newCliente = modelClientes.setCliente({ name, telefone, email, salario })

    if (newCliente) {
        res.status(201).json(newCliente)

    } else {
        res.status(400).json({ message: "ERROR: Não foi possível realizar o procedimento!" })
    }

}

const atualizarCliente = (req, res) => {
    let id = parseInt(req.params.id)
    let { name, telefone, email, salario } = req.body

    let atualizacoes = modelClientes.updateCliente(id, { name, telefone, email, salario })

    if (atualizacoes) {
        res.status(200).json(atualizacoes)

    } else {
        res.status(400).json({ message: "ERROR: Não foi possível realizar o procedimento!" })
    }

}

const excluirCliente = (req, res) => {
    let id = parseInt(req.params.id)

    let excluido = modelClientes.deletarCliente(id)

    if (excluido) {
        res.status(200).json(excluido)

    } else {
        res.status(400).json({ message: "ERROR: Não foi possível realizar o procedimento!" })
    }

}

module.exports = {
    allClientes,
    clienteId,
    clienteName,
    createCliente,
    atualizarCliente,
    excluirCliente
}

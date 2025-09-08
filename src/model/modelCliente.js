'use strict'

var clientes = [
    {
        id: 1,
        name: "Caio da Silva",
        telefone: "(11)91234-5678",
        email: "caioSilva@gmail.com",
        salario: 4100.50
    },
    {
        id: 2,
        name: "Jade dos Santos",
        telefone: "(11)98765-4321",
        email: "jadeSantos@hotmail.com",
        salario: 5260.20
    }
]

function getAllClientes() {
    return clientes
}

function getClienteId(id) {
    let clienteFind = clientes.find(cliente => cliente.id === id)
    return clienteFind
}

function getClienteName(name) {
    let clienteFind = clientes.find(cliente => cliente.name == name)
    return clienteFind
}

function setCliente(newClienteDados) {
    let newId
    if(clientes.length > 0) {
        newId = clientes[clientes.length - 1].id + 1

    }else {
        newId = 1
    }
    let newCliente = {id: newId, ...newClienteDados}
    clientes.push(newCliente)
    return newCliente
}

function updateCliente(id, newDados) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            clientes[i].name = newDados.name
            clientes[i].telefone = newDados.telefone
            clientes[i].email = newDados.email
            clientes[i].salario = newDados.salario
        }
        
    }
}

function deletarCliente(id) {
    for (let i = 0; i < clientes.length; i++) {
        if (clientes[i].id === id) {
            clientes.splice(i, 1)
        }
        
    }
}

module.exports = {
    getAllClientes,
    getClienteId,
    getClienteName,
    setCliente,
    updateCliente,
    deletarCliente
}
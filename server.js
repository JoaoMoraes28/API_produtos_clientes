'use strict'

const express = require('express')

const routerProdutos = require('./src/routes/routesProdutos')

const app = express()
app.use(express.json())

const porta = 3000

app.get('/', (req, res) => {
    res.send('API de Produtos está funcionando')
})

app.use('/produtos', routerProdutos)

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})
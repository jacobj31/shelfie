require('dotenv').config()
const express = require ('express')
const massive = require ('massive')
const CTRL = require('./controller')

const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express ()
app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('connected to db')
})

app.get('/api/inventory', CTRL.getInventory)
app.post('/api/item', CTRL.createItem)
app.delete('/api/item/:id', CTRL.deleteItem)
app.put('/api/item/:id', CTRL.updateItem)

app.listen (SERVER_PORT, () => console.log('listening on port', SERVER_PORT))
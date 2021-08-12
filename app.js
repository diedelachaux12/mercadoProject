const express = require ('express')
const { userInfo } = require('os')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname, './public')))

app.get('/',( req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html' ))
})

app.listen(3000, () => console.log('escuchando en el puerto 3000'))

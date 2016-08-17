const express = require('express')
const path = require('path')
const colors = require('colors')

const app = express()
const port = process.env.PORT || 4200
app.use(express.static(path.join(__dirname, '/../public')))

console.log(
'********************************************\n'.grey +
'  Server status: '.yellow + 'Online\n'.green +
'********************************************\n'.grey +
'  Reuser is listening on port:'.yellow + port + '\n' +
'********************************************\n'.grey +
'  Cleaning the world...\n'.cyan +
'  One item at a time!\n'.cyan +
'********************************************'.grey)

app.listen(port)

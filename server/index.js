const express = require('express')
const path = require('path')
const colors = require('colors')
const chalk = require('chalk')

const gray = chalk.gray
const yellow = chalk.yellow
const green = chalk.green
const cyan = chalk.cyan

const app = express()
const port = process.env.PORT || 4200
app.use(express.static(path.join(__dirname, '/../public')))

console.log(
gray('********************************************\n') +
yellow('  Server status: ') + green('Online\n') +
gray('********************************************\n') +
yellow(`  Reuser is listening on port: ${chalk.white(port)} \n`) +
gray('********************************************\n') +
cyan('  Cleaning the world...\n') +
cyan('  One item at a time!\n') +
gray('********************************************'))

app.listen(port)

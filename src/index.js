// npm
const github = require('@actions/github')

// self
const { execHandler } = require('./utils')

const context = github.context

console.log('context', JSON.stringify(context))

execHandler(context)

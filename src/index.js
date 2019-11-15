// npm
const github = require('@actions/github')

// self
const { noEventHandler, noActionHandler } = require('./utils')
const handlers = require('./handlers')

const context = github.context

const handler = handlers[context.eventName]
if (handler === undefined) noEventHandler()

const func = handler[context.payload.action]
if (func === undefined) noActionHandler()
else func(context)

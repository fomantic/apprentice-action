// self
const handlers = require('./handlers')

function noEventHandler () {
  console.log('There is no handler for this event.')
}

function noActionHandler () {
  console.log('There is no handler for this event action.')
}

function execHandler (context) {
  const handler = handlers[context.eventName]
  if (handler === undefined) noEventHandler()

  const func = handler[context.payload.action]
  if (func === undefined) noActionHandler()

  func(context.payload)
}

module.exports = {
  execHandler
}

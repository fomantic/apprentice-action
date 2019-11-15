// npm
const github = require('@actions/github')
const core = require('@actions/core')

// self
const handlers = require('./handlers')

const githubToken = core.getInput('GITHUB_SECRET', { required: true })
const ghClient = new github.GitHub(githubToken)

function noEventHandler () {
  console.log('There is no handler for this event.')
}

function noActionHandler () {
  console.log('There is no handler for this event action.')
}

function execHandler (context) {
  const handler = handlers[context.eventName]
  if (handler === undefined) return noEventHandler()

  const func = handler[context.payload.action]
  if (func === undefined) return noActionHandler()

  func(context)
}

function leaveComment (context, message) {
  ghClient.issues.createComment({
    ...context.repo,
    issue_number: context.payload.issue.number,
    body: message
  })
}

module.exports = {
  execHandler: execHandler,
  leaveComment: leaveComment
}

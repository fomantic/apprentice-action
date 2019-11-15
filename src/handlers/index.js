// self
const issues = require('./issues')
const issueComment = require('./issue_comment')
const pullRequest = require('./pull_request')

module.exports = {
  issues,
  issue_comment: issueComment,
  pull_request: pullRequest
}

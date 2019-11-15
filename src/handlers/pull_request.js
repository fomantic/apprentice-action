// self
const { leaveComment } = require('../helpers')
const commentMessages = require('../comment_messages')

function newPullRequest (context) {
  const prBody = context.pull_request.body

  const descRegExp = new RegExp(/## Description/, 'g')
  if (!descRegExp.test(prBody)) {
    leaveComment(context, commentMessages.noPrDescription(context))
  }

  if (context.payload.issue.author_association === 'FIRST_TIME_CONTRIBUTOR' ||
    context.payload.issue.author_association === 'FIRST_TIMER') {
    leaveComment(context, commentMessages.newMember(context))
  }
}

function newPrReview (context) {

}

module.exports = {
  opened: newPullRequest,
  pull_request_review: newPrReview
}

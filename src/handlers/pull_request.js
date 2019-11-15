function newPullRequest (payload) {
  console.log(`NEW PULL REQUEST OPENED (#${payload.pull_request.number})`)
}

module.exports = {
  opened: newPullRequest
}

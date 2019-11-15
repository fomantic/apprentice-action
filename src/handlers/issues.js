function newIssue (payload) {
  console.log(`NEW ISSUE OPENED (#${payload.issue.number})`)
}

module.exports = {
  opened: newIssue
}

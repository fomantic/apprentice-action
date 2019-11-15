function newComment (payload) {
  console.log(`NEW ISSUE COMMENT (#${payload.issue.number})`)
}

module.exports = {
  created: newComment
}

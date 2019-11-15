// self
const { leaveComment } = require('../helpers')
const commentMessages = require('../comment_messages')

const commands = {
  jsfiddle: commentMessages.jsfiddle
}

function newComment (context) {
  if (context.payload.comment.author_association === 'MEMBER') {
    const commentBody = context.payload.comment.body

    Object.keys(commands).forEach(command => {
      if (commentBody.startsWith(`/${command}`)) {
        return leaveComment(context, commands[command](context))
      }
    })
  }
}

module.exports = {
  created: newComment
}

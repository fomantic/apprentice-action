// self
const { leaveComment } = require('../utils')
const commentMessages = require('../comment_messages')

const issueTemplates = [
  {
    type: 'bug',
    name: 'bug report',
    template: {
      title: '# Bug Report',
      requiredSections: [
        '## Expected result',
        '## Actual result'
      ]
    }
  },
  {
    type: 'feature',
    name: 'feature request',
    template: {
      title: '# Feature Request',
      requiredSections: [
        '## Description',
        '## Example'
      ]
    }
  },
  {
    type: 'help',
    name: 'help wanted',
    template: {
      title: '# Help Wanted',
      requiredSections: [
        '## Problem'
      ]
    }
  }
]

function newIssue (context) {
  const issueBody = context.payload.issue.body
  let templateUsed
  let hasRequiredSections = true

  issueTemplates.forEach(temp => {
    const titleRegex = new RegExp(`${temp.template.title}`, 'g')

    if (titleRegex.test(issueBody)) {
      templateUsed = temp

      temp.template.requiredSections.forEach(section => {
        const sectionRegexp = new RegExp(`${section}`, 'g')
        if (!sectionRegexp.test(issueBody)) hasRequiredSections = false
      })
    }
  })

  if (templateUsed === undefined) {
    leaveComment(context, commentMessages.noTemplateUsed(context))

    if (!hasRequiredSections) {
      leaveComment(context, commentMessages.missingTemplateSections(context, templateUsed.type, templateUsed.name))
    }
  }

  if (context.payload.issue.author_association === 'FIRST_TIME_CONTRIBUTOR' ||
      context.payload.issue.author_association === 'FIRST_TIMER') {
    leaveComment(context, commentMessages.newMember(context))
  }
}

module.exports = {
  opened: newIssue
}

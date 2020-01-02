// npm
import { Toolkit } from 'actions-toolkit'

// self
import issues from './issues'
import prs from './pull_requests'

export default function runEventHandler (tools: Toolkit) {
  const eventName = tools.context.event

  switch (eventName) {
    case 'issues':
    case 'issue_comment':
      issues(tools)
      break

    case 'pull_request':
    case 'pull_request_review':
      prs(tools)
      break

    default:
      tools.exit.failure(`No event handler for '${eventName}'`)
  }
}

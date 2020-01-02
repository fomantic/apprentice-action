// npm
import { Toolkit } from 'actions-toolkit'

// self
import events from './events'

const event = [
  'issues', 'issue_comment',
  'pull_request', 'pull_request_review'
]

Toolkit.run(events, { event })

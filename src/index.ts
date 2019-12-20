// npm
import { Toolkit } from 'actions-toolkit'

Toolkit.run(async tools => {

}, {
  event: [
    'pull_request', 'issues',
    'issue_comment', 'pull_request_review'
  ]
})


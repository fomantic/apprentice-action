// npm
import { Toolkit } from 'actions-toolkit'
import * as marked from 'marked'

export default function check (type: 'issue' | 'pr', tools: Toolkit) {
  if (type === 'issue') return checkIssue(tools)
  else if (type === 'pr') return checkPr(tools)
}

export function checkIssue (tools: Toolkit) {
  const body = tools.context.payload.issue?.body
  const parsedBody = marked.lexer(body || '')

  tools.log.info(JSON.stringify(parsedBody))
}

export function checkPr (tools: Toolkit) {
  const body = tools.context.payload.pull_request?.body
  const parsedBody = marked.lexer(body || '')

  tools.log.info(JSON.stringify(parsedBody))
}

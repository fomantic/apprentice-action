// npm
import { Toolkit } from 'actions-toolkit'

// self
import opened from './opened'
import comment from './comment'

export default function run (tools: Toolkit) {
  const eventName = tools.context.event
  const eventAction = tools.context.action

  switch (eventAction) {
    case 'opened':
      opened(tools)
      break

    case 'comment':
      comment(tools)
      break

    default:
      tools.exit.failure(`No event action handler for '${eventName}/${eventAction}'`)
  }
}

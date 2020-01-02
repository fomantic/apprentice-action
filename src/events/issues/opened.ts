// npm
import { Toolkit } from 'actions-toolkit'

// self
import { checkTemplateUsed } from '../../actions'

export default function run (tools: Toolkit) {
  checkTemplateUsed('issue', tools)
}

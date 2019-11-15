module.exports = {
  noTemplateUsed: (context) => `
  Hi @${context.payload.issue.user.login} :wave:

  I noticed your issue isn't using a template, we ask users to use our issue templates to help us triage and provide the best support we can.
  
  <details>
  <summary>Please edit your comment and use one of these templates</summary>
  
  :bug: Bug Report
  \`\`\`markdown
  # Bug Report
  
  <!--
  Title Format
    [Scope] Summary of what is broken
  -->
  
  ## Steps to reproduce
  1.
  2.
  3.
  
  ## Expected result <!-- Required -->
  
  ## Actual result <!-- Required -->
  
  ## Testcase
  <!-- Fork https://jsfiddle.net/31d6y7mn -->
  
  ## Screenshot (when possible)
  ![]()
  
  ## Version
  x.x.x
  \`\`\`
  
  :rocket: Feature Request
  \`\`\`markdown
  # Feature Request
  
  ## Description <!-- Required -->
  Explain what you want in great detail
  
  ## Example <!-- Required -->
  
  ## Testcase (when possible)
  <!-- Fork https://jsfiddle.net/31d6y7mn -->
  
  ## Screenshot (when possible)
  ![]()
  \`\`\`
  
  :notebook: Support Question
  \`\`\`markdown
  # Help Wanted
  
  ## Problem <!-- Required -->
  Describe your problem in great detail
  \`\`\`
  
  </details>
  `,
  missingTemplateSections: (context, templateType, templateName) => {
    let template
    if (templateType === 'bug') {
      template = `
      \`\`\`markdown
      # Bug Report
      
      <!--
      Title Format
        [Scope] Summary of what is broken
      -->
      
      ## Steps to reproduce
      1.
      2.
      3.
      
      ## Expected result <!-- Required -->
      
      ## Actual result <!-- Required -->
      
      ## Testcase
      <!-- Fork https://jsfiddle.net/31d6y7mn -->
      
      ## Screenshot (when possible)
      ![]()
      
      ## Version
      x.x.x
      \`\`\`
      `
    } else if (templateType === 'feature') {
      template = `
      \`\`\`markdown
      # Feature Request
      
      ## Description <!-- Required -->
      Explain what you want in great detail
      
      ## Example <!-- Required -->
      
      ## Testcase (when possible)
      <!-- Fork https://jsfiddle.net/31d6y7mn -->
      
      ## Screenshot (when possible)
      ![]()
      \`\`\`
      `
    } else if (templateType === 'help') {
      template = `
      \`\`\`markdown
      # Help Wanted
      
      ## Problem <!-- Required -->
      Describe your problem in great detail
      \`\`\`
      `
    }

    return `
    Hi @${context.payload.issue.user.login} :wave:
  
    It looks like you have used the ${templateName} issue template however you have missed some required sections.
    
    <details>
    <summary>Please edit your comment and add any missing sections</summary>
    ${template}
    </details>
    `
  },
  newMember: (context) => `
  Hi @${context.payload.issue.user.login} :wave:
  
  Welcome to Fomantic-UI :heart:
  
  Please make sure you have read our [contributing guide](https://github.com/fomantic/Fomantic-UI/blob/master/CONTRIBUTING.md) and our [Code of Conduct](https://github.com/fomantic/Fomantic-UI/blob/master/CODE_OF_CONDUCT.md) and if you have any questions take a look at our [FAQ document](https://github.com/fomantic/Fomantic-UI/blob/master/FAQ.md).
  
  If your looking for support try joining our [Discord server](https://discord.gg/YChxjJ3) and ask the community. 
  `,
  noPrDescription: (context) => `
  Hi @${context.payload.pull_request.user.login} :wave:
  
  Looks like you haven't added a description to your pull request.
  
  <details>
  <summary>Please edit your pull request and use this templatesummary>
  \`\`\`markdown
  <!--
    Please read the contributing guide before you submit a pull request
    https://github.com/fomantic/Fomantic-UI/blob/master/CONTRIBUTING.md
  -->
  
  ## Description <!-- Required -->
  
  ## Testcase
  <!-- Fork https://jsfiddle.net/31d6y7mn -->
  
  ## Screenshot (when possible)
  ![]()
  
  ## Closes
  #222 #333 #444
  \`\`\`
  </details>
  `,
  jsfiddle: (context) => {
    const commentBody = context.payload.comment.body
    const forUserRegex = new RegExp(/@(.*?)+/)
    const forUser = forUserRegex.exec(commentBody)
    let message = ''

    if (forUser.length > 1) message = `Hi ${forUser[0]} :wave:\n\n`

    message += `
    @${context.payload.comment.user.login} has asked you to create a [JSFiddle](https://jsfiddle.net/31d6y7mn).
    
    We ask users to create a [JSFiddle](https://jsfiddle.net/31d6y7mn) because helps us understand your issue in a reproducible environment so we can provide the best support. 
    
    <details>
    <summary>How to use</summary>
    <ul>
      <li>Open <a href="https://jsfiddle.net/31d6y7mn">JSFiddle</a></li>
      <li>Click <code>Fork</code> at the top</li>
      <li>Add your HTML, CSS and JavaScript and reproduce your issue</li>
      <li>Click <code>Save</code> at the top</li>
      <li>Copy your URL and post it as a comment :tada:</li>
    </details>
    `

    return message
  }
}

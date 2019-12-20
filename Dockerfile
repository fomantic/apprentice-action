FROM node:slim

# Labels for GitHub to read your action
LABEL "com.github.actions.name"="Fomantic Apprentice"
LABEL "com.github.actions.description"="Helps manage issues and pull requests for Fomantic staff"

# Copy the package.json and yar.lock
COPY package.json ./
COPY yarn.lock ./

# Install dependencies
RUN yarn

# Copy the rest of your action's code
COPY . .

# Run action code
ENTRYPOINT ["node", "lib/index.js"]

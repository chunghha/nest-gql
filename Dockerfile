ARG NODE_VERSION=12

FROM keymetrics/pm2:${NODE_VERSION}-alpine

# Create own api folder
RUN mkdir -p /api
WORKDIR /api

# Install the dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm i -g yarn
COPY package.json .
COPY yarn.lock .
RUN yarn

# Build the API
COPY src src/
COPY tsconfig.json .
RUN yarn build

# Expose the API port
EXPOSE 3000

# Run the API with pm2
COPY ecosystem.config.js .
ENTRYPOINT [ "pm2-runtime" ]
CMD [ "start", "ecosystem.config.js" ]

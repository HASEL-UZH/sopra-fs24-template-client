FROM node:20.11.0 as build
# Set container working directory to /app
WORKDIR /app
# Copy npm instructions
COPY package*.json ./
# Set npm cache to a directory the non-root user can access
RUN npm config set cache /app/.npm-cache --global
# Install dependencies with npm ci (exact versions in the lockfile), suppressing warnings
RUN npm ci --loglevel=error
# Copy app (useless stuff is ignored by .dockerignore)
COPY . .
# Build the app
RUN npm run build
# Delete all non-production dependencies to make copy in line 24 more efficient
RUN npm prune --production

# make image smaller by using multi stage build
FROM node:20.11.0-alpine
# Set the env to "production"
ENV NODE_ENV production
# Set npm cache to a directory the non-root user can access
RUN npm config set cache /app/.npm-cache --global
# get non-root user
USER 3301
# Set container working directory to /app
WORKDIR /app
# copy node modules and app
COPY --chown=node:node --from=build /app/node_modules /app/node_modules
COPY --chown=node:node --from=build /app/build build
# Expose the port on which the app will be running (3000 is the default that 'serve' uses)
EXPOSE 3000
# start app
CMD [ "npx", "serve", "-s", "build" ]
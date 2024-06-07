FROM node:18-alpine as node
WORKDIR /app
COPY . .
ARG NODE_BUILD_ENV=prod
RUN npm install --omit=dev
RUN npm run generate-$NODE_BUILD_ENV

FROM php:7.4-apache
WORKDIR /var/www/html
COPY --from=node /app/.output/public ./

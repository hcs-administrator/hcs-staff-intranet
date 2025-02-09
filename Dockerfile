FROM node:22.13.1-alpine
LABEL Maintainer="Jeff Kranenburg <jwkranenburg@icloud.com>"
LABEL Description="HCS Intranet"

WORKDIR /app

COPY ./package.json .

RUN npm i --silent

COPY . .

EXPOSE 80

CMD [ "npm", "run", "host" ]
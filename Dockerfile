# Dockerfile for lead-alerts-node

FROM node:7.9.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/
COPY package.json /usr/src/

RUN npm install

WORKDIR /usr/src/app
COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]

FROM node:20-slim as platform

LABEL maintainer="Dorian Smiley <dsmiley@codestrap.me>"

WORKDIR /usr/app

COPY package.json .
# COPY package-lock.json .
COPY .env .
COPY index.js .
COPY ./commands ./commands

RUN npm install

ENV PORT=8080
ENV DISPLAY=1.0

EXPOSE 80
EXPOSE 443

CMD ["npm", "start"]

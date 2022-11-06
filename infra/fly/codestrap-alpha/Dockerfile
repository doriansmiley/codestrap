FROM node:16-slim as platform

MAINTAINER Dorian Smiley, dsmiley@codestrap.me

WORKDIR /usr/app

COPY package.json .
# COPY package-lock.json .
COPY .env .
COPY index.js .
COPY ./commands ./commands

RUN npm install

FROM install as setup

# allow the pptruser write permissions to the container
RUN chown -R pptruser:pptruser /usr/app
RUN chmod 755 /usr/app

# Run everything after as non-privileged user.
USER pptruser

ENV PORT=80
ENV DISPLAY=1.0
ENV DEBUG='codestrap-codestrap-gpt-bot:*'

EXPOSE 3000
EXPOSE 80
EXPOSE 443

CMD ["npm", "start"]

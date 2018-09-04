FROM node:10-alpine

MAINTAINER Jorgiano Vidal "jorgiano.vidal@ifrn.edu.br"

EXPOSE 3000

WORKDIR /app

ADD . /app

CMD npm run start

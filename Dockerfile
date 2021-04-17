FROM node:14

WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm i
EXPOSE 3000
CMD npm run server

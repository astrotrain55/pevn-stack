FROM node:14

WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm ci
EXPOSE 3000
CMD npm start

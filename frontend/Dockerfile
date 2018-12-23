FROM node:10-alpine

RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY frontend-app/ ./
RUN npm install

CMD npm start

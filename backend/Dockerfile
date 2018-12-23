FROM node:10-alpine
RUN mkdir /nodeapp
WORKDIR /nodeapp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm","start"]

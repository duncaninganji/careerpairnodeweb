FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . . 

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["npm", "start"]
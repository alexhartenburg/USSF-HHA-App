FROM node:alpine

WORKDIR /app

COPY . /app

EXPOSE 3000

RUN npm install

RUN npm run build

CMD ["npm", "start"]
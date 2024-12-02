FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
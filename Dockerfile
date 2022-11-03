FROM node:12

WORKDIR /app
#  hahaha

COPY package*.json /app

RUN npm install

COPY . /app

RUN npm run build

EXPOSE 8081

CMD [ "node", "dist/main" ]


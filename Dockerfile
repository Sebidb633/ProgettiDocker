# api

FROM node:20-slim

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

EXPOSE 4000

CMD [ "node", "app.js" ]

# server db

FROM mysql:8.0

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASe=samt3d

COPY ./SAMT3D-db.sql /docker-entrypoint-initdb.d/
COPY ./SQL-comandi.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

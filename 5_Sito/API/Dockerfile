# Dockerfile API
FROM node:20-slim
RUN apt-get update -y && apt-get install -y openssl libssl-dev
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
RUN npx prisma generate
EXPOSE 4000
CMD [ "node", "app.js" ]
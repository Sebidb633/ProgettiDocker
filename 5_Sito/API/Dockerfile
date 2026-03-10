# Dockerfile API
FROM node:20-slim
RUN aèt-get update && apt-get install -y openssl
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 4000
CMD [ "node", "app.js" ]
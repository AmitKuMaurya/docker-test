FROM node:alpine 
WORKDIR /

COPY . .

COPY package*.json ./
# COPY package-lock.json package-lock.json


RUN npm install 



ENTRYPOINT [ "node", "main.js" ]
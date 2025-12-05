FROM node:22 AS build
WORKDIR /client
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "dist", "-l", "80"]
EXPOSE 80
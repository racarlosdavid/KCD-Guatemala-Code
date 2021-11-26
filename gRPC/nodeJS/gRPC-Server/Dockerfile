FROM node:alpine3.11
WORKDIR /grpc_server
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install
EXPOSE 50051
CMD ["npm","start"]
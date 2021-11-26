FROM node:alpine3.11
WORKDIR /grpc_client_api
COPY package.json .
COPY package-lock.json .
COPY . .
RUN npm install
EXPOSE 3000 50051
CMD ["npm","start"]
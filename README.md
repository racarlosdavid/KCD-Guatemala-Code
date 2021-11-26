# KCD-Guatemala-Code
Codigo para Kubernetes Community Days Guatemala 

## Iniciamos el proyecto gRPC-Client-api

`mkdir gRPC-Client-api`

`cd gRPC-Client-api`

`npm init -y`

`npm install express cors morgan`

`npm install @grpc/grpc-js @grpc/proto-loader async google-protobuf lodash minimist`

## Iniciamos el proyecto gRPC-Server

`mkdir gRPC-Server`

`cd gRPC-Server`

`npm init -y`

`npm install mysql`

`npm install @grpc/grpc-js @grpc/proto-loader async google-protobuf lodash minimist`

## Creacion de las imagenes de los contenedores

`docker build -t "racarlosdavid/grpc_client_api" ./gRPC/nodeJS/gRPC-Client-api`

`docker build -t "racarlosdavid/grpc_server" ./gRPC/nodeJS/gRPC-Server`

`docker build -t "racarlosdavid/kcd_frontend" ./frontend`

## Prueba de los contenedores
`docker run -it -d -p 3000:3000 --name grpc_client_api racarlosdavid/grpc_client_api`

`docker run -it -d -p 50051:50051 --name grpc_server racarlosdavid/grpc_server`

## Subir contenedores a dockerhub
`docker login`

`docker push racarlosdavid/grpc_client_api`

`docker push racarlosdavid/grpc_server`

`docker push "racarlosdavid/kcd_frontend"`

## Creacion del cluster


## Instalacion de Ingress
`helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx`

`helm repo update`

`helm install ingress-nginx ingress-nginx/ingress-nginx`

## Kubernetes

`kubectl apply -f deployment.yml`

`kubectl apply -f ingress.yml`

`kubectl get services`

`kubectl get pods`

`kubectl get pods -o wide`

`kubectl describe pod <NOMBRE DEL POD>`


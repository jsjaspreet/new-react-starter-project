# React Starter 

Web starter project powered by React, Node.js, GraphQL. Webpack2 config for both client and server, Docker for deployment, Postgres backed persistence.

## Prerequisites
- Docker, Docker Compose
- Node v6
- Yarn

## Running the app

```
yarn
npm run dev
```

## Postgres with Docker (for scaffolded graphql endpoints)

```
cd postgres
./build.sh
cd ..
docker-compose up -d
(wait for pg to boot)
./bootstrap.sh
```


## NPM Scripts

Helper Scripts

| script       | effect                                                                                     |
|--------------|--------------------------------------------------------------------------------------------|
| dev        | Build both server and client, HMR activates on client side and Nodemon restarts server on change
| build:prod | Build production assets
| 

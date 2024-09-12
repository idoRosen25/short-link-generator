# Short URL Generator

## Tech
- NextJS
- NestJS
- Docker
- TypeORM
- Jest

## Requirements
* [Docker Compose](https://docs.docker.com/compose/)
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [NodeJS V20+](https://nodejs.org/en) 

## Installation

### Server
From the `server` folder:
1. run `npm install`
2. run `docker compose up db -d` to initialize the postgres DB
3. run `npm run start:dev`

### Client
From the client folder:
1. run `npm install`
2. run ` npm run dev`


### ***Important***
***Make sure both client and server are running or application will crash***

#!/usr/bin/env bash

docker stop nest-gql
docker rm -v nest-gql
docker build . -t nest-gql
docker run --name nest-gql -d -p 3000:3000 nest-gql
docker ps
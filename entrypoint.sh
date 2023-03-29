#!/bin/bash
echo "Starting paano front project ...."

git clone https://github.com/bahrama/paano-frontend.git

cd paano-frontend/

npm i

npm run build

npm run start

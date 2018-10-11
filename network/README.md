## Overview

This is a boilerplate application for the Hyperledger Fabric Network utilizing NodeJS Chaincode

## Prerequisites
- NVM LTS (LTS version of Node and NPM)
- Yarn >= 1.10.0

## Setup
```bash
# Install NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

# Installing LTS node and npm
nvm install --lts

# Use the LTS
nvm use --lts

# Install Yarn
npm install -g yarn
```

## Usage
```bash
# Navigate to chaincode folder
cd network/chaincode

# Install chaincode dependencies
yarn

# Navigate back to the network folder
cd ..

# Start the network
yarn start

```



## NPM Scripts Overview
```bash
# See logs of chaincode docker container
yarn logs

# Start the basic network, install and instantiate the chaincode
yarn start

# Start the basic network, install, instantiate and test the chaincode through CLI (Tests need to be written for each chaincode function)
yarn start:test

# Install chaincode (When the network is already running)
# This can only be done once with chaincode having the same version/name
yarn install

# Upgrade chaincode (When the network is running, chaincode is installed, but you've changed some code)
yarn update

# Testing the chaincode through the CLI (When the network is running and chaincode is deployed. Tests need to be custom written)
yarn test:cli

# Testing the chaincode (Unit tests - network does not need to be running)
yarn test
```


##### TODO 
- Npm cleanup docker containers command
- Move args from array to stringified JSON

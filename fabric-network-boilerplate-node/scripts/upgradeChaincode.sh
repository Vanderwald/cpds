#!/usr/bin/env bash

set -e

versionNumber=$RANDOM # random versioning

# Installing the chaincode --> ../../../ absolute path doesn't work
docker exec -e $arg1 -e $arg2 cli peer chaincode install -l node -n $CHAINCODE_NAME -v $versionNumber -p $CHAINCODE_PATH
printf "\n%40s\n" "$(tput setaf 4)Chaincode $CHAINCODE_NAME version $versionNumber installed $(tput sgr0)"

docker exec -e $arg1 -e $arg2 cli peer chaincode upgrade -l node -n $CHAINCODE_NAME -v $versionNumber -p $CHAINCODE_PATH -C $CHANNEL_NAME -c '{"Args":["init"]}'
printf "\n%40s\n" "$(tput setaf 4)Chaincode $CHAINCODE_NAME version $versionNumber upgraded $(tput sgr0)"

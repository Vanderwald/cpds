#!/usr/bin/env bash

set -e

versionNumber=$RANDOM # random versioning

# Installing the chaincode --> ../../../ absolute path doesn't work
docker exec -e $arg1 -e $arg2 cli peer chaincode install -l node -n $CHAINCODE_NAME -v $versionNumber -p $CHAINCODE_PATH

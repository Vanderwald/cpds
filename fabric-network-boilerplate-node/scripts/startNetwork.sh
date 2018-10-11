#!/usr/bin/env bash

# Exit on first error
set -e

# Local vars
versionNumber=$RANDOM # random versioning
networkDir="../__Network__" # dir of basic network


# See if basic network is present
if [ -d "$networkDir" ]; then
  # launch network; create channel and join peer to channel
  cd $networkDir
  ./start.sh
else
  printf "%40s\n" "$(tput setaf 1)Basic network was not found. ($(dirname $(dirname "basename")))$(tput sgr0)"
  exit 0
fi


# Now launch the CLI container in order to install, instantiate chaincode
# and prime the ledger
docker-compose -f ./docker-compose.yml up -d cli


# Installing the chaincode --> ../../../ because absolute path doesn't work
docker exec -e $arg1 -e $arg2 cli peer chaincode install -l node -n $CHAINCODE_NAME -v $versionNumber -p $CHAINCODE_PATH
printf "\n%40s\n" "$(tput setaf 4)Chaincode $CHAINCODE_NAME version $versionNumber installed $(tput sgr0)"

# Instantiate the chaincode (Calling the Init function)
docker exec -e $arg1 -e $arg2 cli peer chaincode instantiate -l node -n $CHAINCODE_NAME -v $versionNumber -C $CHANNEL_NAME -c '{"Args":[""]}' -o $ORDERER_ADDR
printf "\n%40s\n" "$(tput setaf 4)Chaincode $CHAINCODE_NAME version $versionNumber initiated$(tput sgr0)"
sleep 6


# Invoking instantiate function
# docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"watchmovement_create","Args":[""]}'
# sleep 2




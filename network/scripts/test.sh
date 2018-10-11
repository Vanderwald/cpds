#!/usr/bin/env bash

# Exit on first error
set -e


# Testing commands
docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"initLedger","Args":[""]}'
printf "\n%40s\n" "$(tput setaf 4) Initialization of ledger executed $(tput sgr0)"
sleep 2

# docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"watchmovement_create","Args":["watchmovement-1", "2015-03-12","Maurice","Rolex","Submarine"]}'
# printf "\n%40s\n" "$(tput setaf 4) Create action executed $(tput sgr0)"
# sleep 2

# docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"updateAcknowledgement","Args":["erkenning-002","002"]}'
# printf "\n%40s\n" "$(tput setaf 4) Update action executed $(tput sgr0)"
# sleep 2

# docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"stopAcknowledgement","Args":["erkenning-002"]}'
# printf "\n%40s\n" "$(tput setaf 4) Update (Stop) action executed $(tput sgr0)"
# sleep 2

# docker exec -e $arg1 -e $arg2  cli peer chaincode invoke -C $CHANNEL_NAME -n $CHAINCODE_NAME -c '{"function":"queryAcknowledgement","Args":["erkenning-002"]}'
# printf "\n%40s\n" "$(tput setaf 4) QueryOne action executed $(tput sgr0)"

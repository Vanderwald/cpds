#!/usr/bin/env bash

starttime=$(date +%s) # timer

# Exit on first error
set -e


# don't rewrite paths for Windows Git Bash users

export MSYS_NO_PATHCONV=1
printf "\n%40s\n" "$(tput setaf 4) MSYS_NO_PATHCONV: $MSYS_NO_PATHCONV $(tput sgr0)"


# Global config variables
export arg1="CORE_PEER_LOCALMSPID=Org1MSP"
printf "\n%40s\n" "$(tput setaf 4) Exported default arg1 for container: $arg1 $(tput sgr0)"


export arg2="CORE_PEER_MSPCONFIGPATH=/opt/gopath/src/github.com/hyperledger/fabric/peer/crypto/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp"
printf "\n%40s\n" "$(tput setaf 4) Exported default arg2 for container: $arg2 $(tput sgr0)"


export ORDERER_ADDR="orderer.example.com:7050"
printf "\n%40s\n" "$(tput setaf 4) Exported orderer address: $ORDERER_ADDR $(tput sgr0)"


export CHANNEL_NAME="mychannel"
printf "\n%40s\n" "$(tput setaf 4) Exported channel name: $CHANNEL_NAME $(tput sgr0)"


export CHAINCODE_NAME="MyChainCode"
printf "\n%40s\n" "$(tput setaf 4) Exported chaincode name: $CHAINCODE_NAME $(tput sgr0)"


export CHAINCODE_PATH="../../../" # Dir of chaincode location WITHIN the docker container
printf "\n%40s\n" "$(tput setaf 4) Exported chaincode path (in docker container): $CHAINCODE_PATH $(tput sgr0)"


if [ -z "$1" ]; then                    # No arguments --> Only start network
    printf "\n%40s\n" "$(tput setaf 4) Starting network $(tput sgr0)"
    /bin/bash ./startNetwork.sh
elif [ "$1" == "startAndTest" ]; then   # startAndTest argument --> start network + execute automated tests
    printf "\n%40s\n" "$(tput setaf 4) Starting network and automated tests $(tput sgr0)"
    /bin/bash ./startNetwork.sh
    /bin/bash ./test.sh
elif [ "$1" == "install" ]; then        # install argument --> install chaincode
    printf "\n%40s\n" "$(tput setaf 4) Installing chaincode $(tput sgr0)"
    /bin/bash ./installChaincode.sh
elif [ "$1" == "upgrade" ]; then        # upgrade argument --> Upgrade chaincode
    printf "\n%40s\n" "$(tput setaf 4) Upgrading chaincode $(tput sgr0)"
    /bin/bash ./upgradeChaincode.sh
elif [ "$1" == "test" ]; then           # test argument --> Test chaincode
    printf "\n%40s\n" "$(tput setaf 4) Testing chaincode $(tput sgr0)"
    /bin/bash ./test.sh
fi


# Print duration of the action
printf "\n%40s\n" "$(tput setaf 2)Total setup execution time : $(($(date +%s) - starttime)) seconds.$(tput sgr0)"

/* eslint-disable no-param-reassign */

import Schipment from "../models/Shipment.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists, queryById } from "../Services/QueryService";
import { fromState } from "../utils/Parser";

async function CreateSchipment(stub, { key, value }) {
  const { startingPort, endingPort, cargo, ship } = value;

  console.log(key);
  console.log(value);

  let keyExists = await exists(stub, startingPort);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(startingPort));
  }

  keyExists = await exists(stub, endingPort);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(endingPort));
  }

  keyExists = await exists(stub, cargo);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(cargo));
  }

  keyExists = await exists(stub, ship);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(ship));
  }

  console.log("done checking");

  const port1Value = await queryById(stub, startingPort);
  const port2Value = await queryById(stub, endingPort);
  const cargoValue = await queryById(stub, cargo);
  const schipValue = await queryById(stub, ship);

  const port1 = fromState(port1Value);
  const port2 = fromState(port2Value);
  const cargoObject = fromState(cargoValue);
  const schipObject = fromState(schipValue);

  console.log("Done parsing");

  value.startingPort = port1;
  value.endingPort = port2;
  value.cargo = cargoObject;
  value.schip = schipObject;

  const schipment = new Schipment(key, value);

  console.log("created new shipment");

  // Check if key already exists
  keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, schipment.getAsBytes());
}

export default CreateSchipment;

/* eslint-disable no-param-reassign */

import Schipment from "../models/Shipment.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists, queryById } from "../Services/QueryService";
import { fromState } from "../utils/Parser";

async function CreateSchipment(stub, { key, value }) {
  const { startingPort, endingPort, cargo, schip } = value;

  let keyExists = await exists(stub, startingPort);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(key));
  }

  keyExists = await exists(stub, endingPort);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(key));
  }

  keyExists = await exists(stub, cargo);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(key));
  }

  keyExists = await exists(stub, schip);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(key));
  }

  const port1Value = await queryById(startingPort);
  const port2Value = await queryById(endingPort);
  const cargoValue = await queryById(cargo);
  const schipValue = await queryById(schip);

  const port1 = fromState(port1Value);
  const port2 = fromState(port2Value);
  const cargoObject = fromState(cargoValue);
  const schipObject = fromState(schipValue);

  value.startingPort = port1;
  value.endingPort = port2;
  value.cargo = cargoObject;
  value.schip = schipObject;

  const schipment = new Schipment(key, value);

  // Check if key already exists
  keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, schipment.getAsBytes());
}

export default CreateSchipment;

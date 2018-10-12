/* eslint-disable no-param-reassign */

import Document from "../models/Document.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists, queryById } from "../Services/QueryService";
import { fromState } from "../utils/Parser";

async function CreateDocument(stub, { key, value }) {
  const { shipment } = value;

  let keyExists = await exists(stub, shipment);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(shipment));
  }

  const shipmentValue = await queryById(stub, shipment);

  const shipmentObject = fromState(shipmentValue);

  value.shipment = shipmentObject;

  const document = new Document(key, value);

  // Check if key already exists
  keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, document.getAsBytes());
}

export default CreateDocument;

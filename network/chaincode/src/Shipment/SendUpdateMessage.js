/* eslint-disable no-param-reassign */

import Message from "../models/Message.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists, queryById } from "../Services/QueryService";
import { fromState } from "../utils/Parser";

async function SendUpdateMessage(stub, { key, value }) {
  const { from } = value;

  let keyExists = await exists(stub, from);
  if (!keyExists) {
    throw new Error(ErrMsg.DoesntExist(from));
  }

  const sendingParty = await queryById(stub, from);

  const sendingPartyObject = fromState(sendingParty);

  value.from = sendingPartyObject;

  const message = new Message(key, value);

  // Check if key already exists
  keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, message.getAsBytes());
}

export default SendUpdateMessage;

import Schip from "../models/Schip.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists } from "../Services/QueryService";

async function CreateSchip(stub, { key, value }) {
  const schip = new Schip(key, value);

  console.log(value);

  // Check if key already exists
  const keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, schip.getAsBytes());
}

export default CreateSchip;

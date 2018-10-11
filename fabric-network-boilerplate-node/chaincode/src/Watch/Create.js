import Watch from "../models/Watch.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists } from "../Services/QueryService";

async function Create(stub, { key, value }) {
  const watch = new Watch(key, value);

  // Check if key already exists
  const keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, watch.getAsBytes());
}

export default Create;

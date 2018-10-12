import Port from "../models/Port.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists } from "../Services/QueryService";

async function CreatePort(stub, { key, value }) {
  const port = new Port(key, value);

  // Check if key already exists
  const keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, port.getAsBytes());
}

export default CreatePort;

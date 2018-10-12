import Cargo from "../models/Cargo.model";
import * as ErrMsg from "../utils/ErrorMessages";
import { exists } from "../Services/QueryService";

async function CreateCargo(stub, { key, value }) {
  const cargo = new Cargo(key, value);

  // Check if key already exists
  const keyExists = await exists(stub, key);
  if (keyExists) {
    throw new Error(ErrMsg.AlreadyExists(key));
  }

  return stub.putState(key, cargo.getAsBytes());
}

export default CreateCargo;

import Watch from "../models/Watch.model";
import { queryById } from "../Services/QueryService";
import { deriveKeyValue } from "../utils/Parser";

async function QueryById(stub, { key }) {
  const queryResult = await queryById(stub, key);
  const { value } = deriveKeyValue(queryResult);
  const watch = new Watch(key, value);

  return watch.getAsBytes();
}

export default QueryById;

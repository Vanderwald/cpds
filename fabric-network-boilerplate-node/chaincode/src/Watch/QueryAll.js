import runIterator from "../utils/iterator";

async function QueryAll(stub, args) {
  const docToQuery = args.shift();

  const startKey = `${docToQuery}-0`;
  const endKey = `${docToQuery}-999999999`;

  const iterator = await stub.getStateByRange(startKey, endKey);

  return runIterator(iterator);
}

export default QueryAll;

import * as ErrMsg from "../utils/ErrorMessages";
import { toState } from "../utils/Parser";
import runThroughIterator from "../utils/iterator";

const richQueryStringBuilder = keyValuePairs => {
  JSON.stringify({
    selector: keyValuePairs
  });
};

export const exists = async (stub, key) => {
  const objectAsBytes = await stub.getState(key); // get the object from chaincode state
  return !(!objectAsBytes || objectAsBytes.toString().length <= 0);
};

export const queryById = async (stub, key) => {
  const objectAsBytes = await stub.getState(key);

  if (!objectAsBytes || objectAsBytes.toString().length <= 0) {
    throw new Error(ErrMsg.DoesntExist(key));
  }

  return objectAsBytes;
};

export const richQuery = async (stub, queryString) => {
  const iterator = await stub.getQueryResult(queryString);

  return toState(await runThroughIterator(iterator));
};

export const queryAuditTrail = async (stub, key) => {
  const iterator = await stub.getHistoryForKey(key);

  return toState(await runThroughIterator(iterator));
};

export const queryByOndernemingsNummer = async (stub, ondernemingsNummer) => {
  const queryString = richQueryStringBuilder({
    identificatie: ondernemingsNummer
  });
  return richQuery(stub, queryString);
};

export const queryByStatus = async (stub, status) => {
  const queryString = richQueryStringBuilder({ toelatingsFase: status });
  return richQuery(stub, queryString);
};

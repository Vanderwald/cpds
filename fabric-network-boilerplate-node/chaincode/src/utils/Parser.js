import { isArray, has } from "lodash";

import * as ErrMsg from "./ErrorMessages";

export const toState = myObj => {
  try {
    return Buffer.from(JSON.stringify(myObj));
  } catch (e) {
    throw new Error(ErrMsg.FailedToParse(e));
  }
};

export const fromState = myObjAsBytes => {
  try {
    return JSON.parse(myObjAsBytes.toString());
  } catch (e) {
    throw new Error(ErrMsg.FailedToParse(myObjAsBytes));
  }
};

export const toJSON = myObj => {
  try {
    return JSON.parse(myObj);
  } catch (e) {
    throw new Error(ErrMsg.FailedToParse(e));
  }
};

export const deriveKeyValue = args => {
  const value = isArray(args) ? toJSON(args[0]) : fromState(args);

  if (!has(value, "id")) {
    throw new Error(ErrMsg.InvalidArguments("id"));
  }

  return {
    key: value.id,
    value
  };
};

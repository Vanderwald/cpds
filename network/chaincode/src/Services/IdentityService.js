import { ATTRIBUTES } from "../utils/Enums";

let identity;

export const setIdentity = clientIdentity => {
  identity = clientIdentity;
};

export const getIdentity = () => identity;

export const getIdentityAttribute = attrName =>
  identity.getAttributeValue(attrName);

export const getRole = () => getIdentityAttribute(ATTRIBUTES.Role);

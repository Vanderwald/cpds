import { ROLES } from "./Enums";

export default {
  publishDecision: [ROLES.PUBLISHER],
  signDecision: [ROLES.SIGNER],
  validateDecision: [ROLES.PUBLISHER, ROLES.SIGNER],
  queryAll: [ROLES.PUBLISHER, ROLES.SIGNER],
  queryByID: [ROLES.PUBLISHER, ROLES.SIGNER]
};

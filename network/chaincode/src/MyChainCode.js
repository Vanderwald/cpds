import "@babel/polyfill";

import shim from "fabric-shim";

// Invocations/Queries
import createPort from "./Schipment/CreatePort";
import createCargo from "./Schipment/CreateCargo";
import createShip from "./Schipment/CreateShip";
import createShipment from "./Schipment/CreateShipment";
import init from "./utils/InitLedger";

// Helpers
import * as ErrMsg from "./utils/ErrorMessages";
import { deriveKeyValue } from "./utils/Parser";
import { queryAuditTrail } from "./Services/QueryService";

const Chaincode = class {
  async Invoke(stub) {
    const { fcn, params } = stub.getFunctionAndParameters();

    const method = this[fcn];
    if (!method) {
      throw new Error(ErrMsg.MethodNotFound(fcn));
    }

    try {
      const { key, value } = deriveKeyValue(params);
      const payload = await method(stub, { key, value });
      return shim.success(payload);
    } catch (err) {
      return shim.error(err);
    }
  }

  async Init() {
    this.init = () => init();
    this.createPort = createPort;
    this.createCargo = createCargo;
    this.createShip = createShip;
    this.createShipment = createShipment;
    this.history = key => queryAuditTrail(key);

    return shim.success();
  }
};

shim.start(new Chaincode());

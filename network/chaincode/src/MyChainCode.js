import "@babel/polyfill";

import shim from "fabric-shim";

// Invocations/Queries
import createPort from "./Schipment/CreatePort";
import createCargo from "./Schipment/CreateCargo";
import createSchip from "./Schipment/CreateSchip";
import createSchipment from "./Schipment/CreateSchipment";

// Helpers
import * as ErrMsg from "./utils/ErrorMessages";
import { deriveKeyValue } from "./utils/Parser";

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
    // Bind other functions

    this.createPort = createPort;
    this.createCargo = createCargo;
    this.createSchip = createSchip;
    this.createSchipment = createSchipment;

    return shim.success();
  }
};

shim.start(new Chaincode());

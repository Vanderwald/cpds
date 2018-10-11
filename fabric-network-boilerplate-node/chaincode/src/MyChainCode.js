import "@babel/polyfill";

import shim from "fabric-shim";

// Invocations/Queries
import recordWatch from "./Watch/Create";
import queryAllWatch from "./Watch/QueryAll";
import queryById from "./Watch/Query";

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
    this.recordWatch = recordWatch;
    this.queryWatchById = queryById;
    this.queryAllWatches = queryAllWatch;

    return shim.success();
  }
};

shim.start(new Chaincode());

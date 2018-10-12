import Cargo from "../models/Cargo.model";
import Ship from "../models/Ship.model";
import { CARGO, PORT, SHIP, SHIPMENT } from "./DocTypes";
import Port from "../models/Port.model";
import Shipment from "../models/Shipment.model";

async function init(stub) {
  const cargo = new Cargo("cargo-1", {
    docType: CARGO,
    id: "cargo-1",
    type: "MyType",
    weight: "100",
    containerCount: "1"
  });

  const cargoUpdate = new Cargo("cargo-1", {
    docType: CARGO,
    id: "cargo-1",
    type: "MyType",
    weight: "101",
    containerCount: "1"
  });

  const port = new Port("port-1", {
    docType: PORT,
    id: "port-1",
    city: "NotMurica",
    country: "MURICA",
    name: "myName"
  });

  const ship = new Ship("ship-1", {
    docType: SHIP,
    id: "ship-1",
    modelNumber: "1234",
    owner: "me"
  });

  const shipment = new Shipment("shipment-1", {
    docType: SHIPMENT,
    id: "shipment-123",
    startingPort: "Barcelona",
    endingPort: "Amsterdam",
    startingTimestamp: "1234",
    endingTimestamp: "1235",
    ship: "ship-1",
    cargo: "cargo-1"
  });

  await stub.putState(cargo.getKey(), cargo.getAsBytes());
  await stub.putState(port.getKey(), port.getAsBytes());
  await stub.putState(ship.getKey(), ship.getAsBytes());
  await stub.putState(shipment.getKey(), shipment.getAsBytes());

  await stub.putState(cargoUpdate.getKey(), cargoUpdate.getAsBytes());

  return true;
}

export default init;

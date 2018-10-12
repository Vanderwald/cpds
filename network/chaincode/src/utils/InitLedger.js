import Cargo from "../models/Cargo.model";
import Ship from "../models/Ship.model";
import { CARGO, PORT, SHIP, SHIPMENT } from "./DocTypes";
import Party from "../models/Party.model";
import Shipment from "../models/Shipment.model";

async function init(stub) {
  const cargo = new Cargo("CARGO-1", {
    docType: CARGO,
    id: "CARGO-1",
    type: "MyType",
    weight: "100",
    containerCount: "1"
  });

  const cargoUpdate = new Cargo("CARGO-1", {
    docType: CARGO,
    id: "CARGO-1",
    type: "MyType",
    weight: "101",
    containerCount: "1"
  });

  const port = new Party("PORT-1", {
    docType: PORT,
    id: "PORT-1",
    city: "NotMurica",
    country: "MURICA",
    name: "myName"
  });

  const port2 = new Party("PORT-2", {
    docType: PORT,
    id: "PORT-2",
    city: "NotMurica",
    country: "MURICA",
    name: "myName"
  });

  const ship = new Ship("SHIP-1", {
    docType: SHIP,
    id: "SHIP-1",
    modelNumber: "1234",
    owner: "me"
  });

  const shipment = new Shipment("SHIPMENT-1", {
    docType: SHIPMENT,
    id: "SHIPMENT-123",
    startingPort: "Barcelona",
    endingPort: "Amsterdam",
    startingTimestamp: "1234",
    endingTimestamp: "1235",
    ship: "SHIP-1",
    cargo: "CARGO-1"
  });

  await stub.putState(cargo.getKey(), cargo.getAsBytes());
  await stub.putState(port.getKey(), port.getAsBytes());
  await stub.putState(port2.getKey(), port2.getAsBytes());
  await stub.putState(ship.getKey(), ship.getAsBytes());
  await stub.putState(shipment.getKey(), shipment.getAsBytes());

  await stub.putState(cargoUpdate.getKey(), cargoUpdate.getAsBytes());

  return true;
}

export default init;

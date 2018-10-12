import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Shipment {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  validate = async (objectToValidate, schema) => {
    await schema.validate(objectToValidate).catch(err => {
      throw new Error(err.errors);
    });
  };

  getKey = () => this.key;

  getAsJSON = () => this.value;

  getAsBytes = () => toState(this.value);
}

/*
const schema = yup.object().shape({
    docType: yup.string().matches(/(CONSENT_TYPE)/),
    name: yup.string().required(),
    description: yup.string().required(),
    disclaimer: yup.string().required(),
    consentIDs: yup.string().ensure()
  });
  */

/*

{
	"id": "SHIPMENT-1",
	"docType": "SHIPMENT",
    "startingPort": "PORT-1",
    "endingPort": "PORT-3",
    "startingTimestamp": "2018-10-12/11:50:00",
    "endingTimestamp": "2018-10-18/11:50:00",
    "ship": "SHIP-1",
    "cargo": "CARGO-1"
}
  */

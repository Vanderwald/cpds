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
	"id": "SHIP-2",
	"docType": "SHIP",
    "modelNumber": "PU-5635",
    "owner": "Marco",
    "name": "AVE MARIA",
    "callSign": "CQLV",
    "flag": "PL",
    "grossWeight": "5955",
    "length": "118",
    "breadth": "18",
    "type": "CHTAN",
    "MMSInumber": "25580"
}
  */

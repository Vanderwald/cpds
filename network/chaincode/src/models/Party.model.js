import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Party {
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
	"id": "SENSOR-1",
	"docType": "SENSOR",
    "city": "Sea",
    "country": "Sea",
    "name": "SENSOR of Sea",
    "company": "Sensable",
    "VAT-number": "NL1234.56.789.B01"
}
  */

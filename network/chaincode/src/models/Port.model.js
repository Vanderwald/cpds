import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Port {
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
  value = {
      docType: DocTypes.PORT
    this.key = key;
    this.city = city;
    this.country = country;
    this.name = name;
  }
  */

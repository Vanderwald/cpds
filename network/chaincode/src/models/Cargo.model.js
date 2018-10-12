import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Schipment {
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
    docType: yup.string().matches(/(CARGO)/),
    id: yup.string().required(),
    type: yup.string().required(),
    weight: yup.string().optional(),
    containerCount: yup.Integer().required()
  });
  */

/*
  value = {
    docType: DocTypes.CARGO
    this.key = key;
    this.type = type;
    this.weight = weight;
    this.containerCount = containerCount;
  }
  */

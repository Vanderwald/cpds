import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Document {
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
{
	"id": "DOCUMENT-1",
	"docType": "DOCUMENT",
    "type": "AANGIFTE",
    "createdAt": "2018-10-12/11:50:00",
    "shipment": "SHIPMENT-1",
    "stayInfo": {
    	"staynumber": "3456",
        "stayBegin": "2018-10-14/11:50:00",
        "stayEnd": "2018-10-14/16:50:00",
        "previeusPort": "PORT-1",
        "nextPort": "PORT-2"
    }
}
  */

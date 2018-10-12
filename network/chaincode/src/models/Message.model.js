import { toState } from "../utils/Parser";

// const DocTypes = require("../utils/DocTypes");

export default class Message {
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
	"id": "MESSAGE-3",
	"docType": "MESSAGE",
    "createdAt":"2018-10-12/13:50:00",
    "from": "CARRIER-1",
    "type": "status-change",
    "content": "azopieruazpeoiruazoieurazoieurzaopieurazpioeurpazoieurpaozieru",
    "status": "unloading containers",
    "carrierOnly": {
        "estimatedETA": "-1d",
        "document": "DOCUMENT-1"
    }
}
  */

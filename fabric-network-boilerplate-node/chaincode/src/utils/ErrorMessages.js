export const InvalidNumberOfArgs = data =>
  `This function requires ${data} amount of arguments, including the key.`;
export const AlreadyExists = data =>
  `The object with key: ${data}, already exists.`;
export const DoesntExist = data =>
  `The object with key: ${data}, doesn't exists.`;
export const FailedToParse = data => `Failed to parse: ${data}`;
export const InvalidPermission = () =>
  "User doesn't have the right permissions to use this function";
export const AlreadySigned = () => "User has already signed decision";
export const KeyNotFound = data => `Object with key ${data} not found`;
export const InvalidDate = data => `invalid data: ${data}`;
export const InvalidArguments = data => `Argument invalid. ${data} required`;

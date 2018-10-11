import { FORMAT } from "./settings";
import { toJSON, toState } from "./Parser";

const iteratorExecutor = async iterator => {
  const allResults = [];
  let result;

  if (iterator.response.results.length === 0) {
    throw new Error("No results found for query");
  }

  do {
    result = await iterator.next(); //eslint-disable-line
    const valueString = result.value.value.toString(FORMAT);

    if (result.value && valueString) {
      const jsonRes = toJSON(valueString);

      allResults.push({
        key: result.value.Key,
        ...jsonRes
      });
    }
  } while (!result.done);

  await iterator.close();
  return toState(allResults);
};

export default iteratorExecutor;

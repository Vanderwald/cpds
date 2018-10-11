import sinon from "sinon";

// Import function to test
import create from "../../Watch/Create";
import stub from "../../__mocks__/stub";
import * as ErrMsg from "../../utils/ErrorMessages";

const myStub = sinon.createStubInstance(stub);

describe("Watch - Create", () => {
  beforeEach(() => {
    myStub.getState.reset();
    myStub.putState.reset();
  });

  it("Should create an object - should NOT exist", async () => {
    // Setup
    const object = {
      id: "hello-1",
      rest: "restparams"
    };
    myStub.getState = sinon.stub().returns(null); // exists results in false
    myStub.putState = sinon.stub().returns(object);
    myStub.pepe = sinon.stub().returns(2);

    // Execution
    const call = create(myStub, { key: object.id, value: object });

    // Assertions
    expect(call).resolves.toBe(object);
  });

  it("Should create an object - should exist", async () => {
    // Setup
    const object = {
      id: "hello-1",
      rest: "restparams"
    };
    myStub.getState = sinon.stub().returns(object); // exists results in true
    myStub.putState = sinon.stub().returns(object);
    myStub.pepe = sinon.stub().returns(2);

    // Execution
    const call = create(myStub, { key: object.id, value: object });

    // Assertions
    expect(call).rejects.toThrowError(ErrMsg.AlreadyExists(object.id));
    expect(call).rejects.not.toThrowError(ErrMsg.AlreadyExists());
  });
});

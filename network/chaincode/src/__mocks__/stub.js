/**
 * The ChaincodeStub is implemented by the <code>fabric-shim</code>
 * library and passed to the {@link ChaincodeInterface} calls by the Hyperledger Fabric platform.
 * The stub encapsulates the APIs between the chaincode implementation and the Fabric peer
 */
class ChaincodeStub {
  constructor(middleware) {
    this.middleware = middleware;
  }

  /**
   * Returns the arguments as array of strings from the chaincode invocation request.
   * Equivalent to [getStringArgs()]{@link ChaincodeStub#getStringArgs}
   * @return {string[]}
   */
  getArgs() {
    return this.middleware("getArgs");
  }

  /**
   * Returns the arguments as array of strings from the chaincode invocation request
   * @return {string[]}
   */
  getStringArgs() {
    return this.middleware("getStringArgs");
  }

  /**
   * @typedef FunctionAndParameters
   * @property {string} fcn The function name, which by chaincode programming convention
   * is the first argument in the array of arguments
   * @property {string[]} params The rest of the arguments, as array of strings
   */

  /**
   * Returns an object containing the chaincode function name to invoke, and the array
   * of arguments to pass to the target function
   * @return {FunctionAndParameters}
   */
  getFunctionAndParameters() {
    return this.middleware("getFunctionAndParameters");
  }

  /**
   * Returns the transaction ID for the current chaincode invocation request. The transaction
   * ID uniquely identifies the transaction within the scope of the channel.
   */
  getTxID() {
    return this.middleware("getTxID");
  }

  /**
   * Returns the channel ID for the proposal for chaincode to process.
   * This would be the 'channel_id' of the transaction proposal (see ChannelHeader
   * in protos/common/common.proto) except where the chaincode is calling another on
   * a different channel.
   */
  getChannelID() {
    return this.middleware("getChannelID");
  }

  /**
   * This object contains the essential identity information of the chaincode invocation's submitter,
   * including its organizational affiliation (mspid) and certificate (id_bytes)
   * @typedef {Object} ProposalCreator
   * @property {string} mspid The unique ID of the Membership Service Provider instance that is associated
   * to the identity's organization and is able to perform digital signing and signature verification
   */

  /**
   * Returns the identity object of the chaincode invocation's submitter
   * @return {ProposalCreator}
   */
  getCreator() {
    return this.middleware("getCreator");
  }

  /**
   * Returns the transient map that can be used by the chaincode but not
   * saved in the ledger, such as cryptographic information for encryption and decryption
   * @return {Map<string:Buffer>}
   */
  getTransient() {
    return this.middleware("getTransient");
  }

  /**
   * The SignedProposal object represents the request object sent by the client application
   * to the chaincode.
   * @typedef {Object} SignedProposal
   * @property {Buffer} signature The signature over the proposal. This signature is to be verified against
   * the {@link ProposalCreator} returned by <code>getCreator()</code>. The signature will have already been
   * verified by the peer before the invocation request reaches the chaincode.
   * @property {Proposal} proposal The object containing the chaincode invocation request and metadata about the request
   */

  /**
   * The essential content of the chaincode invocation request
   * @typedef {Object} Proposal
   * @property {Header} header The header object contains metadata describing key aspects of the invocation
   * request such as target channel, transaction ID, and submitter identity etc.
   * @property {ChaincodeProposalPayload} payload The payload object contains actual content of the invocation request
   */

  /**
   * @typedef {Object} Header
   * @property {ChannelHeader} channel_header Channel header identifies the destination channel of the invocation
   * request and the type of request etc.
   * @property {SignatureHeader} signature_header Signature header has replay prevention and message authentication features
   */

  /**
   * Channel header identifies the destination channel of the invocation
   * request and the type of request etc.
   * @typedef {Object} ChannelHeader
   * @property {number} type Any of the following:
   * <ul>
   * <li>MESSAGE = 0;                   // Used for messages which are signed but opaque
   * <li>CONFIG = 1;                    // Used for messages which express the channel config
   * <li>CONFIG_UPDATE = 2;             // Used for transactions which update the channel config
   * <li>ENDORSER_TRANSACTION = 3;      // Used by the SDK to submit endorser based transactions
   * <li>ORDERER_TRANSACTION = 4;       // Used internally by the orderer for management
   * <li>DELIVER_SEEK_INFO = 5;         // Used as the type for Envelope messages submitted to instruct the Deliver API to seek
   * <li>CHAINCODE_PACKAGE = 6;         // Used for packaging chaincode artifacts for install
   * </ul>
   * @property {number} version
   * @property {google.protobuf.Timestamp} timestamp The local time when the message was created by the submitter
   * @property {string} channel_id Identifier of the channel that this message bound for
   * @property {string} tx_id Unique identifier used to track the transaction throughout the proposal endorsement, ordering,
   * validation and committing to the ledger
   * @property {number} epoch
   */

  /**
   * @typedef {Object} SignatureHeader
   * @property {ProposalCreator} creator The submitter of the chaincode invocation request
   * @property {Buffer} nonce Arbitrary number that may only be used once. Can be used to detect replay attacks.
   */

  /**
   * @typedef {Object} ChaincodeProposalPayload
   * @property {Buffer} input Input contains the arguments for this invocation. If this invocation
   * deploys a new chaincode, ESCC/VSCC are part of this field. This is usually a marshaled ChaincodeInvocationSpec
   * @property {Map<string:Buffer>} transientMap TransientMap contains data (e.g. cryptographic material) that might be used
   * to implement some form of application-level confidentiality. The contents of this field are supposed to always
   * be omitted from the transaction and excluded from the ledger.
   */

  /**
   * Returns a fully decoded object of the signed transaction proposal
   * @return {SignedProposal}
   */
  getSignedProposal() {
    return this.middleware("getSignedProposal");
  }

  /**
   * Returns the timestamp when the transaction was created. This
   * is taken from the transaction {@link ChannelHeader}, therefore it will indicate the
   * client's timestamp, and will have the same value across all endorsers.
   */
  getTxTimestamp() {
    return this.middleware("getTxTimestamp");
  }

  /**
   * Returns a HEX-encoded string of SHA256 hash of the transaction's nonce, creator and epoch concatenated, as a
   * unique representation of the specific transaction. This value can be used to prevent replay attacks in chaincodes
   * that need to authenticate an identity independent of the transaction's submitter. In a chaincode proposal, the
   * submitter will have been authenticated by the peer such that the identity returned by
   * [stub.getCreator()]{@link ChaincodeStub#getCreator} can be trusted. But in some scenarios, the chaincode needs
   * to authenticate an identity independent of the proposal submitter.<br><br>
   *
   * For example, Alice is the administrator who installs and instantiates a chaincode that manages assets. During
   * instantiate Alice assigns the initial owner of the asset to Bob. The chaincode has a function called <code>
   * transfer()</code> that moves the asset to another identity by changing the asset's "owner" property to the
   * identity receiving the asset. Naturally only Bob, the current owner, is supposed to be able to call that function.
   * While the chaincode can rely on stub.getCreator() to check the submitter's identity and compare that with the
   * current owner, sometimes it's not always possible for the asset owner itself to submit the transaction. Let's suppose
   * Bob hires a broker agency to handle his trades. The agency participates in the blockchain network and carry out trades
   * on behalf of Bob. The chaincode must have a way to authenticate the transaction to ensure it has Bob's authorization
   * to do the asset transfer. This can be achieved by asking Bob to sign the message, so that the chaincode can use
   * Bob's certificate, which was obtained during the chaincode instantiate, to verify the signature and thus ensure
   * the trade was authorized by Bob.<br><br>
   *
   * Now, to prevent Bob's signature from being re-used in a malicious attack, we want to ensure the signature is unique.
   * This is where the <code>binding</code> concept comes in. As explained above, the binding string uniquely represents
   * the transaction where the trade proposal and Bob's authorization is submitted in. As long as Bob's signature is over
   * the proposal payload and the binding string concatenated together, namely <code>sigma=Sign(BobSigningKey, tx.Payload||tx.Binding)</code>,
   * it's guaranteed to be unique and can not be re-used in a different transaction for exploitation.<br><br>
   *
   * @return {string} A HEX-encoded string of SHA256 hash of the transaction's nonce, creator and epoch concatenated
   */
  getBinding() {
    return this.middleware("getBinding");
  }

  /**
   * Retrieves the current value of the state variable <code>key</code>
   * @async
   * @param {string} key State variable key to retrieve from the state store
   * @return {Promise} Promise for the current value of the state variable
   */
  async getState(key) {
    return this.middleware("getState", { key });
  }

  /**
   * Writes the state variable <code>key</code> of value <code>value</code>
   * to the state store. If the variable already exists, the value will be
   * overwritten.
   * @async
   * @param {string} key State variable key to set the value for
   * @param {byte[]} value State variable value
   * @return {Promise} Promise will be resolved when the peer has successfully handled the state update request
   * or rejected if any errors
   */
  async putState(key, value) {
    return this.middleware("putState", { key, value });
  }

  /**
   * Deletes the state variable <code>key</code> from the state store.
   * @async
   * @param {string} key State variable key to delete from the state store
   * @return {Promise} Promise will be resolved when the peer has successfully handled the state delete request
   * or rejected if any errors
   */
  async deleteState(key) {
    return this.middleware("deleteState", { key });
  }

  /**
   * Returns a range iterator over a set of keys in the
   * ledger. The iterator can be used to iterate over all keys
   * between the startKey (inclusive) and endKey (exclusive).
   * The keys are returned by the iterator in lexical order. Note
   * that startKey and endKey can be empty string, which implies unbounded range
   * query on start or end.<br><br>
   * Call close() on the returned {@link StateQueryIterator} object when done.
   * The query is re-executed during validation phase to ensure result set
   * has not changed since transaction endorsement (phantom reads detected).
   * @async
   * @param {string} startKey State variable key as the start of the key range (inclusive)
   * @param {string} endKey State variable key as the end of the key range (exclusive)
   * @return {Promise} Promise for a {@link StateQueryIterator} object
   */
  async getStateByRange(startKey, endKey) {
    return this.middleware("getStateByRange", { startKey, endKey });
  }

  /**
   * Performs a "rich" query against a state database. It is
   * only supported for state databases that support rich query,
   * e.g. CouchDB. The query string is in the native syntax
   * of the underlying state database. An {@link StateQueryIterator} is returned
   * which can be used to iterate (next) over the query result set.<br><br>
   * The query is NOT re-executed during validation phase, phantom reads are
   * not detected. That is, other committed transactions may have added,
   * updated, or removed keys that impact the result set, and this would not
   * be detected at validation/commit time.  Applications susceptible to this
   * should therefore not use GetQueryResult as part of transactions that update
   * ledger, and should limit use to read-only chaincode operations.
   * @async
   * @param {string} query Query string native to the underlying state database
   * @return {Promise} Promise for a {@link StateQueryIterator} object
   */
  async getQueryResult(query) {
    return this.middleware("getQueryResult", { query });
  }

  /**
   * Returns a history of key values across time.
   * For each historic key update, the historic value and associated
   * transaction id and timestamp are returned. The timestamp is the
   * timestamp provided by the client in the proposal header.
   * This method requires peer configuration
   * <code>core.ledger.history.enableHistoryDatabase</code> to be true.<br><br>
   * The query is NOT re-executed during validation phase, phantom reads are
   * not detected. That is, other committed transactions may have updated
   * the key concurrently, impacting the result set, and this would not be
   * detected at validation/commit time. Applications susceptible to this
   * should therefore not use GetHistoryForKey as part of transactions that
   * update ledger, and should limit use to read-only chaincode operations.
   * @async
   * @param {string} key The state variable key
   * @return {Promise} Promise for a {@link HistoryQueryIterator} object
   */
  async getHistoryForKey(key) {
    return this.middleware("getHistoryForKey", { key });
  }

  /**
   * A Response object is returned from a chaincode invocation
   * @typedef {Object} Response
   * @property {number} status A status code that follows the HTTP status codes
   * @property {string} message A message associated with the response code
   * @property {byte[]} payload A payload that can be used to include metadata with this response
   */

  /**
   * Locally calls the specified chaincode <code>invoke()</code> using the
   * same transaction context; that is, chaincode calling chaincode doesn't
   * create a new transaction message.<br><br>
   * If the called chaincode is on the same channel, it simply adds the called
   * chaincode read set and write set to the calling transaction.<br><br>
   * If the called chaincode is on a different channel,
   * only the Response is returned to the calling chaincode; any PutState calls
   * from the called chaincode will not have any effect on the ledger; that is,
   * the called chaincode on a different channel will not have its read set
   * and write set applied to the transaction. Only the calling chaincode's
   * read set and write set will be applied to the transaction. Effectively
   * the called chaincode on a different channel is a `Query`, which does not
   * participate in state validation checks in subsequent commit phase.<br><br>
   * If `channel` is empty, the caller's channel is assumed.
   * @async
   * @param {string} chaincodeName Name of the chaincode to call
   * @param {byte[][]} args List of arguments to pass to the called chaincode
   * @param {string} channel Name of the channel where the target chaincode is active
   * @return {Promise} Promise for a {@link Response} object returned by the called chaincode
   */
  async invokeChaincode(chaincodeName, args, channel) {
    return this.middleware("invokeChaincode", { chaincodeName, args, channel });
  }

  /**
   * Allows the chaincode to propose an event on the transaction proposal. When the transaction
   * is included in a block and the block is successfully committed to the ledger, the block event
   * will be delivered to the current event listeners that have been registered with the peer's
   * event producer. Note that the block event gets delivered to the listeners regardless of the
   * status of the included transactions (can be either valid or invalid), so client applications
   * are responsible for checking the validity code on each transaction. Consult each SDK's documentation
   * for details.
   * @param {string} name Name of the event
   * @param {byte[]} payload A payload can be used to include data about the event
   */
  setEvent(name, payload) {
    return this.middleware("setEvent", { name, payload });
  }

  /**
   * Creates a composite key by combining the objectType string and the given `attributes` to form a composite
   * key. The objectType and attributes are expected to have only valid utf8 strings and should not contain
   * U+0000 (nil byte) and U+10FFFF (biggest and unallocated code point). The resulting composite key can be
   * used as the key in [putState()]{@link ChaincodeStub#putState}.<br><br>
   *
   * Hyperledger Fabric uses a simple key/value model for saving chaincode states. In some use case scenarios,
   * it is necessary to keep track of multiple attributes. Furthermore, it may be necessary to make the various
   * attributes searchable. Composite keys can be used to address these requirements. Similar to using composite
   * keys in a relational database table, here you would treat the searchable attributes as key columns that
   * make up the composite key. Values for the attributes become part of the key, thus they are searchable with
   * functions like [getStateByRange()]{@link ChaincodeStub#getStateByRange} and
   * [getStateByPartialCompositeKey()]{@link ChaincodeStub#getStateByPartialCompositeKey}.<br><br>
   *
   * @param {string} objectType A string used as the prefix of the resulting key
   * @param {string[]} attributes List of attribute values to concatenate into the key
   * @return {string} A composite key with the <code>objectType</code> and the array of <code>attributes</code>
   * joined together with special delimiters that will not be confused with values of the attributes
   */
  createCompositeKey(objectType, attributes) {
    return this.middleware("createCompositeKey", { objectType, attributes });
  }

  /**
   * Splits the specified key into attributes on which the composite key was formed.
   * Composite keys found during range queries or partial composite key queries can
   * therefore be split into their original composite parts, essentially recovering
   * the values of the attributes.
   * @param {string} compositeKey The composite key to split
   * @return {Object} An object which has properties of 'objectType' (string) and
   * 'attributes' (string[])
   */
  splitCompositeKey(compositeKey) {
    return this.middleware("splitCompositeKey", { compositeKey });
  }

  /**
   * Queries the state in the ledger based on a given partial composite key. This function returns an iterator
   * which can be used to iterate over all composite keys whose prefix matches the given partial composite key.
   * The `objectType` and attributes are expected to have only valid utf8 strings and should not contain
   * U+0000 (nil byte) and U+10FFFF (biggest and unallocated code point).<br><br>
   *
   * See related functions [splitCompositeKey]{@link ChaincodeStub#splitCompositeKey} and
   * [createCompositeKey]{@link ChaincodeStub#createCompositeKey}.<br><br>
   *
   * Call close() on the returned {@link StateQueryIterator} object when done.<br><br>
   *
   * The query is re-executed during validation phase to ensure result set has not changed since transaction
   * endorsement (phantom reads detected).
   * @async
   * @param {string} objectType A string used as the prefix of the resulting key
   * @param {string[]} attributes List of attribute values to concatenate into the partial composite key
   * @return {Promise} A promise that resolves with a {@link StateQueryIterator}, rejects if an error occurs
   */
  async getStateByPartialCompositeKey(objectType, attributes) {
    return this.middleware("getStateByPartialCompositeKey", {
      objectType,
      attributes
    });
  }
}

module.exports = ChaincodeStub;

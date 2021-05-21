export class DLCEvent {

    constructor(name, outcomes, nonce, publicKeyOfOracle) {
        this.name = name;
        this.outcomes = outcomes;
        this.nonce = nonce;
        this.publicKeyOfOracle = publicKeyOfOracle;
        this.oracleSignatureOfOutcome = "";
    }

    addOracleSignatureToOutcome(signature) {
        this.oracleSignatureOfOutcome = signature;
    }

}
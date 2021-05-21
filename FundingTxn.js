export class FundingTxn {

    constructor(collateralAmount, utxo, payoutAddress) {
        this.collateralAmount = collateralAmount;
        this.utxo = utxo;
        this.payoutAddress = payoutAddress;
    }

    addSignature(signature) {
        this.signature = signature;
    }
}
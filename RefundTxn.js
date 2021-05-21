export class RefundTxn {

    constructor(collateralAmount, utxo, refundAddress) {
        this.collateralAmount = collateralAmount;
        this.utxo = utxo;
        this.refundAddress = refundAddress;
    }

    addSignature(signature) {
        this.signature = signature;
    }
}
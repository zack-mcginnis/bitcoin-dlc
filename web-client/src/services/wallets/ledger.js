import TransportWebUSB from "@ledgerhq/hw-transport-webusb";
import AppBtc from "@ledgerhq/hw-app-btc";

export class LedgerWebUsb {
    constructor() {
        this.transport = null;
        this.btc = null;
    }

    async init() {
        try {
            this.transport = await TransportWebUSB.create();
            this.btc = new AppBtc(this.transport);
        } catch (err) {
            console.error("Error: ", err)
        }
    }

    async getPublicKey() {
        try {
            return this.btc.getWalletPublicKey("49'/0'/0'/0/0", { format: "p2sh" })
        } catch (err) {
            return err;
        }
    }
}

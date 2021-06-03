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

    async signMessage(message) {
        const path = "44'/60'/0'/0'/0";
        const messageBuffer = Buffer.from(message).toString("hex");
        try {
            const result = await this.btc.signMessageNew_async(path, messageBuffer)
            const v = result['v'] + 27 + 4;
            const signature = Buffer.from(v.toString(16) + result['r'] + result['s'], 'hex').toString('base64');
            console.log("Signature : " + signature);
        } catch (err) {
            return err;
        }
    }
}

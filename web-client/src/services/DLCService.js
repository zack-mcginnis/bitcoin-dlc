import { LedgerWebUsb } from "./wallets/ledger";

export const test = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/test`;
    // TODO: wait for device selection
    const ledger = new LedgerWebUsb();
    await ledger.init();
    // get device pub key
    const publicKey = await ledger.getPublicKey();
    console.log(publicKey)

    try {
        const result = await fetch(url);
        return await result.json();
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const getBlockchainInfo = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/blockchain`;

    try {
        const result = await fetch(url);
        return await result.json();
    } catch (err) {
        console.error(err);
        return err;
    }
}

export const getNetworkInfo = async () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/network`;

    try {
        const result = await fetch(url);
        return await result.json();
    } catch (err) {
        console.error(err);
        return err;
    }
}
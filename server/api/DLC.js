import { Participant } from "./Participant.js";
import { Oracle } from "./Oracle.js";
import { FundingTxn } from "./FundingTxn.js";
import { verifySignature } from "../shared/utils.js";
import bitcoin from 'bitcoinjs-lib';
import bitcoinMessage from 'bitcoinjs-message';

import { BitcoinNode } from "../shared/bitcoin-core-config.js"

export const testSignatures = async (res) => {

    const publicKey = "xpub6DB2Np8LP1kFvyWjZWaMEHHJqjNR4hq8QZUPqHztpUPPKDDSNcVEUmEqGNJ8SbpQixixaCYWzFN98wZa6qo15xqVXydL4dvNSzQSSH1ngg2"
    const signature = "H1xqB5/BKHGI5szgWsJuuNARN9TQXleq5dCLuVn3Y6PLVYbtPWi5WWcUakxpzZQkrAblbEVKIRAQhnt87rL/MhA="
    const message = "Test Sig 123"

    console.log(bitcoinMessage.verify(message, publicKey, signature))
    // // create participants
    // const alice = new Participant("alice");
    // const bob = new Participant("bob");

    // // create oracle
    // const oracle = new Oracle("oracle");

    // // create transaction
    // const fundingTxn = new FundingTxn("100", "vnks3nlskvn", "lknvsadcjnsd")

    // // sign transaction
    // const aliceSig = alice.sign(fundingTxn)
    // verifySignature(alice.publicKey, aliceSig, fundingTxn)

    // const bobSig = bob.sign(fundingTxn)
    // verifySignature(bob.publicKey, bobSig, fundingTxn)

    // const oracleSig = oracle.sign(fundingTxn)
    // verifySignature(oracle.publicKey, oracleSig, fundingTxn)

    // await createPsbt();

    // res.send({aliceSig, bobSig, oracleSig});
}

export const createPsbt = async () => {
    // First arg (inputs)
    const txid = "myid";
    const vout = 0;
    const sequence = 0;

    // Second arg (outputs)
    const outputAddressAndAmount = {};
    const address = "test";
    const amount = "0.0001";
    outputAddressAndAmount[address] = amount;
    const data = "00010203";

    // Third arg (locktime)
    const locktime = 0; // default 0

    // Fourth arg (replaceable)
    const replaceable = false; // default false

    try {
        const psbt = await BitcoinNode.createPsbt([{txid, vout, sequence}], [{...outputAddressAndAmount, data}], locktime, replaceable);
        console.log("psbt ", psbt);
    } catch (err) {
        console.warn(err);
    }
}
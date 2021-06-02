import { Participant } from "./Participant.js";
import { Oracle } from "./Oracle.js";
import { FundingTxn } from "./FundingTxn.js";
import { verifySignature } from "../shared/utils.js";

import { BitcoinNode } from "../shared/bitcoin-core-config.js"

export const testSignatures = async (res) => {
    // create participants
    const alice = new Participant("alice");
    const bob = new Participant("bob");

    // create oracle
    const oracle = new Oracle("oracle");

    // create transaction
    const fundingTxn = new FundingTxn("100", "vnks3nlskvn", "lknvsadcjnsd")

    // sign transaction
    const aliceSig = alice.sign(fundingTxn)
    verifySignature(alice.publicKey, aliceSig, fundingTxn)

    const bobSig = bob.sign(fundingTxn)
    verifySignature(bob.publicKey, bobSig, fundingTxn)

    const oracleSig = oracle.sign(fundingTxn)
    verifySignature(oracle.publicKey, oracleSig, fundingTxn)

    await createPsbt();

    res.send({aliceSig, bobSig, oracleSig});
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
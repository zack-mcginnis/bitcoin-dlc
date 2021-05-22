/*
Steps for setting up and executing a DLC on the bitcoin network

1. Create DB which contains pubkeys of all registered participants and oracles. Though this introduces some centralization,
it may be necessary to streamline the DLC setup process.

2. Oracle creates an event which contains all possible outcomes, plus a nonce


... 


*/

import express from "express";
const app = express();

import { Participant } from "./Participant.js";
import { Oracle } from "./Oracle.js";
import { FundingTxn } from "./FundingTxn.js";

import { verifySignature } from "./utils.js";

app.get('/', function (req, res) {
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

})

app.listen(3000)
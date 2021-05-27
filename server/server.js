import express from "express";

import { getBlockchainInfo, getNetworkInfo } from "./routes/RpcInterface.js";

import { Participant } from "./Participant.js";
import { Oracle } from "./Oracle.js";
import { FundingTxn } from "./FundingTxn.js";

import { verifySignature } from "./utils.js";

const app = express();

// app.use("/api", rpcMethods);

app.get('/', (req, res) => {
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

app.get('/network', (req, res) => getNetworkInfo());
app.get('/blockchain', (req, res) => getBlockchainInfo());


app.listen(3000)
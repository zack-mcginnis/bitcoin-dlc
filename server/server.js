import express from "express";
const app = express();

import { getBlockchainInfo, getNetworkInfo } from "./api/RpcInterface.js";
import { testSignatures } from "./api/DLC.js";

app.get('/test', (req, res) => testSignatures(res));
app.get('/network', (req, res) => getNetworkInfo(res));
app.get('/blockchain', (req, res) => getBlockchainInfo(res));


app.listen(3000)
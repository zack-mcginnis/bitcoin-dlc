import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
app.use(cors());

import { connectDatabase } from "./db/db.js";
import { getBlockchainInfo, getNetworkInfo } from "./api/RpcInterface.js";
import { testSignatures } from "./api/DLC.js";


connectDatabase()
.then( (connection) => {
  console.log("connected to DB")
}).catch( (error) => {
  console.log("Error connecting to DB", error)
})

app.get('/test', (req, res) => testSignatures(res));
app.get('/network', (req, res) => getNetworkInfo(res));
app.get('/blockchain', (req, res) => getBlockchainInfo(res));


app.listen(3000)
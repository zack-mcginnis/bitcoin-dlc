import Client from 'bitcoin-core';
import dotenv from "dotenv";
dotenv.config();

export const BitcoinNode = new Client({ 
    network: 'mainnet',
    username: process.env.RPC_USERNAME,
    password: process.env.RPC_PASSWORD,
    host: process.env.RPC_NODE_ADDRESS
  });
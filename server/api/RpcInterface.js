/*
    Communication between server and bitcoin node
*/
import { BitcoinNode } from "../shared/bitcoin-core-config.js"

export const getBlockchainInfo = async (res) => {
  try {
    const info = await BitcoinNode.getBlockchainInfo()
    return res.send({info})
  } catch (err) {
    return console.error(err)
  }
}

export const getNetworkInfo = async (res) => {
  try {
    const info = await BitcoinNode.getNetworkInfo()
    return res.send({info})
  } catch (err) {
    console.error(err)
  }
}
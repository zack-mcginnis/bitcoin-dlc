/*
    Communication between server and bitcoin node
*/
import { BitcoinNode } from "../bitcoin-core-config.js"

export const getBlockchainInfo = async () => {
  try {
    const response = await BitcoinNode.getBlockchainInfo()
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}

export const getNetworkInfo = async () => {
  try {
    const response = await BitcoinNode.getNetworkInfo()
    console.log(response)
  } catch (err) {
    console.error(err)
  }
}
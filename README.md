# bitcoin-dlc
This project contains a marketplace which will coordinate the creation and execution of DLC's (discreet log contracts) on Bitcoin.

## Terms to know
1. `DLCEvent`: A `DLCEvent` is created by an Oracle. It will contain a `name`, a `nonce`, and an array of all possible `outcomes`. When the result of the `DLCEvent` is known in the real-world, the Oracle attests to an `outcome` by signing the `outcome` message with its private key, and sharing the resulting signature with all interested participants.
2. `Oracle`: An `Oracle` is a third-party who attests to the `outcome` of a real-world `DLCEvent`.
3. `Participant`: A `Participant` is a counter-party to a `DLCContract`. They will enter into a `DLCContract`, and risk collateral on a specific `outcome` within a `DLCEvent`.
4. `FundingTxn`: A `FundingTxn` is a PSBT (partially signed Bitcoin transaction). It will be created for each `Participant` who wishes to enter into the `DLCContract`. It is only broadcast to the Bitcoin network once all `Participant`'s have agreed to the terms and amounts within the `DLCContract`.
5. `RefundTxn`: A `RefundTxn` is a PBST created for each `Participant` who wishes to enter into the `DLCContract`. It is only broadcast when there are disputes or lack of cooperation between `Participant`'s involved in the `DLCContract`.

## How it works

## Example

## server
A NodeJS/Express app which will facilitate interactions between Participants, Oracles, and DLCEvents

### Running the server app

## web-client
A ReactJS app which will receive input from Participants


### Running the web client
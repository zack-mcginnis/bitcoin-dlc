# bitcoin-dlc
This project contains a marketplace which will coordinate the creation and execution of DLC's (discreet log contracts) on Bitcoin.

## Terms to know
- `DLCEvent`: A `DLCEvent` is created by an Oracle. It will contain a `name`, a `nonce`, and an array of all possible `outcomes`. When the result of the `DLCEvent` is known in the real-world, the Oracle attests to an `outcome` by signing the `outcome` message with its private key, and sharing the resulting signature with all interested participants.
- `Oracle`: An `Oracle` is a third-party who attests to the `outcome` of a real-world `DLCEvent`.
- `Participant`: A `Participant` is a counter-party to a `DLCContract`. They will enter into a `DLCContract`, and risk collateral on a specific `outcome` within a `DLCEvent`.
- `FundingTxn`: A `FundingTxn` is a PSBT (partially signed Bitcoin transaction). It will be created for each `Participant` who wishes to enter into the `DLCContract`. It is only broadcast to the Bitcoin network once all `Participant`'s have agreed to the terms and amounts within the `DLCContract`.
- `RefundTxn`: A `RefundTxn` is a PBST created for each `Participant` who wishes to enter into the `DLCContract`. It is only broadcast when there are disputes or lack of cooperation between `Participant`'s involved in the `DLCContract`.

## How it works
1. Assume `Participant`'s Alice and Bob have been created, and their public keys are known. Assume an `Oracle` Oracle has been created, and their public key is known.
2. Oracle creates an `DLCEvent` Event with all possible `outcome`'s.
3. Alice creates a `DLCContract` Contract by taking one side (`outcome`) of the Event. She will specify the `amount` of collateral needed for each possible `outcome` of the Event.
4. A `RefundTxn` PSBT will be created (but not yet broadcast) which contains Bitcoin transaction data relevant to the terms of the Contract. Alice's collateral amount will be paid to Alice's receiving address in this `RefundTxn`.
5. Bob sees the open `DLCContract` while using the web-client, and wishes to accept an opposing `outcome` on Alice's Contract.
6. A `RefundTxn` PSBT will be created (not yet broadcast) which contains Bitcoin transaction data relevant to the terms of the contract. Bob's collateral amount will be paid to Bob's receiving address in the `RefundTxn`.
7. 

## Example

## server
A NodeJS/Express app which will facilitate interactions between Participants, Oracles, and DLCEvents

### Running the server app

## web-client
A ReactJS app which will receive input from Participants


### Running the web client
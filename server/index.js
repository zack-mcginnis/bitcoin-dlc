/*
Steps for setting up and executing a DLC on the bitcoin network

1. Create DB which contains pubkeys of all registered participants and oracles. Though this introduces some centralization,
it may be necessary to streamline the DLC setup process.

2. Oracle creates an event which contains all possible outcomes, plus a nonce


... 


*/

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000)
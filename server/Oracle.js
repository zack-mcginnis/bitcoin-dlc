import crypto, { generateKeyPairSync } from "crypto";

export class Oracle {

    constructor(name) {
        this.name = name;
        // Mocking key data
        const { publicKey, privateKey } = generateKeyPairSync('rsa', 
            {   modulusLength: 2048,  // the length of your key in bits   
                publicKeyEncoding: {
                type: 'spki',       // recommended to be 'spki' by the Node.js docs
                format: 'pem'   
                },   
                privateKeyEncoding: {
                type: 'pkcs8',      // recommended to be 'pkcs8' by the Node.js docs
                format: 'pem',
                //cipher: 'aes-256-cbc',   // *optional*
                //passphrase: 'top secret' // *optional*   
            } 
        }); 
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }

    // Mocking signature creation
    sign(transaction) {
        const signer = crypto.createSign('RSA-SHA256');// Returns the signature in output_format which can be 'binary', 'hex' or 'base64'
        signer.update(transaction.toString())
        const signature = signer.sign(this.privateKey, 'hex')
        console.log(`Digital Signature: created for ${this.name}`, signature);
        return signature
    }
}
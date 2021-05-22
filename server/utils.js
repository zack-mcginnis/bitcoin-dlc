import crypto from "crypto";

export const verifySignature = (publicKey, signature, data) => {
    const verify = crypto.createVerify('RSA-SHA256');
    verify.update(data.toString());
    console.log(verify.verify(publicKey, signature,'hex'));
}
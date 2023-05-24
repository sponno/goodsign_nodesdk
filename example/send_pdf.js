require('dotenv').config();
const path = require('path');
const GoodSign = require('../src/GoodSign.js');
const Payload = require('../src/Payload');
const PayloadSigner = require('../src/PayloadSigner');
const goodSign = new GoodSign(process.env.API_KEY);

// API KEY stored in .env (located in root)
// Run this file from the direcgtory eg  node ./examples/send_pdf.js 
const API_KEY=process.env.API_KEY



let payload = new Payload();
payload.doc_name  = 'NDA Simple.pdf'

// Who needs to sign
const signers = [
  {
    key: "signer",
    name: "John Upload",
    email: "john@bluespark.co.nz",
    reminder_days: 0
  }
];

const filePath = path.join(__dirname, 'goodsign_guide_v1.4.pdf');
goodSign.uploadPdf(filePath, payload, signers)
  .then(response => console.log(response))
  .catch(error => console.error(error));
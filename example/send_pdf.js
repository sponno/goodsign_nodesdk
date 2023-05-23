require('dotenv').config();
const path = require('path');
const GoodSign = require('../src/GoodSign.js');
const Payload = require('../src/Payload');
const PayloadSigner = require('../src/PayloadSigner');
const goodSign = new GoodSign(process.env.API_KEY);

// API KEY stored in .env (located in root)
// Run this file from the direcgtory eg  node ./examples/send_pdf.js 
const API_KEY=process.env.API_KEY


const signers = [
  {
    key: "signer",
    name: "John Upload",
    email: "john@bluespark.co.nz",
    reminder_days: 0
  }
];

let payload = new Payload();
payload.doc_name  = 'NDA Simple.pdf'
payload.signers =  new PayloadSigner('signer1','John Ballinger','john@bluespark.co.nz',0)



const filePath = path.join(__dirname, 'goodsign_guide_v1.4.pdf');
goodSign.uploadPdf(filePath, payload)
  .then(response => console.log(response))
  .catch(error => console.error(error));
require('dotenv').config();
const path = require('path');


// API KEY stored in .env (locationed in root)
const API_KEY=process.env.API_KEY

const GoodSign = require('../src/GoodSign.js');
const Payload = require('../src/Payload');

const goodSign = new GoodSign(process.env.API_KEY);


// Muliple Attachments
goodSign.getDocument('a8633ff2-7a1f-42fb-87b0-3587f88745e6')
    .then(template => console.log(template))
    .catch(err => console.error(err));
return

// No Attachments
// goodSign.getTemplate('615be722-a017-4c98-9ad1-48aee8604eff')
//     .then(template => console.log(template))
//     .catch(err => console.error(err));


// const signers = [
//   {
//     key: "signer",
//     name: "John Upload",
//     email: "john@bluespark.co.nz",
//     reminder_days: 0
//   }
// ];

// let payload = new Payload();
// payload.uuid = '6515e3a7-6e05-478a-85f4-ca76c60be848'
// payload.name  = 'NDA Simple.pdf'
// payload.signers =  signers


// // goodSign.sendTemplate(payload)
// //   .then(response => console.log(response))
// //   .catch(error => console.error(error));

// const filePath = path.join(__dirname, 'goodsign_guide_v1.4.pdf');
// goodSign.uploadPdf(filePath, payload)
//   .then(response => console.log(response))
//   .catch(error => console.error(error));
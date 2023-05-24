require('dotenv').config();
const path = require('path');


// API KEY stored in .env (locationed in root)
const API_KEY=process.env.API_KEY

const GoodSign = require('../src/GoodSign.js');
const Payload = require('../src/Payload');

const goodSign = new GoodSign(process.env.API_KEY);


// Muliple Attachments
goodSign.voidDocument('ab02d425-130c-436c-8371-dffdc638d446')
    .then(template => console.log(template))
    .catch(err => console.error(err));
return

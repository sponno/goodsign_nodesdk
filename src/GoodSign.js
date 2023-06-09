const axios = require('axios');
const MasterDocument = require('./MasterDocument');
const ApiResponse = require('./ApiResponse')
const fs = require('fs');

const FormData = require('form-data');



class GoodSign {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://goodsign.io';
    }


    // List templates
    async getTemplates() {
        const response = await axios.get(`https://goodsign.io/api/templates`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });
        return response.data;
    }

    // Return a document - it might be completed, you can see document status (complete, sent), details about who has or has not signed. 
    async getDocument(uuid) {
        const response = await axios.get(`https://goodsign.io/api/document/${uuid}`, {
            headers: {
                'Authorization': `Bearer ${this.apiKey}`
            }
        });

        // Debug
        // return JSON.stringify(response.data, null, 2)

        return new MasterDocument(
          response.data
        );
    }

    // Send an existing template from GoodSign to one or several signers
    async sendTemplate(payload,signers) {
        try {
          const response = await axios.post(`${this.baseURL}/api/usetemplate`, payload, {
            headers: {
              'authorization': `Bearer ${this.apiKey}`
            }
          });
          return new ApiResponse(response.data.success,response.data.doc, response.data.warnings, response.data.credit)
        } catch (error) {
          console.error(error);
        }
    }

    // Upload a PDF file and Payload for processing using TextTags. See the goodsign_guide.pdf for details about TextTags
    async uploadPdf(filePath, payload, signers) {
        payload.signers = signers ; // merge these fields intot he payload.
        const url = `${this.baseURL}/api/uploadpdf`;
        const headers = {
          'authorization': `Bearer ${this.apiKey}`
        };

        const form = new FormData();
        form.append('file', fs.createReadStream(filePath));
        form.append('payload', JSON.stringify(payload));

        const response = await axios.post(url, form, { headers: { ...headers, ...form.getHeaders() } });
        return new ApiResponse(response.data.success,response.data.doc, response.data.warnings, response.data.credit)
     }

    // Remind any signers for the document that havent signed. 
    // If it's a sequential document, the next signer up will be reminded
    // If there are several signers that haven't been reminded, they will all get a "friendly reminder" to sign
    async sendReminder(uuid) {
        const url = `${this.baseURL}/api/document/${uuid}/remindall`;
        try {
            const response = await axios.post(url, {}, {
            headers: {
              'authorization': `Bearer ${this.apiKey}`
            }
          });

          return response.data;
        } catch (error) {
          console.error(error);
        }
     }

     // Voids a document - all signers will be notified that the document has been voiced.
    async voidDocument(uuid) {
        const url = `${this.baseURL}/api/document/${uuid}/void`;
        try {
            const response = await axios.post(url, {}, {
            headers: {
              'authorization': `Bearer ${this.apiKey}`
            }
          });

          return response.data;
        } catch (error) {
          console.error(error);
        }
    }


}

module.exports = GoodSign;

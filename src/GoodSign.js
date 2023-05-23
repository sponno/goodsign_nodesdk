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

    async getTemplate(templateId) {
        const response = await axios.get(`https://goodsign.io/api/document/${templateId}`, {
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

    // Send a template
    async sendTemplate(payload) {
        try {
          const response = await axios.post('${this.baseURL}/api/usetemplate', payload, {
            headers: {
              'authorization': `Bearer ${this.apiKey}`
            }
          });
          return new ApiResponse(response.data.success,response.data.doc, response.data.warnings, response.data.credit)
        } catch (error) {
          console.error(error);
        }
    }

    // upload PDF
    async uploadPdf(filePath, payload) {
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



}

module.exports = GoodSign;

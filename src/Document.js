const Field = require('./Field');
const Signer = require('./Signer');


class Document {
  constructor(name, signers = [], fields = [], completed_time, status, cc, is_attachment, istemplate, webhook, metadata, note, uuid, download_pdf, download_zip) {
    this.name = name;
    this.signers = signers.map(signer => new Signer(signer));
    this.fields = fields.map(field => new Field(field));
    this.completed_time = completed_time;
    this.status = status;
    this.cc = cc;
    this.is_attachment = is_attachment;
    this.istemplate = istemplate;
    this.webhook = webhook;
    this.metadata = metadata;
    this.note = note;
    this.uuid = uuid;
    this.download_pdf = download_pdf;
    this.download_zip = download_zip;
  }
}

module.exports = Document;

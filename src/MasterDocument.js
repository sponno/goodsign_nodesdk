const Attachment = require('./Attachment');
const Document = require('./Document');


class MasterDocument extends Document {
  constructor(doc) {
   super(doc.master_doc.name, doc.master_doc.signers, doc.master_doc.fields, doc.master_doc.completed_time, doc.master_doc.status, doc.master_doc.cc, doc.master_doc.is_attachment, doc.master_doc.istemplate, doc.master_doc.webhook, doc.master_doc.metadata, doc.master_doc.note, doc.master_doc.uuid, doc.master_doc.download_pdf, doc.master_doc.download_zip);
   this.attachments = doc.attachments.map(attachment => new Attachment(attachment));
   console.log(doc)
  }
}

module.exports = MasterDocument;
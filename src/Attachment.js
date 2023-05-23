const Document = require('./Document');

class Attachment extends Document {
  constructor(attachment) {
    super(attachment.name, attachment.signers, attachment.fields, attachment.completed_time, attachment.status, attachment.cc, attachment.is_attachment, attachment.istemplate, attachment.webhook, attachment.metadata, attachment.note, attachment.uuid, attachment.download_pdf, attachment.download_zip);
  }
}

module.exports = Attachment;
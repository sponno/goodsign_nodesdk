

class Payload {
  constructor() {
      this.uuid = null;
      this.doc_name = '';
      this.attachment_names_in_order = [];
      this.metadata = null;
      this.webhook = null;
      this.cc_email = null;
      this.smsverify = false;
      this.send_in_order = false;
      this.duplicate = null;
      this.email_subject = null;
      this.email_message = null;
      this.ignore_missing_signers = true;
      this.signer = [];
      this.fields = [];
  }
}


module.exports = Payload;



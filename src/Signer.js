const Contact = require('./Contact');

class Signer {
  constructor(signer) {
    this.contact = new Contact(signer.contact.name, signer.contact.email);
    this.complete = signer.complete;
    this.reminderdays = signer.reminderdays;
    this.completetime = signer.completetime;
    this.verifysmspass = signer.verifysmspass;
    this.verifyid = signer.verifyid;
    this.template_rolename = signer.template_rolename;
    this.key = signer.key;
    this.emailStatus = signer.emailStatus;
  }
}

module.exports = Signer;

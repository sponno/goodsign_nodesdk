

class PayloadSigner {
  constructor(key, name, email, reminder_days=0) {
    this.key =  key
    this.name =  name
    this.email = email
    reminder_days =  reminder_days
  }
}


module.exports = PayloadSigner;



class Field {
  constructor(field) {
    this.complete = field.complete;
    this.type = field.type;
    this.value = field.value;
    this.subtype = field.subtype;
    this.valuetype = field.valuetype;
    this.apiref = field.apiref;
    this.contact = field.contact;
  }
}
module.exports = Field;
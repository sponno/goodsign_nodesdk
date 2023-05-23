

class ApiResponse {
  constructor(success, doc=null, warnings, credit) {
    this.success = success;
    this.doc = doc
    this.warnings = warnings;
    this.credit = credit;
  }
}

module.exports = ApiResponse;


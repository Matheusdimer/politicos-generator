function ErrorResponse(status, message) {
    this.status = status;
    this.message = message;
    this.timestamp = new Date().toISOString();
}

module.exports = ErrorResponse;
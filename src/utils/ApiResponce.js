class ApiResponce {
  constructor(data, message = success, statusCode) {
    this.data = data;
    this.message = message;
    this.statusCode = statusCode;
    this.success = statusCode < 400;
  }
}
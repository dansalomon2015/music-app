"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponse = void 0;
class ApiResponse {
    constructor(message, statusCode) {
        this.message = message;
        this.statusCode = statusCode;
    }
    setData(data) {
        this.data = data;
    }
    setErrors(errors) {
        this.errors = errors;
    }
}
exports.ApiResponse = ApiResponse;

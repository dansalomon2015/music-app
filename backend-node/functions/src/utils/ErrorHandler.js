"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const _1 = require(".");
const types_1 = require("../types");
const DataValidationError_1 = require("./DataValidationError");
class ErrorHandler {
    static process(error) {
        if (error instanceof DataValidationError_1.DataValidationError) {
            let resp = new _1.ApiResponse("Invalid data", types_1.HTTP_RESPONSE_CODES.UNPROCESSABLE_ENTITY);
            resp.setErrors(error.errors);
            return resp;
        }
        else {
            return error;
        }
    }
}
exports.ErrorHandler = ErrorHandler;

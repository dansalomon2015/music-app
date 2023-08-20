"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const types_1 = require("../types");
const utils_1 = require("../utils");
const globalErrorHandler = async (error, req, res, next) => {
    try {
        error = utils_1.ErrorHandler.process(error);
        error.statusCode = error.statusCode || 500;
        error.status = error.status || "error";
        let data = {
            status: types_1.ApiResponseCodeType.ERROR,
            message: error.message,
        };
        if (Object.prototype.hasOwnProperty.call(error, "errors")) {
            res.status(error.statusCode).json({ ...data, errors: error.errors });
        }
        else {
            res.status(error.statusCode).json(data);
        }
    }
    catch (error) {
        res.status(500).json({ status: error, message: "Internal server error" });
    }
};
exports.globalErrorHandler = globalErrorHandler;

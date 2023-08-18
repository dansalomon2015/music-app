import { ApiResponse } from ".";
import { HTTP_RESPONSE_CODES } from "../types";
import { DataValidationError } from "./DataValidationError";

export class ErrorHandler {
    public static process(error: any) {
        if (error instanceof DataValidationError) {
            let resp = new ApiResponse("Invalid data", HTTP_RESPONSE_CODES.UNPROCESSABLE_ENTITY);
            resp.setErrors(error.errors);
            return resp;
        } else {
            return error;
        }
    }
}

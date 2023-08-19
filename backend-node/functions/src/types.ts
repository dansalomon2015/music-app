import { ValidateOptions } from "yup";

export enum ApiResponseCodeType {
    SUCCESS = 0, // OK
    FAILED = 1, // WARNING
    ERROR = 2, // ERROR
}

export enum HTTP_RESPONSE_CODES {
    OK = 200,
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502,
    REQUEST_CONFLICT = 409,
    UNPROCESSABLE_ENTITY = 422,
}

export const DATA_VALIDATION_OPTIONS = {
    abortEarly: true,
    stripUnknown: true,
} as ValidateOptions;

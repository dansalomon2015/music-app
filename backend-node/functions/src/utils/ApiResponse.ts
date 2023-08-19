import { ApiResponseCodeType } from "../types";

export class ApiResponse<T, R> {
    private message: string;
    private statusCode: ApiResponseCodeType | number;
    private data: T | undefined;
    private errors: R | undefined;

    constructor(message: string, statusCode: number) {
        this.message = message;
        this.statusCode = statusCode;
    }

    public setData(data: T) {
        this.data = data;
    }

    public setErrors(errors: R) {
        this.errors = errors;
    }
}

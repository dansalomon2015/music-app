import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { search } from "../thirdParties";
import { ApiResponseCodeType, DATA_VALIDATION_OPTIONS, HTTP_RESPONSE_CODES } from "../types";
import { ApiResponse, DataValidationError } from "../utils";
import { SearchResultMapper } from "../mappers";

export class SearchController {
    constructor() {}

    public search(req: Request, res: Response, next: NextFunction) {
        try {
            const { q } = yup
                .object({ q: yup.string().required() })
                .validateSync(req.query, DATA_VALIDATION_OPTIONS) as unknown as {
                q: string;
            };

            search(q)
                .then((data) => {
                    let response = new ApiResponse<any, any>("Success", ApiResponseCodeType.SUCCESS);
                    response.setData(data.data.map((r: any) => SearchResultMapper.mapResponseModel(r)));
                    res.status(HTTP_RESPONSE_CODES.OK).json(response);
                })
                .catch(next);
        } catch (error: any) {
            next(new DataValidationError(error.errors));
        }
    }
}

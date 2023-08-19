import { NextFunction, Request, Response } from "express";
import * as yup from "yup";
import { getAlbumsByArtistId, getArtistById, getTopByArtistId } from "../thirdParties";
import { ApiResponseCodeType, DATA_VALIDATION_OPTIONS, HTTP_RESPONSE_CODES } from "../types";
import { ApiResponse, DataValidationError } from "../utils";
import { AlbumMapper, ArtistMapper, TopTrackMapper } from "../mappers";

export class ArtistController {
    constructor() {}

    public getArtistDetails(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, DATA_VALIDATION_OPTIONS) as unknown as {
                id: number;
            };

            getArtistById(id)
                .then((data) => {
                    let response = new ApiResponse<any, any>("Success", ApiResponseCodeType.SUCCESS);
                    response.setData(ArtistMapper.mapResponseModel(data));
                    res.status(HTTP_RESPONSE_CODES.OK).json(response);
                })
                .catch(next);
        } catch (error: any) {
            next(new DataValidationError(error.errors));
        }
    }

    public getAlbums(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, DATA_VALIDATION_OPTIONS) as unknown as {
                id: number;
            };

            getAlbumsByArtistId(id)
                .then((data) => {
                    let response = new ApiResponse<any, any>("Success", ApiResponseCodeType.SUCCESS);
                    response.setData(data.data.map((r: any) => AlbumMapper.mapResponseToModel(r)));
                    res.status(HTTP_RESPONSE_CODES.OK).json(response);
                })
                .catch(next);
        } catch (error: any) {
            next(new DataValidationError(error.errors));
        }
    }

    public getTopTracks(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, DATA_VALIDATION_OPTIONS) as unknown as {
                id: number;
            };

            getTopByArtistId(id)
                .then((data) => {
                    let response = new ApiResponse<any, any>("Success", ApiResponseCodeType.SUCCESS);
                    response.setData(data.data.map((r: any) => TopTrackMapper.mapResponseToModel(r)));
                    res.status(HTTP_RESPONSE_CODES.OK).json(response);
                })
                .catch(next);
        } catch (error: any) {
            next(new DataValidationError(error.errors));
        }
    }
}

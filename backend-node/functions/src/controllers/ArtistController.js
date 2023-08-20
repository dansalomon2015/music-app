"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistController = void 0;
const yup = __importStar(require("yup"));
const thirdParties_1 = require("../thirdParties");
const types_1 = require("../types");
const utils_1 = require("../utils");
const mappers_1 = require("../mappers");
class ArtistController {
    constructor() { }
    getArtistDetails(req, res, next) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, types_1.DATA_VALIDATION_OPTIONS);
            (0, thirdParties_1.getArtistById)(id)
                .then((data) => {
                let response = new utils_1.ApiResponse("Success", types_1.ApiResponseCodeType.SUCCESS);
                response.setData(mappers_1.ArtistMapper.mapResponseModel(data));
                res.status(types_1.HTTP_RESPONSE_CODES.OK).json(response);
            })
                .catch(next);
        }
        catch (error) {
            next(new utils_1.DataValidationError(error.errors));
        }
    }
    getAlbums(req, res, next) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, types_1.DATA_VALIDATION_OPTIONS);
            (0, thirdParties_1.getAlbumsByArtistId)(id)
                .then((data) => {
                let response = new utils_1.ApiResponse("Success", types_1.ApiResponseCodeType.SUCCESS);
                response.setData(data.data.map((r) => mappers_1.AlbumMapper.mapResponseToModel(r)));
                res.status(types_1.HTTP_RESPONSE_CODES.OK).json(response);
            })
                .catch(next);
        }
        catch (error) {
            next(new utils_1.DataValidationError(error.errors));
        }
    }
    getTopTracks(req, res, next) {
        try {
            const { id } = yup
                .object({ id: yup.number().required() })
                .validateSync(req.params, types_1.DATA_VALIDATION_OPTIONS);
            (0, thirdParties_1.getTopByArtistId)(id)
                .then((data) => {
                let response = new utils_1.ApiResponse("Success", types_1.ApiResponseCodeType.SUCCESS);
                response.setData(data.data.map((r) => mappers_1.TopTrackMapper.mapResponseToModel(r)));
                res.status(types_1.HTTP_RESPONSE_CODES.OK).json(response);
            })
                .catch(next);
        }
        catch (error) {
            next(new utils_1.DataValidationError(error.errors));
        }
    }
}
exports.ArtistController = ArtistController;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistMapper = void 0;
class ArtistMapper {
    constructor() { }
    static mapResponseModel(data) {
        return {
            id: data.id,
            name: data.name,
            cover: data.picture_xl,
            nbFan: data.nb_fan,
        };
    }
}
exports.ArtistMapper = ArtistMapper;

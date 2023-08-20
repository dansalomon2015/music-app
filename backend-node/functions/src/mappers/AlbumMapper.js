"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumMapper = void 0;
class AlbumMapper {
    constructor() { }
    static mapResponseToModel(data) {
        return {
            id: data.id,
            title: data.title,
            cover: data.cover_medium,
            year: data.release_date.split("-")[0],
        };
    }
}
exports.AlbumMapper = AlbumMapper;

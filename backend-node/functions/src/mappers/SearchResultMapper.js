"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultMapper = void 0;
class SearchResultMapper {
    constructor() { }
    static mapResponseModel(data) {
        return {
            id: data.id,
            title: data.title_short,
            duration: data.duration,
            artist: {
                id: data.artist.id,
                name: data.artist.name,
            },
            album: {
                id: data.album.id,
                cover: data.album.cover_big,
                title: data.album.title,
            },
        };
    }
}
exports.SearchResultMapper = SearchResultMapper;

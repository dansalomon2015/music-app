import { SearchResultModel } from "../models";

export class SearchResultMapper {
    constructor() {}

    public static mapResponseModel(data: any): SearchResultModel {
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
            },
        };
    }
}

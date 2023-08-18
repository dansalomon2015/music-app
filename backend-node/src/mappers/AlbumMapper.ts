import { AlbumModel } from "../models";

export class AlbumMapper {
    constructor() {}

    public static mapResponseToModel(data: any): AlbumModel {
        return {
            id: data.id,
            title: data.title,
            cover: data.cover_medium,
            year: data.release_date.split("-")[0],
        };
    }
}

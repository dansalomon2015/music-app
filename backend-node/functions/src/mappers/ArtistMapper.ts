import { ArtistModel } from "../models";

export class ArtistMapper {
    constructor() {}

    public static mapResponseModel(data: any): ArtistModel {
        return {
            id: data.id,
            name: data.name,
            cover: data.picture_xl,
            nbFan: data.nb_fan,
        };
    }
}

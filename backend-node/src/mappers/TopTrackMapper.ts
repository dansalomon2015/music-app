import { TopTrackModel } from "../models";

export class TopTrackMapper {
    constructor() {}

    public static mapResponseToModel(data: any): TopTrackModel {
        return {
            id: data.id,
            title: data.title_short,
            duration: data.duration,
            rank: data.rank,
        };
    }
}

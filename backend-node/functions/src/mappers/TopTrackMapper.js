"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopTrackMapper = void 0;
class TopTrackMapper {
    constructor() { }
    static mapResponseToModel(data) {
        return {
            id: data.id,
            title: data.title_short,
            duration: data.duration,
            rank: data.rank,
        };
    }
}
exports.TopTrackMapper = TopTrackMapper;

export interface SearchResultModel {
    id: number;
    title: string;
    duration: number;
    artist: {
        id: number;
        name: string;
    };
    album: {
        id: number;
        cover: string;
        title: string;
    };
}

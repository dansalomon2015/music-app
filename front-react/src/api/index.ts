import axios from "axios";
import { AlbumModel, ArtistModel, SearchResultModel, TopTrackModel } from "models";
import { ResponseType } from "types";

const BASE_URL = "https://webapp-nkstiyyuyq-uc.a.run.app/api/";
// const BASE_URL = "http://localhost:5000/music-app-a57cf/us-central1/webApp/api/";

export const search = async (q: string): Promise<ResponseType<SearchResultModel[]>> => {
    let response = await axios.get(BASE_URL + "search", { params: { q } });
    return response.data;
};

export const getArtistById = async (artistId: number, cancelToken: any): Promise<ResponseType<ArtistModel>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId, { cancelToken });
    return response.data;
};

export const getAlbumsByArtistId = async (artistId: number, cancelToken: any): Promise<ResponseType<AlbumModel[]>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/albums", { cancelToken });
    return response.data;
};

export const getTopByArtistId = async (artistId: number, cancelToken: any): Promise<ResponseType<TopTrackModel[]>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/top", { cancelToken });
    return response.data;
};

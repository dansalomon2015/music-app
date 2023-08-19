import axios from "axios";
import { AlbumModel, ArtistModel, SearchResultModel, TopTrackModel } from "models";
import { ResponseType } from "types";

const BASE_URL = "https://webapp-nkstiyyuyq-uc.a.run.app/api/";

export const search = async (q: string): Promise<ResponseType<SearchResultModel[]>> => {
    let response = await axios.get(BASE_URL + "search", { params: { q } });
    return response.data;
};

export const getArtistById = async (artistId: number): Promise<ResponseType<ArtistModel>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId);
    return response.data;
};

export const getAlbumsByArtistId = async (artistId: number): Promise<ResponseType<AlbumModel[]>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/albums");
    return response.data;
};

export const getTopByArtistId = async (artistId: number): Promise<ResponseType<TopTrackModel[]>> => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/top");
    return response.data;
};

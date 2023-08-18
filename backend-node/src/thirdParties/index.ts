import axios from "axios";

const BASE_URL = "https://api.deezer.com/";

export const search = async (q: string) => {
    let response = await axios.get(BASE_URL + "search", { params: { q } });
    return response.data;
};

export const getArtistById = async (artistId: number) => {
    let response = await axios.get(BASE_URL + "artist/" + artistId);
    return response.data;
};

export const getAlbumsByArtistId = async (artistId: number) => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/albums");
    return response.data;
};

export const getTopByArtistId = async (artistId: number) => {
    let response = await axios.get(BASE_URL + "artist/" + artistId + "/top");
    return response.data;
};

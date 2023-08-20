"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTopByArtistId = exports.getAlbumsByArtistId = exports.getArtistById = exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const BASE_URL = "https://api.deezer.com/";
const search = async (q) => {
    let response = await axios_1.default.get(BASE_URL + "search", { params: { q } });
    return response.data;
};
exports.search = search;
const getArtistById = async (artistId) => {
    let response = await axios_1.default.get(BASE_URL + "artist/" + artistId);
    return response.data;
};
exports.getArtistById = getArtistById;
const getAlbumsByArtistId = async (artistId) => {
    let response = await axios_1.default.get(BASE_URL + "artist/" + artistId + "/albums");
    return response.data;
};
exports.getAlbumsByArtistId = getAlbumsByArtistId;
const getTopByArtistId = async (artistId) => {
    let response = await axios_1.default.get(BASE_URL + "artist/" + artistId + "/top");
    return response.data;
};
exports.getTopByArtistId = getTopByArtistId;

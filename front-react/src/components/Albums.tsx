import React, { FC, useEffect, useState } from "react";
import { LazyImage } from "./LazyImage";
import { AlbumModel } from "models";
import axios from "axios";
import { getAlbumsByArtistId } from "api";

const AlbumItem: FC<{ album: AlbumModel }> = ({ album }) => {
    const { cover, year, title } = album;
    return (
        <div className="mt-4">
            <div className="w-full">
                <LazyImage alt={"cover"} className={"block h-full w-full object-cover object-center"} src={cover} />
            </div>
            <p className="mt-1 font-bold text-xl line-clamp-1">{title}</p>
            <span className="mt-1">{year}</span>
        </div>
    );
};

export const Albums: FC<{ artistId: string }> = ({ artistId }) => {
    const [albums, setAlbums] = useState<AlbumModel[]>([]);
    const [noAlbum, setNoAlbum] = useState(false);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        getAlbumsByArtistId(parseInt(artistId), source.token)
            .then((response) => {
                if (response.statusCode === 0) {
                    setAlbums(response.data);
                    setNoAlbum(response.data.length == 0);
                } else {
                    alert(response.message);
                }
            })
            .catch((err) => {
                if (!axios.isCancel(err)) {
                    alert(err);
                }
            });

        return () => {
            source.cancel();
        };
    }, [artistId]);

    return (
        <div>
            <span className="font-bold text-2xl">Albums</span>
            <div className="mt-8 grid overflow-hidden  grid-cols-2 grid-rows-3 sm:grid-cols-4 sm:grid-rows-3 md:grid-cols-4 md:grid-rows-3 gap-0 lg:grid-cols-6 lg:grid-rows-3">
                {albums.map((item, i) => (
                    <AlbumItem album={item} key={i} />
                ))}
            </div>
            {noAlbum ? "<span>No album found<span/>" : null}
        </div>
    );
};

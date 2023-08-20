import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { getArtistById } from "api";
import axios from "axios";
import { ArtistModel } from "models";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { TopTracks } from "./TopTracks";

export const Artist: FC<{ artistId: string }> = ({ artistId }) => {
    const [artist, setArtist] = useState<ArtistModel>();
    const [backgroundImg, setBackgroundImg] = useState("");

    const fans = useMemo(() => {
        if (!artist) return "";
        const { nbFan } = artist;
        return nbFan! >= 1000 ? Math.floor(nbFan / 1000) + "K" : nbFan;
    }, [artist]);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        getArtistById(parseInt(artistId), source.token)
            .then((response) => {
                if (response.statusCode === 0) {
                    setArtist(response.data);
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

    const onLoad = useCallback(() => setBackgroundImg(artist?.cover!), [artist]);

    useEffect(() => {
        if (!!artist) {
            const img = new Image();
            img.src = artist?.cover!;
            img.addEventListener("load", onLoad);

            return () => {
                img.removeEventListener("load", onLoad);
            };
        }
    }, [artist, onLoad]);

    return (
        <div
            className="w-full h-full"
            style={{
                backgroundImage: `url(${backgroundImg})`,
                backgroundSize: "75%",
                backgroundPositionY: "30%",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                className="w-full h-full flex justify-between  items-start p-2"
                style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
            >
                <div className="min-h-full pt-8 pl-10 sm:pl-24 sm:pt-28">
                    {!!artist ? (
                        <div>
                            <div className="text-5xl font-extrabold">{artist?.name}</div>
                            <div className="mt-3 text-lg">
                                <span className="font-bold">{fans}</span> <span>Fans</span>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <Skeleton height={50} width={250} />
                            <div className="mt-3">
                                <Skeleton height={30} width={90} />
                            </div>
                        </div>
                    )}
                    <hr className="w-12 mt-4 border-black" />
                </div>

                <div className="bg-white min-h-full d-none sm:inline sm:w-1/3 pt-10 sm:pt-16">
                    <TopTracks artistId={artistId} />
                </div>
            </div>
        </div>
    );
};

import React, { FC, useEffect, useState } from "react";
import { getTopByArtistId } from "api";
import axios from "axios";
import { TopTrackModel } from "models";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TrackItem: FC<{ track: TopTrackModel; index: number }> = ({ track, index }) => {
    const { rank, title } = track;
    return (
        <div className="flex justify-between border-b-2 pb-1 items-center mt-6">
            <div className="flex items-center">
                <span className="font-extrabold text-xl mr-2 sm:mr-4 md:mr-8">{index}</span>
                <span className="font-semibold text-sm text-gray-800 line-clamp-1">{title}</span>
            </div>
            <div>
                <span className="font-normal text-xs">{rank}</span>
            </div>
        </div>
    );
};

const TrackListPlaceholder: FC<{ count: number }> = ({ count }) => {
    return (
        <div>
            {Array.from(Array(count).keys()).map((_, i) => {
                return (
                    <div className="mt-3" key={i}>
                        <Skeleton count={1} height={40} />
                    </div>
                );
            })}
        </div>
    );
};

export const TopTracks: FC<{ artistId: string }> = ({ artistId }) => {
    const [tracks, setTracks] = useState<TopTrackModel[]>([]);

    useEffect(() => {
        const CancelToken = axios.CancelToken;
        const source = CancelToken.source();

        getTopByArtistId(parseInt(artistId), source.token)
            .then((response) => {
                if (response.statusCode === 0) {
                    setTracks(response.data);
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
        <div className="w-full min-h-full px-4 sm:px-8">
            <span className="font-bold text-2xl">Top tracks</span>
            {tracks.map((item, i) => (
                <TrackItem track={item} index={i + 1} key={i} />
            ))}
            {tracks.length === 0 ? <TrackListPlaceholder count={5} /> : null}
        </div>
    );
};

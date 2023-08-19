import { SearchResultModel } from "models";
import { FC, useMemo } from "react";

type Props = {
    item: SearchResultModel;
};

export const SearResultItem: FC<Props> = ({ item }) => {
    const {
        title,
        duration,
        artist: { name },
        album,
    } = item;

    const getDuration = useMemo(() => {
        return Math.floor(duration / 60) + ":" + (duration % 60);
    }, [duration]);

    return (
        <div>
            <div className="w-full">
                <img alt="cover" className="block h-full w-full object-cover object-center" src={album.cover} />
            </div>
            <p className="mt-4">{getDuration}</p>
            <p className="mt-1 font-bold text-xl">{title}</p>
            <span className="mt-1 font-semibold">
                By {name} <span className="hidden md:inline">({album.title})</span>
            </span>
        </div>
    );
};

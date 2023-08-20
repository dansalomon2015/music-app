import { SearchResultModel } from "models";
import { FC, useMemo } from "react";
import { LazyImage } from "./LazyImage";

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
                <LazyImage
                    alt={"cover"}
                    className={"block h-full w-full object-cover object-center"}
                    src={album.cover}
                />
            </div>
            <p className="mt-4">{getDuration}</p>
            <p className="mt-1 font-bold text-xl line-clamp-2">{title}</p>
            <span className="mt-1 font-semibold line-clamp-2">
                By {name} <span className="hidden md:inline">({album.title})</span>
            </span>
        </div>
    );
};

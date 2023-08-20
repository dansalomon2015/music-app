import { SearchResultModel } from "models";
import { FC, useMemo } from "react";
import { LazyImage } from "./LazyImage";
import { Link } from "react-router-dom";

type Props = {
    item: SearchResultModel;
};

export const SearResultItem: FC<Props> = ({ item }) => {
    const {
        title,
        duration,
        artist: { id, name },
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
            <Link to={`/artist/${id}`}>
                <span className="mt-1 font-semibold line-clamp-2 cursor-pointer hover:text-gray-600 ">
                    By {name} <span className="hidden md:inline">({album.title})</span>
                </span>
            </Link>
        </div>
    );
};

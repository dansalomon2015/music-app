import { SearchResultModel } from "models";
import { FC } from "react";

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
    return <div></div>;
};

import { FC } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchResultPlaceholderItem = () => {
    return (
        <div>
            <Skeleton count={1} height={230} />
            <div className="mt-3">
                <Skeleton count={1} width={50} />
            </div>
            <div className="mt-4">
                <Skeleton count={1} width={150} height={30} />
            </div>
            <div className="mt-3">
                <Skeleton count={1} width={180} />
            </div>
        </div>
    );
};

export const SearchResultPlaceholder: FC<{ count: number }> = ({ count }) => {
    return (
        <div className="mt-8 grid overflow-hidden px-2 md:px-4 grid-cols-2 grid-rows-3 gap-6 sm:grid-cols-4 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 md:grid-rows-3 md:gap-3.5 lg:grid-cols-6 lg:grid-rows-3">
            {Array.from(Array(10).keys()).map((_, i) => {
                return <SearchResultPlaceholderItem key={i} />;
            })}
        </div>
    );
};

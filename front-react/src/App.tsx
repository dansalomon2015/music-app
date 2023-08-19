import { useMemo, useState } from "react";
import { useSearch } from "hooks";
import { SearResultItem, SearchInput } from "components";

function App() {
    const [searchText, setSearchText] = useState("");
    const { result, loading } = useSearch({ queryParam: searchText });

    const noResultComponent = useMemo(() => {
        if (result.length === 0 && !loading)
            return (
                <div className="flex justify-center items-center font-semibold text-2xl">
                    {!!searchText.length ? "No data found !" : "Search your preferred songs "}
                </div>
            );
    }, [result, loading, searchText]);
    return (
        <div>
            <div className="py-3 px-3 md:px-4 md:py-5  bg-orange-500 shadow-md">
                <h1 className="text-white font-bold text-xl">Music App</h1>
            </div>

            <SearchInput value={searchText} onValueChange={setSearchText} loading={loading} />

            <div>
                <div className="mt-8 grid overflow-hidden px-2 md:px-4 grid-cols-2 grid-rows-3 gap-6 sm:grid-cols-4 sm:grid-rows-3 sm:gap-4 md:grid-cols-4 md:grid-rows-3 md:gap-3.5 lg:grid-cols-6 lg:grid-rows-3">
                    {result.map((item, i) => {
                        return <SearResultItem item={item} key={i} />;
                    })}
                </div>

                {noResultComponent}
            </div>
        </div>
    );
}

export default App;

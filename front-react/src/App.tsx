import { useState } from "react";
import { useSearch } from "hooks";
import { SearchInput } from "components";

function App() {
    const [searchText, setSearchText] = useState("");
    const { result, loading } = useSearch({ queryParam: searchText });
    return (
        <div className="App">
            <div className="py-3 px-3 md:px-4 md:py-5  bg-orange-500 shadow-md">
                <h1 className="text-white font-bold text-xl">Music App</h1>
            </div>

            <SearchInput value={searchText} onValueChange={setSearchText} />

            <div>
                <div className="grid overflow-hidden grid-cols-4 grid-rows-3 gap-3.5"></div>
            </div>
        </div>
    );
}

export default App;

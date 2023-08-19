import { FC } from "react";
import { Loader } from "./Loader";

type Props = {
    value: string;
    onValueChange: (s: string) => void;
    loading: boolean;
};

export const SearchInput: FC<Props> = ({ value, onValueChange, loading }) => {
    return (
        <div className="mt-4 pl-3 md:pl-0 pr-3 w-full md:w-96 ml-auto">
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-900 dark:text-gray-900"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        value={value}
                        onChange={(e) => {
                            onValueChange((e.target as HTMLInputElement).value);
                        }}
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-200 focus:ring-orange-400 focus:border-orange-600 dark:bg-gray-300 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-orange-500 dark:focus:border-orange-400"
                        placeholder="Search Songs, Artist, Albums..."
                        required
                    />

                    <div className="absolute right-7  bottom-2.5">{loading ? <Loader /> : null}</div>
                </div>
            </form>
        </div>
    );
};

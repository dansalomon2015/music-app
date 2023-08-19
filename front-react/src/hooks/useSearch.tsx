import { useState, useEffect } from "react";
import lodash from "lodash";
import { SearchResultModel } from "models";
import { search } from "api";

interface Props {
    queryParam: string;
}

const searchQuery = (
    queryParam: string,
    setResults: (result: any[]) => void,
    setLoading: (loading: boolean) => void
) => {
    search(queryParam).then((response) => {
        if (response.statusCode === 0) {
            setLoading(false);
            setResults(response.data);
        }
    });
};

const searchReq = lodash.debounce(searchQuery, 500, { leading: true, trailing: true });

export const useSearch = ({ queryParam }: Props) => {
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<SearchResultModel[]>([]);

    useEffect(() => {
        if (!queryParam) {
            setLoading(false);
            setResult([]);
            searchReq.cancel();
        } else {
            setLoading(true);
            searchReq(queryParam.trim(), setResult, setLoading);
        }
    }, [queryParam]);

    return {
        result,
        loading,
    };
};

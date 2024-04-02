import { searchResult } from "../../signals";
import { UserCard } from "../common/user_card";

export const SearchResult = () => {

    if(searchResult.value === null) return;
    if(searchResult.value.length === 0) return (<div className="w-full h-full flex items-center text-3xl text-gray-400"><div className="w-full ">Search Result Not Found</div></div>);

    return (<div className="h-full w-full" data-value={searchResult.value}>
        <div className="w-full h-8 text-lg text-left text-gray-400">Search Result</div>
        {searchResult.value?.length === 0 && <div className="w-full h-full flex items-center text-3xl text-gray-400"><div className="w-full ">Search Result Not Found</div></div>}
        <div className="w-full h-[calc(100%-4.5rem)] overflow-y-auto">
            {searchResult.value?.map((e, i) => <UserCard key={i} userData={e} />)}
        </div>
    </div>);
}
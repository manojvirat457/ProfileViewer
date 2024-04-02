import { useRef } from "react";
import { SearchResult } from "./search_result";
import { useApi } from "../../api/useApi";

export const HomePage = () => {
    const { fetchUsers } = useApi();
    const searchInputRef = useRef();

    const onSearchButtonClick = ()=>{
        fetchUsers(searchInputRef.current.value, ()=>{

        });
    }

    return (<div className="m-auto max-w-sm h-full w-full">
        <div className="w-full h-2/5">
            <div className="text-gray-600 font-[500] p-16 text-lg">Search GitHub User</div>
            <div className="relative mb-6">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg className="w-4 h-4 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </div>
                <input type="text" ref={searchInputRef} className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search" />
            </div>
            <button onClick={onSearchButtonClick} type="button" className="w-full focus:outline-none hover:ring-0 hover:outline-none text-white bg-[#38b896] hover:bg-green-600 font-medium rounded-[.2rem] text-base py-2 me-2 mb-2 my-4">Search</button>
        </div>
        <div className="w-full h-3/5 py-8">
            <SearchResult/>
        </div>
    </div>);
}
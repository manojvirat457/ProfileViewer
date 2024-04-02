import { activeTab } from "./signals";
import { useMemo } from "react";

export const Tab = ()=>{
    const tabList = useMemo(()=>[
        {
            displaytext : "Home",
            value : "home"
        },
        {
            displaytext : "History",
            value : "history"
        },
    ], []);

    const getTabsUI = (tabData, i)=>{
        let activeClass = i !== activeTab.value ? "text-black border-transparent hover:text-gray-700 hover:border-gray-300" : "text-blue-700 border-blue-700";  
        return (
            <div onClick={()=>(activeTab.value = i)} className={"h-full font-[500] px-10 pt-4 cursor-pointer justify-center border-b-4 rounded-sm "+activeClass} key={i}>{tabData.displaytext}</div>
        );
    }

    return (
        <div data-count={activeTab.value} className="w-full h-14 bg-white flex justify-end px-10">
            {tabList.map((tab, i)=>getTabsUI(tab, i))}
        </div>
    );
}
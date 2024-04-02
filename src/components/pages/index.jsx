import { useMemo } from "react";
import { activeTab } from "../signals"
import { HomePage } from "./home/home_page";
import { HistoryPage } from "./history/history_page";

export const Pages = () => {

    const tabPages = useMemo(() => [
        <HomePage />,
        <HistoryPage />
    ]);

    return (
        <div data-count={activeTab.value} className="w-full h-[calc(100%-3.5rem)]" >
            {tabPages.map((page, index) => {
                return (
                    <div key={index} className={"w-full h-full" + (index === activeTab.value ? "" : " hidden")}>{page}</div>
                )
            })}
        </div>
    )
}
import { useApi } from "../../api/useApi";
import { TableView } from "./table_view/table_view";

export const HistoryPage = () => {

    const { clearHistory } = useApi();

    const onClearButtonClick = () => {
        clearHistory();
    }

    return (<div className="m-auto max-w-3xl h-full w-full">
        <div className="w-full h-1/5">
            <div className="text-gray-600 font-[500] p-16 text-lg">Your Search History</div>
        </div>
        <div className="w-full h-3/5">
            <div className="h-[100%] overflow-y-auto px-2"><TableView /></div>
        </div>
        <div className="w-full h-1/5">
            <button onClick={onClearButtonClick} type="button" className="mt-16 focus:outline-none hover:ring-0 hover:outline-none text-white bg-[#38b896] hover:bg-green-600 font-medium rounded-[.2rem] text-base py-2 me-2 mb-2 my-4">Clear Search History</button>
        </div>
    </div>);
}
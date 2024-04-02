import { userHistory } from "../../../signals";
import { UserCard } from "../../common/user_card";
import './table_view.css';
export const TableView = () => {

    const getHeader = (user, i) => {
        return (
            <tr key={i} className="bg-gray-100 text-gray-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                <th className="p-3 text-left font-normal">Search Term</th>
                <th className="p-3 text-left font-normal">Search Result</th>
            </tr>
        );
    }

    const getUserCardList = (users)=>
    {
        if(users.length === 0) return (<div className="w-full h-full flex items-center text-xl text-gray-400"><div className="w-full ">Search Result Not Found</div></div>);
        return (<div className="h-[300px] overflow-y-auto">{users.map((user, i) => <UserCard key={i} userData={user} />)}</div>);
    } 

    const getData = (user, i) => {
        return (<tr key={i} className="w-full flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
            <td className="border-grey-light border text-black hover:bg-gray-100 p-3">{user.key}</td>
            <td className="border-grey-light border text-black hover:bg-gray-100 p-3 truncate">{getUserCardList(user.data)}</td>
        </tr>);
    }

    const sortedUserData = [...userHistory.value];
    sortedUserData.reverse();

    if (userHistory.value.length === 0) {
        return (<div className="w-full h-full flex items-center text-3xl text-gray-400"><div className="w-full ">No Search History</div></div>);
    }

    return (<table data-value={userHistory.value} className="overflow-hidden rounded-lg border-[1px] border-gray-300 w-full h-full flex flex-row flex-no-wrap sm:bg-white sm:shadow-lg">
        <thead className="text-white">
            {sortedUserData.map((e, i) => getHeader(e, i))}
        </thead>
        <tbody className="h-[90%] w-full overflow-auto">
            {sortedUserData.map((e, i) => getData(e, i))}
        </tbody>
    </table>);
}
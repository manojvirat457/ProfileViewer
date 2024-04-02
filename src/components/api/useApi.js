import { useEffect } from "react";
import { searchResult, userHistory } from "../signals";

const storeKey = "search-history";
export const useApi = () => {

    useEffect(() => {
        const historyString = localStorage.getItem(storeKey);
        if (!historyString) return;
        userHistory.value = JSON.parse(historyString);
    }, []);

    const clearHistory = ()=>{
        userHistory.value = [];
        localStorage.removeItem(storeKey);
    }

    const fetchUsers = async (searchKey, callback = () => { }) => {
        try {
            const response = await fetch(import.meta.env.CONFIG.API_URL + `?q=${searchKey}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const responseData = await response.json();
            let data = responseData.items.map(user => ({ login: user.login, avatar_url: user.avatar_url }));
            searchResult.value = data;
            userHistory.value.push({ key: searchKey, data });
            localStorage.setItem(storeKey, JSON.stringify(userHistory.value));
            callback(true);
        } catch (error) {
            console.log(error);
            callback(false);
            searchResult.value = [];
        }
    };
    return { fetchUsers, clearHistory };
}
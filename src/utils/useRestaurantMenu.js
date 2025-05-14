import { useEffect, useState } from "react";
import { RESTAURANT_MENU_URL } from "./constants";

export default function useRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
        console.log("useEffect called")
    }, []);

    const fetchData = async () => {
        const res = await fetch(RESTAURANT_MENU_URL + resId);
        const resData = await res.json();
        setResInfo(resData);

    }
    return resInfo;
}

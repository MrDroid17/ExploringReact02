import { useEffect, useState } from "react";
import Shimmer from "./shimmer/Shimmer";
import { RESTAURANT_MENU_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    const { resId } = useParams();
    useEffect(() => {
        fetchData();
    }, []);
    fetchData = async () => {
        const res = await fetch(RESTAURANT_MENU_URL + resId);
        const resData = await res.json();
        const restaurents = resData?.data?.cards[2]?.card?.card?.info;
        const resDetails = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
        console.log(restaurents);
        console.log(resDetails);
        setResInfo(restaurents);
        setMenuItems(resDetails);
    }

    // const { name, cuisines, costForTwoMessage } = resInfo;

    if (resInfo === null) {
        return <Shimmer />
    }
    return (
        <div className="menu">
            <h1>{resInfo?.name}</h1>
            <h4>{resInfo?.cuisines.join(", ")}</h4>
            <h3>{resInfo?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    menuItems.map(item => (
                        < li key={item?.card?.info?.id}>
                            {item?.card?.info?.name} - {" Rs. "} {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}
                        </li>
                    ))
                }

            </ul>
        </div >
    )
}

export default RestaurantMenu;
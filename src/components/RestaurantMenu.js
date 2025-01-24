import { use, useEffect, useState } from "react";
import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();
    const resData = useRestaurantMenu(resId);
    /**
     * Return shimmer if no data found
     */
    if (!resData) {
        return <Shimmer />;
    }

    const { info } = resData?.data?.cards[2]?.card?.card;
    const { itemCards } = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;


    return (
        <div className="menu">
            <h1>{info?.name}</h1>
            <h4>{info?.cuisines.join(", ")}</h4>
            <h3>{info?.costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map(item => (
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
import { use, useEffect, useState } from "react";
import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

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
    const category = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card => card?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("Category", category);


    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{info?.name}</h1>
            <p className="font-bold text-lg">
                {info?.cuisines.join(", ")} - {info?.costForTwoMessage}
            </p>
            {
                category.map((cat, index) => (
                    <RestaurantCategory key={index} category={cat} />
                ))
            }
        </div >
    )
}

export default RestaurantMenu;
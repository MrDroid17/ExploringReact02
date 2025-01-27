import { use, useEffect, useState } from "react";
import Shimmer from "./shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const [expandedListIndex, setExpandedListIndex] = useState(null);
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


    return (
        <div className="text-center">
            <h1 className="font-bold my-5 text-2xl">{info?.name}</h1>
            <p className="font-bold text-lg">
                {info?.cuisines.join(", ")} - {info?.costForTwoMessage}
            </p>
            {
                category.map((cat, index) => (
                    /**
                     * restaurant category is controlled componnet
                     * Lifting state up - showList is maintened in parent component instead of restaurant category itself
                     */
                    <RestaurantCategory
                        key={cat?.card?.card?.title}
                        category={cat}
                        showList={expandedListIndex === index ? true : false}
                        setExpandedListIndex={() => { setExpandedListIndex(index) }}
                    />
                ))
            }
        </div >
    )
}

export default RestaurantMenu;
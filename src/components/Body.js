import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/mockData";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    const [restaurantCount, setRestaurantCount] = useState(resList.length)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(res => res.info.avgRating > 4.5)
                    setListOfRestaurant(filterList);
                    setRestaurantCount(filterList.length);
                }}
                >Top Rated Restaurant</button>
                <button className="filter-btn" onClick={() => {
                    setListOfRestaurant(resList);
                    setRestaurantCount(resList.length);
                }}
                >Clear Filter</button>
                <div>Count {restaurantCount}</div>
            </div>
            <div className="restaurant-container">
                {
                    listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                }

            </div>
        </div>
    )
}

export default Body;
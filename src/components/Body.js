import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerContainer from "./shimmer/ShimmerContainer";
import { SWIGGY_RESTAURANTA_URL } from "../utils/constants";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [restaurantCount, setRestaurantCount] = useState(0)

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const apiData = await fetch(SWIGGY_RESTAURANTA_URL);
        const actualResList = await apiData.json();
        const resList = actualResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(resList);
    }


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

            {
                /**
                * Conditional rendering
                */
                listOfRestaurant.length === 0 ? <ShimmerContainer /> :
                    <div className="restaurant-container">
                        {
                            listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
                        }

                    </div>
            }
        </div>
    )
}

export default Body;
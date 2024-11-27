import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerContainer from "./shimmer/ShimmerContainer";



const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([])
    const [restaurantCount, setRestaurantCount] = useState(0)

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const apiData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5743545&lng=88.3628734&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const actualResList = await apiData.json();
        setListOfRestaurant(actualResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerContainer from "./shimmer/ShimmerContainer";
import { SWIGGY_RESTAURANTA_URL } from "../utils/constants";
import { Link } from "react-router-dom";


const Body = () => {
    console.log("Body Render");

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [restaurantCount, setRestaurantCount] = useState(0);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const apiData = await fetch(SWIGGY_RESTAURANTA_URL);
        const actualResList = await apiData.json();
        const resList = actualResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(resList);
        setFilteredRestaurant(resList);
        setRestaurantCount(resList.length);
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filterList = listOfRestaurant.filter(res => res.info.avgRating > 4.5)
                    setFilteredRestaurant(filterList);
                    setRestaurantCount(filterList.length);
                }}
                >Top Rated Restaurant</button>
                <button className="filter-btn" onClick={() => {
                    // fetchResList(); // to get latest data from apis
                    setListOfRestaurant(listOfRestaurant);
                    setFilteredRestaurant(listOfRestaurant);
                    setRestaurantCount(listOfRestaurant.length);
                }}
                >Clear Filter</button>
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filteredRes = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRes);
                        setRestaurantCount(filteredRes.length)
                    }}>Search</button>
                </div>
                <div className="count">Count {restaurantCount}</div>
            </div>

            {
                /**
                * Conditional rendering
                */
                listOfRestaurant.length === 0 ? <ShimmerContainer /> :
                    <div className="restaurant-container">
                        {
                            filteredRestaurant.map((restaurant) => (
                                <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
                                    <RestaurantCard resData={restaurant} />
                                </Link>
                            ))
                        }

                    </div>
            }
        </div>
    )
}

export default Body;
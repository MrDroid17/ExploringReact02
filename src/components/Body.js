import RestaurantCard, { PromotedRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerContainer from "./shimmer/ShimmerContainer";
import { SWIGGY_RESTAURANTA_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
    console.log("Body Render");

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [restaurantCount, setRestaurantCount] = useState(0);
    const [searchText, setSearchText] = useState("");
    const PromotedResCard = PromotedRestaurantCard(RestaurantCard);

    useEffect(() => {
        fetchResList();
    }, [])

    const fetchResList = async () => {
        const apiData = await fetch(SWIGGY_RESTAURANTA_URL);
        const actualResList = await apiData.json();
        const resList = actualResList?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        /**
         * Add Promoted key for testing Higher Order Component(HOC) as notting from swiggy api
         */
        const promotedArrayIndex = [0, 2, 3, 5, 8, 7];
        resList.map((res, index) => promotedArrayIndex.includes(index) ? (res.info.promoted = true) : (res.info.promoted = false));

        setListOfRestaurant(resList);
        setFilteredRestaurant(resList);
        setRestaurantCount(resList.length);
    }


    const onlineStatus = useOnlineStatus();
    if (!onlineStatus) {
        return <div className="offline">You are offline. Please check your network connection and try again</div>
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn bg-gray-100 hover:bg-gray-300 px-2 rounded-lg" onClick={() => {
                    const filterList = listOfRestaurant.filter(res => res.info.avgRating > 4.5)
                    setFilteredRestaurant(filterList);
                    setRestaurantCount(filterList.length);
                }}
                >Top Rated Restaurant</button>
                <button className="filter-btn  bg-gray-100 hover:bg-gray-300 px-2 rounded-lg" onClick={() => {
                    // fetchResList(); // to get latest data from apis
                    setListOfRestaurant(listOfRestaurant);
                    setFilteredRestaurant(listOfRestaurant);
                    setRestaurantCount(listOfRestaurant.length);
                }}
                >Clear Filter</button>
                <div className="search mt-2  p-2">
                    <input type="text" className="search-box border-2 rounded-lg" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className=" bg-gray-100 hover:bg-gray-300 p-2 rounded-lg" onClick={() => {
                        const filteredRes = listOfRestaurant.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRes);
                        setRestaurantCount(filteredRes.length)
                    }}>Search</button>
                </div>
                <div className="count pt-3">Count: {restaurantCount}</div>
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
                                    {
                                        restaurant.info.promoted ? (
                                            <PromotedResCard resData={restaurant} />
                                        ) : (
                                            <RestaurantCard resData={restaurant} />)
                                    }
                                </Link>
                            ))
                        }

                    </div>
            }
        </div>
    )
}

export default Body;
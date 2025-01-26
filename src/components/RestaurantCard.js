import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        sla,
        costForTwo,
    } = props?.resData?.info;

    return (
        <div className="restaurant-card rounded-lg bg-gray-100 hover:bg-gray-300">
            <img className="res-img rounded-lg" src={CDN_URL + cloudinaryImageId} alt="restaurant Image" />
            <h3 className="card-title">{name}</h3>
            <div className="card-body">
                <p>{cuisines.join(", ")}</p>
                <p>Rating <strong>{avgRating}</strong></p>
            </div>
            <div className="card-footer">
                <div><strong>{sla.deliveryTime}</strong> min</div>
                <div><strong>{costForTwo}</strong></div>
            </div>
        </div>
    )

}

export default RestaurantCard;

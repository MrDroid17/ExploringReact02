import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
    const { title, itemCards } = category?.card?.card;
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="w-6/12  my-5 mx-auto">
            <div className="flex justify-between bg-gray-50 shadow-md p-3 cursor-pointer" onClick={() => { 
                setIsCollapsed(!isCollapsed) 
                }}>
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
            {isCollapsed ? <></> : <ItemList items={itemCards} />}

        </div>
    )
}

export default RestaurantCategory;
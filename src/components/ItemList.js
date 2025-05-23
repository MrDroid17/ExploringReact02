import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div>
            <ul className="text-left p-2 m-1">
                {
                    items.map(item => (
                        <li key={item?.card?.info?.id} className="p-5 mt-1 bg-gray-100 shadow-sm ">

                            <div className="flex justify-between">
                                <div className="w-10/12 pr-5">
                                    <div className="flex justify-between">
                                        <p className="font-semibold mr-5">{item?.card?.info?.name}</p>
                                        <p className="semi-bold">Rs.  <span className="font-bold text-xl inline mr-2">{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span></p>
                                    </div>
                                    <p className="text-xs text-gray-400">
                                        {item?.card?.info?.description}
                                    </p>
                                </div>
                                <div className="w-2/12 relative">

                                    {/* 
                                onClick={handleAddItem(item)}
                                onClick={() => handleAddItem(item)}
                                onClick={handleAddItem}
                                know the difference between above three 
                                */}

                                    <button className="absolute inset-x-6 bottom-1 bg-black opacity-80 text-white font-bold shadow-lg rounded-lg px-3 p-1"
                                        onClick={() => handleAddItem(item)}> Add +</button>
                                    <img className="rounded-md" width="220px" src={CDN_URL + item?.card?.info?.imageId} alt="Item Image" />
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

export default ItemList;
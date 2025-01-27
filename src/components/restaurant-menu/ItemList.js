import { CDN_URL } from "../../utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            <ul className="text-left p-2 m-1">
                {
                    items.map(item => (
                        <li key={item?.card?.info?.id} className="p-5 mt-1 bg-gray-100 shadow-sm ">
                            <div className="flex justify-between">
                                <p className="font-semibold mr-5">{item?.card?.info?.name}</p>
                                <p className="semi-bold">Rs.  <span className="font-bold text-xl inline mr-2">{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span></p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-xs text-gray-400 pr-5">
                                    {item?.card?.info?.description}
                                </p>
                                <div className="">
                                    <button className="bg-white text-red-200 shadow-md rounded-md px-2"> Add +</button>
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
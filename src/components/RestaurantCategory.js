import ItemList from "./ItemList";

const RestaurantCategory = ({ category, showList, setExpandedListIndex }) => {
    const { title, itemCards } = category?.card?.card;

    handleClick = () => {
        setExpandedListIndex();
    }

    return (
        <div className="w-6/12  my-5 mx-auto">
            <div className="flex justify-between bg-gray-50 shadow-md p-3 cursor-pointer" onClick={handleClick}>
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span className="">⬇️</span>
            </div>
            {showList && <ItemList items={itemCards} />}

        </div>
    )
}

export default RestaurantCategory;
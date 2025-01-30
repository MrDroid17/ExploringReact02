import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    /**
     * Subscribing to the  redux store
     * should be carefull while subscribing to store be precise for the data you need
     */
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="font-bold">Cart</h1>
            <div className="w-6/12 mx-auto">
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                    onClick={handleClearCart}
                >Clear Cart</button>
                {
                    cartItems.length === 0 && <p className="text-gray-400">Cart is Empty. Add Items to the cart</p>
                }
                <ItemList items={cartItems} />
            </div>

        </div>
    )
}

export default Cart
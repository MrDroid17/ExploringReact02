import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";


const AppStore = configureStore({
    reducer: {
        cart: cartReducer   // cartReducer is imported from the cartSlice.js
    }
})

export default AppStore;
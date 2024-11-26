import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Headers";
import Body from "./components/Body";

/**
 * Not using keys (not acceptable) <<<< index as key  <<< unique id(Best practice)
 */


/**
 * Header
 *  -Logo
 *  -Nav items
 *  -Cart
 * Body 
 *  -Search
 *  -RestaurantContainer
 *      - Restaurant card
 *          - img
 *          - Name of res, star rating, cuisine, delivery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */





const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


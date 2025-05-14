import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Headers";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/AppStore";
import Cart from "./components/Cart";
import DailyLeetCode from "./components/DailyLeetCode";
/**
 * 
 * Chucking, 
 * Code Splitting, 
 * Dynamic Bundling,
 * Lazy Loading 
 * on demand loading
 */
// lazy Loading 
const Grocery = lazy(() => import("./components/Grocery"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ContactUs = lazy(() => import("./components/ContactUs"));

const AppLayout = () => {

    const [userName, setUserName] = useState();
    // Updating data of context api
    useEffect(() => {
        const data = { name: "Sobhit Kumar" };
        setUserName(data.name);
    }, [])

    return (
        // Using redux provider
        <Provider store={appStore}>
            {/* using Context provider */}
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className="app">
                    {/* <UserContext.Provider value={{loggedInUser: userName}}> */}
                    <Header />
                    {/* </UserContext.Provider> */}
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/about",
                element: <Suspense fallback="Loading..."><AboutUs /></Suspense>
            },
            {
                path: "/contact",
                element: <Suspense fallback="Loading..."><ContactUs /></Suspense>
            },
            {
                path: "/grocery",
                element: <Suspense fallback="Loading..."><Grocery /></Suspense>
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/daily/leetcode",
                element: <DailyLeetCode /> 
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ],
    }
],
    {
        future: {
            v7_startTransition: true,
        },
    }
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


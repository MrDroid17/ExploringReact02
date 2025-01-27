import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Headers";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
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
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
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


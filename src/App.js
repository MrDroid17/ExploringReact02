import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Headers";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

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
                element: <AboutUs />
            },
            {
                path: "/contact",
                element: <ContactUs />
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


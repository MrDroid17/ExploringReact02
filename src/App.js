import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Headers";
import Body from "./components/Body";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />
    },
    {
        path: "/about",
        element: <AboutUs />
    },
    {
        path: "/contact",
        element: <ContactUs />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


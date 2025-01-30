import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { HEADER_LINKS } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    console.log("Header Render");
    const [loginButtonLabel, setLoginButtonLabel] = useState("Login");

    const { loggedInUser } = useContext(UserContext);

    useEffect(() => {
        console.log("Header useEffect called");
    }, [loginButtonLabel])

    const onlineStatus = useOnlineStatus();

    /**
     * Subscribing to the  redux store 
     */
    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="header">
            <div className="img-container">
                <img className="logo"
                    src={LOGO_URL} alt="Food Icon"
                />
            </div>
            <div className="nav-items">
                <ul>
                    {/* For Emoji => Press Windows key + . (period) or Windows key + ; (semicolon) */}
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🔴"}
                    </li>
                    {
                        /**
                         * All the Headers Links
                         */
                        HEADER_LINKS.map((link, index) => (
                            <li key={index} className="hover:bg-gray-300 rounded-md">

                                <Link to={link.link} className="font-normal">{link.name === "Cart" ? (`${link.name}-(${cartItems.length} Items) `) : link.name}</Link>
                            </li>
                        ))

                    }
                    <li className="">User : <strong>{loggedInUser}</strong></li>
                    <button variant="primary"
                        className={loginButtonLabel == "Login" ? "bg-green-100 hover:bg-green-300 rounded-md px-3 h-10 mt-3" : "bg-gray-100 hover:bg-gray-300 rounded-md  px-3 h-10 mt-3"} onClick={() => {
                            setLoginButtonLabel(loginButtonLabel == "Login" ? "Logout" : "Login")
                        }}>
                        {loginButtonLabel}
                    </button>
                </ul>
            </div>
        </div >
    )
}


export default Header;
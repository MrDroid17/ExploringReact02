import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    console.log("Header Render");
    const [loginButtonLabel, setLoginButtonLabel] = useState("Login");
    useEffect(() => {
        console.log("Header useEffect called");
    }, [loginButtonLabel])

    const onlineStatus = useOnlineStatus();
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
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        setLoginButtonLabel(loginButtonLabel == "Login" ? "Logout" : "Login")
                    }}>
                        {loginButtonLabel}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
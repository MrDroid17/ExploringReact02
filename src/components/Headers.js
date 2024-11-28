import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    console.log("Header Render");
    const [loginButtonLabel, setLoginButtonLabel] = useState("Login");
    useEffect(() => {
        console.log("Header useEffect called");
    }, [loginButtonLabel])
    return (
        <div className="header">
            <div className="img-container">
                <img className="logo"
                    src={LOGO_URL} alt="Food Icon"
                />
            </div>
            <div className="nav-items">
                <ul>
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
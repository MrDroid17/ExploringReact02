import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";

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
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
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
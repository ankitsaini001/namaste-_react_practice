import { useState } from "react";
import { LOGO } from "../Utils/constants";
const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Sign In');
    return (
        <div className="header">
            <div className="app-logo">
                <img
                    src={LOGO}
                />
            </div>
            <div className="header-menu">
                <ul className="nav-items">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <div className="signin-btn">
                    <button className="signup-btn" onClick={() => {
                        // let btnValue = "Sign Up";
                        btnNameReact === "Sign In" ? setBtnNameReact('Sign Up') : setBtnNameReact('Sign In');
                    }}>{btnNameReact}</button>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Header;
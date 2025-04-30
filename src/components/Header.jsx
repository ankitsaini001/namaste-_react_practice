import { LOGO } from "../Utils/constants";
const Header = () => {
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
          </ul>
        </div>
      </div>
    );
  };

  export default Header;
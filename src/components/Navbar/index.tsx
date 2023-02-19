import { NavLink } from "react-router-dom";
import "./style.css";
const NavBar: React.FC = () => {
  return (
    <>
      <div className="top-navbar-wrapper">
        <div className="container">
          <div className="top-navbar-container">
            <div className="logo-text">Dealerz.</div>
            <div className="right-section">
              <div className="nav-text">Call Center</div>
              <div className="nav-text">Shipping & Returns</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="bottom-navbar-container">
          <NavLink to="/" className="nav-text-link">
            Home
          </NavLink>
          <NavLink to="/shop" className="nav-text-link">
            Shop
          </NavLink>
          <NavLink to="/" className="nav-text-link">
            About
          </NavLink>
          <NavLink to="/" className="nav-text-link">
            Blog
          </NavLink>
          <input
            className="home-search-bar"
            placeholder="Search what you need"
          ></input>
          <NavLink to="/" className="nav-text-link">
            Promo
          </NavLink>
          <NavLink to="/" className="nav-text-link">
            Promo
          </NavLink>
          <NavLink to="/" className="nav-text-link">
            Promo
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NavBar;

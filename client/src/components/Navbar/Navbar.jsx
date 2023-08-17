import { useState } from "react";
import Button from "../Button/Button";

import "./Navbar.scss";
import { hamburger } from "../../assets";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menu = (
    <div className="burger-menu">
      <a>
        <span>Solutions</span>
      </a>
      <a>
        <span>Industries</span>
      </a>
      <a>
        <span>Use Cases</span>
      </a>
      <a>
        <span>Features</span>
      </a>
      <a>
        <span>Partners</span>
      </a>
      <a>
        <span>Resources</span>
      </a>
      <a>
        <span>About Us</span>
      </a>
    </div>
  );

  return (
    <div className="navbar burger">
      {/*logo*/}
      {/* navlinks */}
      <div className="left">
        <a>
          <span>Solutions</span>
        </a>
        <a>
          <span>Industries</span>
        </a>
        <a>
          <span>Use Cases</span>
        </a>
        <a>
          <span>Features</span>
        </a>
        <a>
          <span>Partners</span>
        </a>
        <a>
          <span>Resources</span>
        </a>
        <a>
          <span>About Us</span>
        </a>
      </div>

      <div className="right">
        <a href="/contact">
          <Button text="Contact Us" />
        </a>
        <Button text="SME" />
      </div>

      {/* burger menu */}
      <img
        className="hamburger"
        onClick={() => setShowMenu(!showMenu)}
        src={hamburger}
        alt=""
      />
      {showMenu && menu}
    </div>
  );
};

export default Navbar;

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
    <nav className="navbar burger">
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
        <Button text="Contact Us" />
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
    </nav>
  );
};

export default Navbar;

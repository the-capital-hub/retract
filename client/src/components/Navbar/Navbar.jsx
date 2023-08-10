import Button from "../Button/Button";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;

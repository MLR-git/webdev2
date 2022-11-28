import { Link, NavLink } from "react-router-dom";
import HomeButton from "./HomeButton";
//Note that importing a css file will automatically apply styles in React
import "./Header.css";

import NavButton from "./NavButton";

const buttonStyle = {
  backgroundColor: "green",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  };

export function Header() {
  return (
    <div>
    <div>
      <HomeButton />
    </div>
    <div>
      <table>
        <tr>
          <td>
            <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive" } 
            to="/">
              {/* Also totally possible to include a button element inside a NavLink or Link*/}
              <button style={buttonStyle}>
                Home
              </button>
            </NavLink>
          </td>
          <td>
            {/* However, if we want to change the button based on whether or not it is active, 
              we can't simply take the isActive value and apply it to the button. The implementation
              of this is found in the NavButton component */}
            <NavButton to="/about" label="About" />
          </td>
          <td>
            <NavButton to="/contact" label="Contact Us" />
          </td>
        </tr>
      </table>
    </div>
    </div>
  );
}

export default Header;
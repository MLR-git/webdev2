import HomeButton from "./HomeButton";
//Note that importing a css file will automatically apply styles in React

import NavButton from "./NavButton";



export function Header() {
  return (
    <div style={{ backgroundColor: "LightSkyBlue" }}>
    <div>
      <table style={{ width: "100%"}}>
        <tr>
          <td style={{ width: "33.33%", textAlign: "center"}}>
          <NavButton to="/" label="Home" />
          </td>
          <td style={{ width: "33.33%", textAlign: "center"}}>
            {/* However, if we want to change the button based on whether or not it is active, 
              we can't simply take the isActive value and apply it to the button. The implementation
              of this is found in the NavButton component */}
            <NavButton to="/about" label="About" />
          </td>
          <td style={{ width: "33.33%", textAlign: "center"}}>
            <NavButton to="/contact" label="Contact Us" />
          </td>
        </tr>
      </table>
    </div>
    </div>
  );
}

export default Header;
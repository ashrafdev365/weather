import React from "react";
import "./nav.css";

const Navbar = () => {
  //this is for mobile open close menu
  const [menu, setmenu] = React.useState("");
  React.useEffect(() => {
    window.screen.width < 1050 ? setmenu("0%") : setmenu("320px");
  }, []);
  const handleOpenMenu = () => {
    return setmenu("60%");
  };
  const handleCloseMenu = () => {
    return setmenu("0%");
  };
  return (
    <>
      <nav>
        <div className="nav_div">
          <div className="logo_div">
            <img src="images/images.png" alt="covid19 image" />
            <p>WEATHER</p>
          </div>

          <div className="menu">
            <i className="fas fa-bars" onClick={handleOpenMenu}></i>
          </div>
          <div className="slide" style={{ width: menu }}>
            <div className="crose" onClick={handleCloseMenu}>
              <i className="fal fa-times"></i>
            </div>
            <ul className="nav_links_div">
              <li>Home</li>
              <li>developer</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

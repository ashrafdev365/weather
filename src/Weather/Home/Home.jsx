import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Navbar/Footer";
import "./Home.css";
import Data from "../Data/Data";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {

  React.useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, [])
  return (
    <>
      <Navbar />
      <header>
       <div className="header_div" data-aos={"zoom-out"}>
       <div className="header_content">
          <p>Current Weather</p>
          <h1>Weather forecasts for thousands of locations around the world</h1>
        </div>
        <div className="header_image">
          <img src="images/weather-animate.svg" alt="weather" />
        </div>
       </div>
      </header>
      <Data />
<Footer />

    </>
  );
};

export default Home;

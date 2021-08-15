import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer_main_div">
        <div className="footer_text">
          <i className="fal fa-envelope"></i>
          <h1>ADD YOURSELF TO MY EMAIL LIST</h1>
          <p>
            Get updates on my projects and events, as well as a curated
            selection of my best content.
          </p>
        </div>

        <div className="email_div">
          <input type="email" placeholder="Email.." />
          <button>Submit</button>
        </div>
        <div className="social_div">
         <a href="https://www.facebook.com/ashrafdev.ashraf"> <i className="fab fa-facebook-square"></i></a>
         <a href="https://www.instagram.com/ashrafdev_365/"> <i className="fab fa-instagram"></i></a>
         <a href="https://twitter.com/Ashraf_365"> <i className="fab fa-twitter"></i></a>
         <a href="https://www.linkedin.com/in/ashraf-dev-297301206/"> <i className="fab fa-linkedin"></i></a>
        </div>
        <div className="footer_logo_div">
          <img src="images/images.png" alt="weather" />
          <p>WEATHER</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

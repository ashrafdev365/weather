import React, { useState, useEffect } from "react";
import Flag from "./Flag";
import Others from "./Others";
import "./data.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Data = () => {
  const [current, setcurrent] = useState();
  const [search, setsearch] = useState("");
  const [submit, setsubmit] = useState("bangladesh");
  // Call Api
  let currentApi = `http://api.openweathermap.org/data/2.5/weather?q=${submit}&appid=aabbfb93a86b2cfd6cd5beb5650d7539&units=metric`;
  const getApiData = async () => {
    let res = await fetch(currentApi);
    let callData = await res.json();
    setcurrent(callData);
  };

  useEffect(() => {
    getApiData();

    AOS.init({
      duration: 2000,
    });
  }, [submit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setsubmit(search);
  };

  let date = new Date().getDate();
  return (
    <>
      {!current ? (
        <div>No data found</div>
      ) : (
        <div className="weather_main_div">
          <div className="weather_div">
            <div className="search_div" data-aos={"zoom-out-up"}>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search Place"
                  onChange={(e) => setsearch(e.target.value)}
                />
              </form>
              <p>Date: {date}</p>
            </div>

            <div className="weather_data">
              <div className="tem_main_div" data-aos={"zoom-out-up"}>
                <div className="country_name_div">
                  <h1>{current.name}</h1>
                  <h2>{current.weather[0].description}</h2>
                  <span>
                    {current.weather[0].description === "clear sky" ? (
                      <img src="images/icons8-clouds-100.png" alt="clouds" />
                    ) : (
                      <img src="images/icons8-storm-100.png" alt="clouds" />
                    )}
                  </span>
                </div>

                <div className="temp_div">
                  <h1 className="temp">{current.main.temp}</h1>
                </div>
              </div>

              <hr />

              <div>
                <Flag name={current.sys.country} country={current.name} />
              </div>

              <div className="box_main_div">
                <Others name="Himudity" value={current.main.humidity} />
                <Others name="sea_level" value={current.main.pressure} />
                <Others name="pressure" value={current.main.sea_level} />
                <Others name="speed" value={current.wind.speed} />
                <Others name="deg" value={current.wind.deg} />
                <Others name="clouds" value={current.clouds.all} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Data;

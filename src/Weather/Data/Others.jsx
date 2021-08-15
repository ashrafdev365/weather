import React from 'react'
import './data.css'
import AOS from "aos";
import "aos/dist/aos.css";
const Others = ({ name, value }) => {
    React.useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, [])
    return (
        <>
         <div className="weather_box" data-aos={"fade-up"} data-aos-anchor-placement={"center-bottom"}>
             <h1>{name}</h1>
             <p>{value}</p>
         </div>   
        </>
    )
}

export default Others

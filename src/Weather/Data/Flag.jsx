import React from "react";
import './data.css'
const Flag = ({ name, country }) => {
   
let flag = `https://www.countryflags.io/${name}/flat/64.png`
  return (
    <>
    <div className="flag_div">
    <img src={flag} />
      <h1>{country}</h1>
    </div>
     
    </>
  );
};

export default Flag;

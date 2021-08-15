import React from 'react'
import './data.css'

const Others = ({ name, value }) => {
    return (
        <>
         <div className="weather_box">
             <h1>{name}</h1>
             <p>{value}</p>
         </div>   
        </>
    )
}

export default Others

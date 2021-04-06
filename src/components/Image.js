import React from 'react'
import "./Image.css";
import testimage from './assets/CGL.jpg'

const Image = () => {
    return (

        <div className="imgCont">
            <img src={testimage} alt="Nature" className="responsive"></img>
        </div>

    )
}

export default Image

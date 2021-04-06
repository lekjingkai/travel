import React from 'react'
import "./FullImage.css"

import testimage from './assets/nature.jpg'

const FullImage = (props) => {
    return (
        <div className='headercontainer3'>

            <div className='image3' style={{backgroundImage:`url(${testimage})`}}>
            </div>

            <div className="centered3">
                <h1>Aspiring front-end developer</h1>
                <p>I have a passion to code aesthetically</p>
            
            </div>
        </div>
    )
}

export default FullImage

import React from 'react'
import PropTypes from "prop-types";
import "./ContentContainer.css"



const contentContainer = (props) => {
    return (
        <div className="contentContainer">
            <h1 id={props.id} className="contentTitle">{props.title}</h1>
            {props.children}
        </div>
    )
}

contentContainer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
  };

export default contentContainer

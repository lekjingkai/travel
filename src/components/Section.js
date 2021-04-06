import React from 'react'
import PropTypes from "prop-types";

const Section = (props) => {
    return (
        <div className="section" style={{backgroundColor:props.bgColor}}>
        <h3>{props.content}</h3>
        {props.children}
      </div>
    )
}

Section.defaultProps = {
    bgColor: 'cyan',
  }
  
  Section.propTypes = {
    bgColor: PropTypes.string,
    content: PropTypes.string,
  };

export default Section

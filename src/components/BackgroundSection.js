import React from 'react'
import PropTypes from "prop-types";
import "./BackgroundSection.css";

const BackgroundSection = (props) => {
    return (
        <div className="bgSection" style={{ height: props.bgHeight, backgroundColor: props.bgColor, minHeight: props.minBgHeight  }}>
            {props.children}
        </div>
    )
}

BackgroundSection.defaultProps = {
    bgColor: '#FFFFFF',
  }
  
  BackgroundSection.propTypes = {
    bgHeight: PropTypes.string,
    bgColor: PropTypes.string,
    minBgHeight: PropTypes.string,
  };

export default BackgroundSection

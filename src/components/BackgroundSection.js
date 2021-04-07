import React from 'react'
import PropTypes from "prop-types";
import "./BackgroundSection.css";

const BackgroundSection = (props) => {
    return (
        <div id={props.id} className="bgSection" style={{ height: props.bgHeight, backgroundColor: props.bgColor, minHeight: props.minBgHeight  }}>
            {props.children}
        </div>
    )
}

BackgroundSection.defaultProps = {
    bgColor: 'transparent',
  }
  
  BackgroundSection.propTypes = {
    bgHeight: PropTypes.string,
    bgColor: PropTypes.string,
    minBgHeight: PropTypes.string,
    id: PropTypes.string,
  };

export default BackgroundSection

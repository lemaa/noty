import React, { useState } from "react";
import PropTypes from 'prop-types';

function Button(props ) {
  const [buttonType] = useState(props.buttonType);
  const [classIdentifier] = useState(props.classIdentifier);
  
   return (
    <button type={buttonType} className={classIdentifier} onClick={props.onClick}>
          {props.children}
    </button>
  );
}

Button.propTypes = {
    buttonType: PropTypes.string.isRequired,
    classIdentifier: PropTypes.string,
 };

// Button.defaultProps = {
//     styleClass: 'btn-primary'
// };

export default Button;
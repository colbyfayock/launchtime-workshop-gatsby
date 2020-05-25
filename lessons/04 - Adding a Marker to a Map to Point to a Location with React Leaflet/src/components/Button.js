import React from 'react';

const Button = ({ children, className, color, ...rest }) => {
  let buttonClass = 'button';

  if ( className ) buttonClass = `${buttonClass} ${className}`;
  if ( color ) buttonClass = `${buttonClass} ${buttonClass}-color-${color}`;

  return (
    <button className={buttonClass} {...rest}>
      { children }
    </button>
  )
}

export default Button;
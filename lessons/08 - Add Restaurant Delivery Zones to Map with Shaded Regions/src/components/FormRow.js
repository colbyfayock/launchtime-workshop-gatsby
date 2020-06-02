import React from 'react';

const FormRow = ({ children, className }) => {
  let formRowClass = 'form-row';

  if ( className ) formRowClass = `${formRowClass} ${className}`;

  return (
    <div className={formRowClass}>
      { children }
    </div>
  )
}

export default FormRow;
import React from 'react';

const Form = ({ children, className, onSubmit }) => {
  let formClass = 'form';

  if ( className ) formClass = `${formClass} ${className}`;

  /**
   * handleOnSubmit
   * @param {object} event Form submit event
   */

  function handleOnSubmit(event) {
    if ( typeof onSubmit === 'function' ) {
      onSubmit(event);
    }
  }

  return (
    <form className={formClass} onSubmit={handleOnSubmit}>
      { children }
    </form>
  )
}

export default Form;
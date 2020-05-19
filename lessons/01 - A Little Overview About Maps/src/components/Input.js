import React from 'react';

const Input = ({ type = 'text', id, name, className, ...rest }) => {
  let inputClass = 'input';

  if ( className ) inputClass = `${inputClass} ${className}`;

  // Make sure we both have an ID and a name attribute. If we have one
  // and not the other, use it for both

  if ( !name && id ) {
    name = id;
  } else if ( !id && name ) {
    id = name;
  }

  const inputProps = {
    key: rest.defaultValue,
    ...rest,
    id,
    name,
    className: inputClass,
  }

  return <input {...inputProps} />
}

export default Input;
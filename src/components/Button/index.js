import React from 'react';

const Button = ({children, classname}) => {
  return <button className={classname}>
    {children}
  </button>
}

export default Button;
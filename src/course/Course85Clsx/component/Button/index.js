import clsx from 'clsx';
import React, { useState } from 'react';
import styles from './Button.module.scss';

function Button({ primary }) {
  const [toggle, setToggle] = useState(true);
  const classes = clsx(styles.btn, { [styles.primary]: toggle });

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button className={classes} onClick={handleToggle}>
        Click me!!!
      </button>
    </>
  );
}

export default Button;

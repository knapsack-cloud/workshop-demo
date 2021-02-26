import * as React from 'react';
import cn from 'classnames';
import { ButtonProps } from '../../../dist/meta/react';

const Button: React.FC<ButtonProps> = ({
  type = 'primary',
  size = 'm',
  disabled = false,
  children,
  handleClick,
}: ButtonProps) => {
  const classes = cn(
    'ex-button',
    `ex-button--size-${size}`,
    `ex-button--${type}`,
    disabled && `ex-button--disabled`
  );
  return (
    <button
      type="button"
      className={classes}
      onClick={(event) => handleClick()}
    >
      {children}
    </button>
  );
};

export default Button;

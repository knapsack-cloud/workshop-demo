import * as React from 'react';
import { ButtonProps } from '@knapsack-cloud/demo-design-system-shared-types';

export const Button: React.FC<ButtonProps> = ({
  disabled,
  size,
  style,
  children
}: ButtonProps) => {
  return (
    <button disabled={ disabled } className={`ex-button ex-button--size-${size} ex-button--${style}`}>{ children }</button>
  );
};
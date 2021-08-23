import * as React from 'react';
import { ButtonProps } from '../../../dist/meta/react';

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  type,
  url,
  mode
}: ButtonProps) => {

  // Button size
  size = size ? size : 'medium'; // Default
  let buttonSize = '';
  switch (size) {
    case 'small':
      buttonSize = 'px-4 py-1.5 text-sm';
    break;
    case 'medium':
      buttonSize = 'px-9 py-2.5 text-lg';
    break;
    case 'large':
      buttonSize = 'px-10 py-4 text-xl';
    break;
  }

  // Button mode
  mode = mode ? mode : 'info';
  let buttonMode = '';
  switch (mode) {
    case 'success':
      buttonMode = 'ks:bg-color-green';
    break;
    case 'info':
      buttonMode = 'ks:bg-color-blue';
    break;
    case 'warning':
      buttonMode = 'ks:bg-color-orange';
    break;
    case 'danger':
      buttonMode = 'ks:bg-color-red';
    break;
    case 'alert':
      buttonMode = 'ks:bg-color-yellow';
    break;
    case 'special':
      buttonMode = 'ks:bg-color-orchid';
    break;
  }

  // Button type
  type = type ? type : 'solid';

  return (
    <a href={url} className={`ks-button w-full flex items-center justify-center text-base font-medium rounded-md border-4 border-transparent text-white ks:bg-${type} ${buttonMode} ${buttonSize} ${mode}`}>{ children }</a> 
  )
}
import * as React from 'react';
import { ButtonProps } from '@knapsack-cloud/demo-design-system-shared-types';

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
      buttonMode = 'green';
    break;
    case 'info':
      buttonMode = 'blue';
    break;
    case 'warning':
      buttonMode = 'orange';
    break;
    case 'danger':
      buttonMode = 'red';
    break;
    case 'alert':
      buttonMode = 'yellow';
    break;
    case 'special':
      buttonMode = 'orchid';
    break;
  }

  // Button type
  let buttonTextColor = '';
  switch (type) {
    case 'outline':
      buttonTextColor = `base-${buttonMode}`
    break;
    case 'solid':
      buttonTextColor = 'white'
    break;
  }

  return (
    <a href={url} className={`ks-button w-full flex items-center justify-center text-base font-medium rounded-md border-4 border-transparent text-${buttonTextColor} bg-${type} bg-base-${buttonMode} border-base-${buttonMode} ${buttonSize} ${mode}`}>{ children }</a> 
  )
}
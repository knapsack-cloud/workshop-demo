import * as React from 'react';
import { ButtonProps } from '@knapsack-cloud/demo-design-system-shared-types';

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  type,
  url,
  mode,
  lightMode
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
  // If we are in lightMode we need a white background
  if (lightMode) {
    buttonMode = `bg-white border-white shadow-md`
  } else {
    // If not in lightMode we need to check mode
    switch (mode) {
      case 'success':
        buttonMode = 'bg-base-green border-base-green';
      break;
      case 'info':
        buttonMode = 'bg-base-blue border-base-blue';
      break;
      case 'warning':
        buttonMode = 'bg-base-orange border-base-orange';
      break;
      case 'danger':
        buttonMode = 'bg-base-red border-base-red';
      break;
      case 'alert':
        buttonMode = 'bg-base-yellow border-base-yellow';
      break;
      case 'special':
        buttonMode = 'bg-base-orchid border-base-orchid';
      break;
    }
  }

  // Button text color
  const buttonTextColorByMode = {
    success: 'text-base-green',
    info: 'text-base-blue',
    warning: 'text-base-orange',
    danger: 'text-base-red',
    alert: 'text-base-yellow',
    special: 'text-base-orchid'
  }

  // Button type + lightMode = text color
  let buttonTextColor = '';
  // If we are in lightMode we grab the color from buttonTextColorByMode[mode]
  if (lightMode) {
    buttonTextColor = `bg-solid ${buttonTextColorByMode[mode]} font-bold`
  } else {
    // If not in lightMode we need to check type
    switch (type) {
      case 'outline':
        buttonTextColor = `bg-outline ${buttonTextColorByMode[mode]}`
      break;
      case 'solid':
        buttonTextColor = 'bg-solid text-white'
      break;
    }
  }

  const lightModeEnabled = lightMode ? 'light-mode-classes-here': '';

  return (
    <a href={url} className={`ks-button w-full flex items-center justify-center text-base font-medium rounded-md border-4 border-transparent ${buttonTextColor} ${buttonMode} ${buttonSize} ${mode} ${lightModeEnabled}`}>{ children }</a> 
  )
}
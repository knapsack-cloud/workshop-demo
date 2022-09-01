import * as React from 'react';

export interface ButtonProps {
  url?: string;
  mode?: 'success' | 'info' | 'warning' | 'danger' | 'alert' | 'special';
  size?: 'small' | 'medium' | 'large';
  type?: 'solid' | 'outline';
  lightMode?: boolean;
  children: React.ReactNode;
  iCanHazIcon?: boolean;
}

const FireIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path
      fill-rule="evenodd"
      d="M13.5 4.938a7 7 0 11-9.006 1.737c.202-.257.59-.218.793.039.278.352.594.672.943.954.332.269.786-.049.773-.476a5.977 5.977 0 01.572-2.759 6.026 6.026 0 012.486-2.665c.247-.14.55-.016.677.238A6.967 6.967 0 0013.5 4.938zM14 12a4 4 0 01-4 4c-1.913 0-3.52-1.398-3.91-3.182-.093-.429.44-.643.814-.413a4.043 4.043 0 001.601.564c.303.038.531-.24.51-.544a5.975 5.975 0 011.315-4.192.447.447 0 01.431-.16A4.001 4.001 0 0114 12z"
      clip-rule="evenodd"
    />
  </svg>
);

export const Button: React.FC<ButtonProps> = ({
  children,
  size,
  type,
  url,
  mode,
  lightMode,
  iCanHazIcon = false,
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
    buttonMode = `bg-white border-white shadow-md`;
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
    special: 'text-base-orchid',
  };

  // Button type + lightMode = text color
  let buttonTextColor = '';
  // If we are in lightMode we grab the color from buttonTextColorByMode[mode]
  if (lightMode) {
    buttonTextColor = `bg-solid ${buttonTextColorByMode[mode]} font-bold`;
  } else {
    // If not in lightMode we need to check type
    switch (type) {
      case 'outline':
        buttonTextColor = `bg-outline ${buttonTextColorByMode[mode]}`;
        break;
      case 'solid':
        buttonTextColor = 'bg-solid text-white';
        break;
    }
  }

  const lightModeEnabled = lightMode ? 'light-mode-classes-here' : '';

  return (
    <a
      href={url}
      className={`ks-button w-full flex items-center justify-center text-base font-medium rounded-md border-4 border-transparent ${buttonTextColor} ${buttonMode} ${buttonSize} ${mode} ${lightModeEnabled}`}
    >
      {children}{' '}
      {iCanHazIcon && (
        <span className="pl-1">
          <FireIcon />
        </span>
      )}
    </a>
  );
};

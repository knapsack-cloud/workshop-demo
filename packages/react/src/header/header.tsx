import * as React from 'react';

export interface HeaderProps {
  imgSrc?: string;
  heading?: string;
  children?: React.ReactNode | string;
}

export const Header: React.FC<HeaderProps> = ({
  heading,
  imgSrc,
  children
}: HeaderProps) => {
  return (
    <div className="relative bg-indigo-800">
      <div className="absolute inset-0">
        {imgSrc && <img className="w-full h-full object-cover" src={imgSrc} alt="" /> }
        <div className="absolute inset-0 bg-indigo-800 mix-blend-multiply" aria-hidden="true" />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        {heading && <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">{heading}</h1>}
        {children &&
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            {children}
          </p>
        }
      </div>
    </div>
  )
}

export default Header;
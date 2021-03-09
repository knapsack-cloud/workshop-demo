import * as React from 'react';
import { CardProps } from '../../../dist/meta/react';

const Card: React.FC<CardProps> = ({
  label,
  title,
  body,
  imgSrc,
  children
}: CardProps) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      {imgSrc && (
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={imgSrc} alt="" />
        </div>
      )}
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {label && (
            <p className="text-sm font-medium text-indigo-600">
              <a href="#" className="hover:underline">
                {label}
              </a>
            </p>
          )}
          {(title || body) && (
            <a href="#" className="block mt-2">
              {title && (
                <p className="text-xl font-semibold text-gray-900">
                  {title}
                </p>
              )}
              {body && (
                <p className="mt-3 text-base text-gray-500">
                  {body}
                </p>
              )}
            </a>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;

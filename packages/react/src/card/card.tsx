import * as React from 'react';

export type CardProps = {
  /**
   * Content to fill out ONE paragraph
   */
  body?: string;
  imgSrc?: string;
  title?: string;
  label?: string;
  /**
   * undefined. Only use: author, button
   */
  children?: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({
  label,
  title,
  body,
  imgSrc,
  children,
}) => {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      {imgSrc && (
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={imgSrc} alt="" />
        </div>
      )}
      <div className="flex-1 bg-white dark:bg-gray-900 dark:text-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          {label && (
            <p className="text-sm font-medium text-brand-primary dark:text-indigo-300">
              <a href="#" className="hover:underline">
                {label}
              </a>
            </p>
          )}
          {(title || body) && (
            <a href="#" className="block mt-2">
              {title && (
                <p className="text-xl font-semibold text-gray-900 dark:text-white">
                  {title}
                </p>
              )}
              {body && (
                <p className="mt-3 text-base text-gray-500 dark:text-gray-200">
                  {body}
                </p>
              )}
            </a>
          )}
        </div>
        {children && <div className="ks-card-child-wrapper">{children}</div>}
      </div>
    </div>
  );
};

export default Card;

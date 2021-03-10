import * as React from 'react';
import cn from 'classnames';
import { AuthorProps } from '../../../dist/meta/react';

export const Author: React.FC<AuthorProps> = ({
  imgSrc,
  date,
  read,
  topMargin,
  children
}: AuthorProps) => {
  const classes = cn(
    'flex',
    'items-center',
    'dark:bg-gray-900',
    {'mt-6': topMargin}
  );
  return (
    <div className={classes}>
      <div className="flex-shrink-0">
        <a href="#">
          <span className="sr-only">{children}</span>
          {imgSrc && (
            <img className="h-10 w-10 rounded-full" src={imgSrc} alt="" />
          )}
        </a>
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          <a href="#" className="hover:underline">
            {children}
          </a>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500  dark:text-gray-400">
          {date && (
            <time datetime="2020-03-10">
              {date}
            </time>
          )}
          {(date && read) && (
            <span aria-hidden="true">
              &middot;
            </span>
          )}
          {read && (
            <span>
              {read}
            </span>
          )}
        </div>
      </div>
    </div>
  )
};

export default Author;
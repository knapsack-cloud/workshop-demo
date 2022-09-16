import * as React from 'react';
import { LayoutProps } from '@knapsack-cloud/public-demo-shared-types';

export const Layout: React.FC<LayoutProps> = ({
  bandTitle,
  bandContent,
  children,
  clean
}: LayoutProps) => {

  const childrenCount = children ? React.Children.count(children) : 1;
  const typeOfLayout = !clean ? 'bg-gray-50' : '';
  return (
    <>
      <div className={`relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 dark:bg-gray-700 ${typeOfLayout}`}>
        {!clean &&
          <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"></div>
          </div>
        }
        <div className="relative max-w-7xl mx-auto">
          {(bandTitle || bandContent) && (
            <div className="text-center">
              {bandTitle && (
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                  {bandTitle}
                </h2>
              )}
              {bandContent && (
                <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 dark:text-gray-400">
                  {bandContent}
                </div>
              )}
            </div>
          )}
          {children && (
            <div className={`mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-${childrenCount} lg:max-w-none`}>
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Layout;

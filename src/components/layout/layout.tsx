import * as React from 'react';
import { LayoutProps } from '../../../dist/meta/react';

const Layout: React.FC<LayoutProps> = ({
  bandTitle,
  bandContent,
  children
}: LayoutProps) => {
  return (
    <>
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 dark:bg-gray-700">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
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
          <div className={`mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-${React.Children.count(children) ? React.Children.count(children) : 1} lg:max-w-none`}>
            {children}
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default Layout;
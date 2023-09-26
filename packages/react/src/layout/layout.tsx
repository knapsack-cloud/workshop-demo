import * as React from 'react';

export interface LayoutProps {
  bandTitle?: string;
  bandContent?: string;
  /**
   * undefined. Only use: author, button, card
   */
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({
  bandTitle,
  bandContent,
  children,
}: LayoutProps) => {

  const childrenCount = children ? React.Children.count(children) : 1;

  return (
    <>
      <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8 dark:bg-gray-700 bg-gray-50">
        <div className="relative max-w-7xl mx-auto">
          {(bandTitle || bandContent) && (
            <div className="text-center">
              {bandTitle && (
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-gray-100">
                  {bandTitle}
                </h2>
              )}
              {bandContent && (
                <div className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4 dark:text-gray-200">
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

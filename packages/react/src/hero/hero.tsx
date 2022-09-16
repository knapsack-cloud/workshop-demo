import * as React from 'react';
import { KSShortcodeLinkGen } from '../../utils/shortcodes';
import { Button } from '../button/button';

export interface HeroProps {
  buttonOne?: string;
  headlineOne?: string;
  buttonTwo?: string;
  headlineTwo?: string;
  paragraph?: string;
  showBackground?: boolean;
  /**
   * Space for an optional Top Nav component. Only use: top-nav
   */
  header?: React.ReactNode;
}

export const Hero: React.FC<HeroProps> = ({
  buttonOne,
  buttonTwo,
  header,
  headlineOne,
  headlineTwo,
  paragraph,
  showBackground,
}: HeroProps) => {
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      {/* START: BACKGROUND BLOCKS */}
      {showBackground && (
        <div
          className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
          aria-hidden="true"
        >
          <div className="relative h-full max-w-7xl mx-auto">
            <svg
              className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
              width="404"
              height="784"
              fill="none"
              viewBox="0 0 404 784"
            >
              <defs>
                <pattern
                  id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x="0"
                    y="0"
                    width="4"
                    height="4"
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width="404"
                height="784"
                fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
              />
            </svg>
          </div>
        </div>
      )}
      {/* END: BACKGROUND BLOCKS */}

      {/* START: CONTENT WRAPPER */}
      <div className="relative pt-6 pb-16 sm:pb-24">
        {header}

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            {(headlineOne || headlineTwo) && (
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                {headlineOne && (
                  <span className="block xl:inline">{headlineOne}</span>
                )}
                {headlineTwo && (
                  <span className="block text-indigo-600 xl:inline">
                    {headlineTwo}
                  </span>
                )}
              </h1>
            )}
            {paragraph && (
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                {paragraph}
              </p>
            )}
            {(buttonOne || buttonTwo) && (
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="mt-3 sm:mt-0">
                  <Button url="/" mode="info" type="solid">
                    {buttonOne}
                  </Button>

                  {/* <KSShortcodeLinkGen
                    shortcode="Getting started"
                    classes="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-base-blue hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  /> */}
                </div>
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
                  <Button url="/" mode="info" type="outline">
                    {buttonTwo}
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      {/* END: CONTENT WRAPPER */}
    </div>
  );
};

export default Hero;

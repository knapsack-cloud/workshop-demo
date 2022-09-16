import * as React from 'react';
import { TopNavProps } from '@knapsack-cloud/demo-design-system-shared-types';

export const TopNav: React.FC<TopNavProps> = ({
  button,
  logo,
  links,
}: TopNavProps) => {
  const [menuIsOpen, setMenuState] = React.useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ks:top-nav">
        <nav
          className={`relative flex items-center justify-between sm:h-10 ${
            logo
              ? button
                ? 'md:justify-center'
                : 'md:justify-end'
              : 'md:flex-start'
          }`}
          aria-label="Global"
        >
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div
              className={`flex items-center ${
                logo ? 'justify-between' : 'justify-end'
              } w-full md:w-auto`}
            >
              {logo && (
                <a href="#" className="block h-8 w-10 sm:h-10 text-indigo-600">
                  <span className="sr-only">Workflow</span>
                  {/* <img className="h-8 w-auto sm:h-10" src={logo} alt="" /> */}

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 35 32"
                    className="fill-current"
                  >
                    <path d="M15.258 26.865a4.043 4.043 0 01-1.133 2.917A4.006 4.006 0 0111.253 31a3.992 3.992 0 01-2.872-1.218 4.028 4.028 0 01-1.133-2.917c.009-.698.2-1.382.557-1.981.356-.6.863-1.094 1.47-1.433-.024.109.09-.055 0 0l1.86-1.652a8.495 8.495 0 002.304-5.793c0-2.926-1.711-5.901-4.17-7.457.094.055-.036-.094 0 0A3.952 3.952 0 017.8 7.116a3.975 3.975 0 01-.557-1.98 4.042 4.042 0 011.133-2.918A4.006 4.006 0 0111.247 1a3.99 3.99 0 012.872 1.218 4.025 4.025 0 011.133 2.917 8.521 8.521 0 002.347 5.832l.817.8c.326.285.668.551 1.024.798.621.33 1.142.826 1.504 1.431a3.902 3.902 0 01-1.504 5.442c.033-.067-.063.036 0 0a8.968 8.968 0 00-3.024 3.183 9.016 9.016 0 00-1.158 4.244zM19.741 5.123c0 .796.235 1.575.676 2.237a4.01 4.01 0 001.798 1.482 3.99 3.99 0 004.366-.873 4.042 4.042 0 00.869-4.386 4.02 4.02 0 00-1.476-1.806 3.994 3.994 0 00-5.058.501 4.038 4.038 0 00-1.175 2.845zM23.748 22.84c-.792 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.806 4.042 4.042 0 00.869 4.387 3.99 3.99 0 004.366.873A4.01 4.01 0 0027.08 29.1a4.039 4.039 0 00-.5-5.082 4 4 0 00-2.832-1.18zM34 15.994c0-.796-.235-1.574-.675-2.236a4.01 4.01 0 00-1.798-1.483 3.99 3.99 0 00-4.367.873 4.042 4.042 0 00-.869 4.387 4.02 4.02 0 001.476 1.806 3.993 3.993 0 002.226.678 4.003 4.003 0 002.832-1.18A4.04 4.04 0 0034 15.993z" />
                    <path d="M5.007 11.969c-.793 0-1.567.236-2.226.678a4.021 4.021 0 00-1.476 1.807 4.042 4.042 0 00.869 4.386 4.001 4.001 0 004.366.873 4.011 4.011 0 001.798-1.483 4.038 4.038 0 00-.5-5.08 4.004 4.004 0 00-2.831-1.181z" />
                  </svg>
                </a>
              )}
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  onClick={() => setMenuState(true)}
                  className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {links && (
            <div className="hidden md:flex md:space-x-10">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.indexOf('|') > 0 ? link.split('|')[0] : '#'}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {link.indexOf('|') > 0 ? link.split('|')[1] : link}
                </a>
              ))}
            </div>
          )}
          {button && (
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a
                  href={button.indexOf('|') > 0 ? button.split('|')[0] : '#'}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                >
                  {button.indexOf('|') > 0 ? button.split('|')[1] : button}
                </a>
              </span>
            </div>
          )}
        </nav>
      </div>
      {/* <!--
        Mobile menu, show/hide based on menu open state.

        Entering: "duration-150 ease-out"
          From: "opacity-0 scale-95"
          To: "opacity-100 scale-100"
        Leaving: "duration-100 ease-in"
          From: "opacity-100 scale-100"
          To: "opacity-0 scale-95"
      --> */}
      <div
        className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${
          menuIsOpen ? 'menu-open' : 'menu-closed hidden'
        }`}
      >
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div
            className={`px-5 pt-4 flex items-center ${
              logo ? 'justify-between' : 'justify-end'
            }`}
          >
            {logo && (
              <div>
                <img className="h-8 w-auto" src={logo} alt="" />
              </div>
            )}
            <div className="-mr-2">
              <button
                type="button"
                onClick={() => setMenuState(false)}
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          {links && (
            <div className="px-2 pt-2 pb-3">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.indexOf('|') > 0 ? link.split('|')[0] : '#'}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {link.indexOf('|') > 0 ? link.split('|')[1] : link}
                </a>
              ))}
            </div>
          )}
          {button && (
            <a
              href={button.indexOf('|') > 0 ? button.split('|')[0] : '#'}
              className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
            >
              {button.indexOf('|') > 0 ? button.split('|')[1] : button}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default TopNav;

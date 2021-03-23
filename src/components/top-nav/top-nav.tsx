import * as React from 'react';
import { TopNavProps } from '../../../dist/meta/react';

export const TopNav: React.FC<TopNavProps> = ({
  button,
  logo,
  links
}: TopNavProps) => {
  const [menuIsOpen, setMenuState] = React.useState(false);
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ks:top-nav">
        <nav className={`relative flex items-center justify-between sm:h-10 md:${logo ? (button ? 'justify-center' : 'justify-end') : 'flex-start'}`} aria-label="Global">
          <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
            <div className={`flex items-center ${logo ? 'justify-between' : 'justify-end'} w-full md:w-auto`}>
              {logo && (
                <a href="#">
                  <span className="sr-only">Workflow</span>
                  <img className="h-8 w-auto sm:h-10" src={logo} alt="" />
                </a>
              )}
              <div className="-mr-2 flex items-center md:hidden">
                <button type="button" onClick={() => setMenuState(true)} className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Heroicon name: outline/menu --> */}
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {links && (
            <div className="hidden md:flex md:space-x-10">
              {links.map((link, index) => (
                  <a key={index} href={link.indexOf("|") > 0 ? link.split('|')[0] : '#'} className="font-medium text-gray-500 hover:text-gray-900">{link.indexOf("|") > 0 ? link.split('|')[1] : link}</a>
              ))}
            </div>
          )}
          {button && (
            <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
              <span className="inline-flex rounded-md shadow">
                <a href={button.indexOf("|") > 0 ? button.split('|')[0] : '#'} className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
                  {button.indexOf("|") > 0 ? button.split('|')[1] : button}
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
      <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right ${menuIsOpen ? 'menu-open' : 'menu-closed hidden'}`}>
        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
          <div className={`px-5 pt-4 flex items-center ${logo ? 'justify-between' : 'justify-end'}`}>
            {logo && (
              <div>
                <img className="h-8 w-auto" src={logo} alt="" />
              </div>
            )}
            <div className="-mr-2">
              <button type="button" onClick={() => setMenuState(false)} className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Close menu</span>
                {/* <!-- Heroicon name: outline/x --> */}
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          {links && (
            <div className="px-2 pt-2 pb-3">
              {links.map((link, index) => (
                  <a key={index} href={link.indexOf("|") > 0 ? link.split('|')[0] : '#'} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">{link.indexOf("|") > 0 ? link.split('|')[1] : link}</a>
              ))}
            </div>
          )}
          {button && (
            <a href={button.indexOf("|") > 0 ? button.split('|')[0] : '#'} className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100">
              {button.indexOf("|") > 0 ? button.split('|')[1] : button}
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default TopNav;
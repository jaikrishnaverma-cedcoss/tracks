import Link from 'next/link';
import React from 'react';



const Header: React.FC = () => {
  return (
    <header>
    <nav className="tw-border-gray-200 tw-px-4 tw-lg:px-6 tw-py-2.5 tw-dark:bg-gray-800">
      <div className="tw-flex tw-flex-wrap tw-justify-between tw-items-center tw-mx-auto tw-max-w-screen-xl">
        <a href="" className="tw-flex tw-items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="tw-mr-3 tw-h-6 tw-sm:h-9" alt="Flowbite Logo" />
          <span className="tw-self-center tw-text-xl tw-font-semibold tw-whitespace-nowrap tw-dark:text-white">Quicker</span>
        </a>
        <div className="tw-flex tw-items-center tw-lg:order-2">
        <Link href='/auth/login'>
          <button className="tw-text-gray-800 tw-dark:text-white tw-hover:bg-gray-50 tw-focus:ring-4 tw-focus:ring-gray-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-lg:px-5 tw-py-2 tw-lg:py-2.5 tw-mr-2 tw-dark:hover:bg-gray-700 tw-focus:outline-none tw-dark:focus:ring-gray-800">Log in</button>
          </Link>
          <Link href='/auth/register'>
          <button className="tw-text-gray-800 tw-dark:text-white tw-hover:bg-gray-50 tw-focus:ring-4 tw-focus:ring-gray-300 tw-font-medium tw-rounded-lg tw-text-sm tw-px-4 tw-lg:px-5 tw-py-2 tw-lg:py-2.5 tw-mr-2 tw-dark:hover:bg-gray-700 tw-focus:outline-none tw-dark:focus:ring-gray-800">Register</button>
          </Link>
        </div>
        
      </div>
    </nav>
  </header>
  );
}

export default Header;

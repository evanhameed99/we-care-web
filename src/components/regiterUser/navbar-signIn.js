import React from 'react';
import { FiMenu } from 'react-icons/fi';
import logo from './imgs/LogoDark.svg';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="w-full relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-transparent text-darkP text-sm">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <img
            src={logo}
            className="w-16 md:w-20 lg:ml-0 md:ml-12 ml-8 cursor-pointer"
            alt="We Care logo"
          />
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FiMenu className="text-2xl text-darkP" />
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center justify-center' +
            (navbarOpen ? ' flex' : ' hidden')
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col justify-end lg:flex-row list-none text-center w-full">
            <li className="lg:mr-10 lg:mt-0 lg:py-0 py-3 lg:border-0 border-b border-darkP">
              <Link to="/ForYou">For you</Link>
            </li>
            <li className="lg:mr-10 lg:my-0 lg:py-0 py-3 lg:border-0 border-b border-darkP">
              <a href={'#'}>Counseling</a>
            </li>
            <li className="lg:mb-0 lg:py-0 py-3">
              <Link to="/signUp">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

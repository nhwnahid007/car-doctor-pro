import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <div>
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {' '}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{' '}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2"
            >
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/">
            <Image src="assets/logo.svg" alt="logo" width={50} height={50} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex items-center justify-center gap-2">
          <AiOutlineShopping className="text-2xl" />
          <CiSearch className="text-2xl mr-5" />
          <a className="btn text-primary outline-primary outline-2 bg-transparent ">Appoinment</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

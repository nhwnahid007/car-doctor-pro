'use client';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { CiSearch } from 'react-icons/ci';

const Navbar = () => {
  const session = useSession();
  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  const pathname = usePathname();

  console.log(session);
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
                  <Link
                    className={pathname === link.href ? ' text-primary' : ''}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
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
                <Link
                  href={link.href}
                  className={pathname === link.href ? ' text-primary' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end flex items-center  gap-2">
          <AiOutlineShopping className="text-2xl" />
          <CiSearch className="text-2xl mr-5" />
          <button className="btn text-primary outline-primary outline-1 bg-transparent hover:bg-primary hover:text-white">
            Appoinment
          </button>
          {session.status === 'authenticated' ? (
            <button
              onClick={() => signOut()}
              className="btn btn-primary text-white"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn btn-primary text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

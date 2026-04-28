'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '@/assets/logo.png';
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
  const { data: session } = authClient.useSession();
  console.log(session?.user.name);

  const handlesignout =async () => {await authClient.signOut();};

  return (
    <div className="flex justify-between items-center py-5 max-w-7xl mx-auto">
      <div>
        <Link href="/">
          <Image
            loading="eager"
            alt="img"
            src={logo}
            width={100}
            height={100}
          ></Image>
        </Link>
      </div>
      {/* 2nd */}
      <div className="flex gap-4">
        <NavLink href={'/'}>Home</NavLink>
        <NavLink href={'/dashboard'}>Dashboard</NavLink>
        <NavLink href={'/contactus'}>Contact Us</NavLink>
      </div>
      {/* Third */}
      {session ? (
        <div className="flex items-center gap-2">
          <div className="font-bold">{session?.user?.name}</div>
          <button onClick={handlesignout} className="btn bg-red-300">
            Sign out
          </button>
        </div>
      ) : (
        <Link href="/login">
          <button className="btn bg-blue-500 text-white">Log in</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;

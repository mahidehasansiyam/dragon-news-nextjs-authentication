"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const NavLink = ({href,children}) => {
  const pathname = usePathname()
  // console.log(pathname);

  return <Link className={`${pathname === href? "border-b-2 border-blue-600":""}`} href={href}>{ children}</Link>;
};

export default NavLink;
import Image from 'next/image';
import logo from '@/assets/logo.png'
import {format } from 'date-fns';

const Header = () => {
  return (
    <div className="text-center py-4">
      <Image
        loading="eager"
        alt="ok"
        className="mx-auto"
        src={logo}
        width={400}
        height={400}
      ></Image>
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, dolores!
      </h2>
      {format(new Date(), 'EEEE ,MMM dd , yyyy')}
    </div>
  );
};

export default Header;
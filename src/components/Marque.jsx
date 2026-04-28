import React from 'react';
import Marquee from 'react-fast-marquee';

const Marque = () => {
  return (
    <div className='bg-gray-300 py-4 px-10 flex '>
      <button className='btn bg-red-500 border-none mr-5'>Read more</button>
      <Marquee>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default Marque;
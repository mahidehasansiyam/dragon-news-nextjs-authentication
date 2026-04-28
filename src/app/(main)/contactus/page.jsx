import Link from 'next/link';
import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6 text-white text-3xl font-bold">
      <div>Contact with us </div> <br />
      <Link href="/">
        <button className='btn '>Back</button>
      </Link>
    </div>


    
  );
};

export default ContactUs;
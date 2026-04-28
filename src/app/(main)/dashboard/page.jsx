import Link from 'next/link';
import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center px-6 text-white text-3xl font-bold">
      <div>This is dashboard </div> <br />
      <Link href="/">
        <button className="btn ">Back</button>
      </Link>
    </div>
  );
};

export default Dashboard;
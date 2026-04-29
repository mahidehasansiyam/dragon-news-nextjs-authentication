"use client"

import { authClient } from "@/lib/auth-client";

const RightSide = () => {

  const handlegoogle = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };
  return (
    <div className="">
      <button
        onClick={handlegoogle}
        className="bg-green-500 p-2 text-white font-bold rounded-2xl btn"
      >
        Log in with google
      </button>
    </div>
  );
};

export default RightSide;
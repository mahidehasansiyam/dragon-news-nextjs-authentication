'use client';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';

const LogingPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const onSubmit = async data => {
    // console.log(data);

    const { data: res, error } = await authClient.signIn.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: '/',
    });

    // console.log(res, error);
  };

  const handlegoogle = async () => {
    const data = await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="h-[100vh] flex justify-center items-center bg-sky-800">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register('email', { required: 'You must add email' })}
          />
          {errors.email && (
            <span className="text-red-500">{`${errors.email.message}`}*</span>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register('password', { required: 'You must add password' })}
          />
          {errors.password && (
            <span className="text-red-500">
              {`${errors.password.message}`}*
            </span>
          )}

          <button className="btn btn-neutral mt-4">Login</button>
          <p>
            Already have account?{' '}
            <Link href="/regestration">
              <span className="text-blue-600 underline">Regester</span>
            </Link>{' '}
          </p>
        </fieldset>
      </form>
      <button onClick={handlegoogle}>
        <div className="flex items-center justify-center gap-2 border-2 p-2 border-green-600 text-green-600 font-bold">
          <FaGoogle />
          <h2 className="r">Log in with google</h2>
        </div>
      </button>
    </div>
  );
};

export default LogingPage;

"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

const RegestrationPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  // console.log(errors);
  
  const onSubmit = async data => {
    console.log(data);

    const { data:res, error } = await authClient.signUp.email({
    name: data.name,
    email: data.email, 
    password:data.password, 
    callbackURL: "/",
    });

    console.log(res, error);
    
     if (res) {
       alert('Your regestration Successful');
     } else {
       
       alert(`${error.message}`)
    }
  };

 

  return (
    <div className="h-[100vh] flex justify-center items-center bg-sky-800">
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <label className="label">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="input"
            {...register('name', { required: 'You must add a name ' })}
          />
          {errors.name && (
            <span className="text-red-500">{`${errors.name.message}`}*</span>
          )}

          <label className="label">Email</label>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register('email', { required: 'You must  add email' })}
          />
          {errors.name && (
            <span className="text-red-500">{`${errors.email.message}`}*</span>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register('password', { required: 'You must add password' })}
          />
          {errors.name && (
            <span className="text-red-500">{`${errors.password.message}`}*</span>
          )}

          <button className="btn btn-neutral mt-4">Regester</button>
          <p>
            Don't have account?{' '}
            <Link href="/login">
              <span className="text-blue-600 underline">Login</span>
            </Link>{' '}
          </p>
        </fieldset>
      </form>
    </div>
  );
};

export default RegestrationPage;

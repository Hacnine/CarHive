import React, { useState } from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../../app/services/bookingsApi.js';
import PrimaryButton from '../../components/PrimaryButton';

const SignUp = () => {
  const googleLogo = <AiFillGoogleCircle className="text-white-green w-6 h-6" />;
  const facebookLogo = <BsFacebook className="text-white-green w-6 h-6" />;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
  const res = await register({ name, email, password }).unwrap();
  const token = res?.data?.token ?? res?.token;
  if (token) localStorage.setItem('token', token);
      navigate('/account/dashboard');
    } catch (err) {
      console.error(err);
      alert(err?.data?.message || 'Registration failed');
    }
  }

  return (
    <div className="w-[380px] rounded-md shadow-md absolute left-0 right-0 top-20 bottom-0 h-[600px] px-8 pt-8 mx-auto bg-white-green">
      <h2 className="text-xl font-semibold mb-4">Sign up</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input className="w-full p-2 border rounded" placeholder="Full name" value={name} onChange={e => setName(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full p-2 border rounded" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} type="password" />
        <PrimaryButton buttonName={isLoading ? 'Creating...' : 'Sign Up'} className={"bg-primary-green w-full mt-2 font-extrabold"} type="submit" />
      </form>

      <div className="mt-6 flex items-center justify-center relative pb-7">
        <div className="text-slate-blue font-open text center bg-white-green px-3 text-[11px] font-bold z-10">or sign up with</div>
        <div className="absolute left-0 w-full bg-gray-400 p-[.5px]"></div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <PrimaryButton buttonName={"Google"} className={"bg-red-400 w-full px-7"} icon={googleLogo} />
        <PrimaryButton buttonName={"Facebook"} className={"bg-blue-600 w-full"} icon={facebookLogo} />
      </div>
    </div>
  );
};

export default SignUp;

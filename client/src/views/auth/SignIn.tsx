import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { useLoginMutation } from '../../app/api/auth-api';
import { setUser } from '../../app/slices/userSlice';
import { useAppSelector } from '../../app/store';
export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [login, { isLoading, isError, data, status }] = useLoginMutation();
  async function handleCredentialResponse(response: any) {
    const data = await login(response.credential);

    dispatch(setUser(data.data));
    return data;
  }
  const user = useAppSelector((state) => state.user.user);
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      login_uri: window.location.origin + location.pathname,
    });
    window.google.accounts.id.renderButton(
      document.getElementById('buttonDiv'),
      { theme: 'outline', size: 'large' },
    );
    window.google.accounts.id.prompt();
  }, []);

  useEffect(() => {
    if (user?.email) {
      navigate('/admin/default');
    }
  }, [user]);
  return (
    <div className="mt-16 mb-16 mx-auto flex h-full w-full  justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center ">
      {/* Sign in section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <div id={'buttonDiv'}></div>
        <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
          Sign In
        </button>
      </div>
    </div>
  );
}

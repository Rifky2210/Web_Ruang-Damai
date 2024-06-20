import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { FaEyeSlash } from 'react-icons/fa';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="flex h-screen w-full bg-white">
        <div className="flex w-1/2 bg-[#38B6FF] p-10 flex-col">
          <img
            src="/images/logo.png"
            className="h-16 w-16 mr-2 bg-white p-1 rounded-full"
          />
          <div className="w-3/4 rounded-3xl bg-white ml-16 mt-10 p-10 flex flex-col gap-5">
            <p>Selamat datang di Website RuangDamai</p>
            <p className="font-bold text-xl">Silahkan untuk masuk</p>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="">
                Masukan Email atau Username anda
              </label>
              <input
                type="text"
                className="w-full border-[#4285F4] border-2 rounded-md p-3"
                placeholder="Username atau Email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="">
                Masukan Password anda
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full border-[#4285F4] border-2 rounded-md p-3 pr-10"
                  placeholder="Password"
                />
                {showPassword ? (
                  <FaEyeSlash
                    className="absolute right-4 top-4 text-xl cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FaEye
                    className="absolute right-4 top-4 text-xl cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
              <a href="/lupa-password" className="text-sm self-end text-[#AD3113]">
                Lupa Password
              </a>
            </div>
            <button className="w-full bg-[#0081C6] p-3 rounded-md text-white" onClick={() => window.location = '/'}>
              Masuk
            </button>
            <div className="w-full text-center pt-10 mb-8">
              <p className="text-sm">Belum punya akun?</p>
              <a href="/register" className="text-black text-sm font-bold">
                Daftar
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 h-screen justify-center items-center">
          <img
            src="/images/login.jpeg"
            className="w-[600px] h-[520px] mr-2 bg-white p-1 rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { loginStart, loginFailure, loginSuccess } from "../redux/userSlice";

import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import TextInput from "../components/Input";
import Button from "../components/Button";
import { useSignInMutation } from '../redux/services/weight'


interface NewUser {
    email: string;
    password: string;
}

const LoginScreen: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [newUser, setNewUser] = useState<NewUser>({
    email: '',
    password: '',
  });

  const [error, setError] = useState<string>("");
  const [signIn]= useSignInMutation();


  const handleSubmit = async () => {
    dispatch(loginStart())
    try {
        await signIn(newUser).unwrap();
        dispatch(loginSuccess(newUser))
        navigate("/dashboard");
    
      } catch (error: any) {
        dispatch(loginFailure())
        setError(error.message);
      }
  };

  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>,
): any => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value })
}

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">GD</span>INT
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">
                {" "}
                Sign in to Account
              </h2>
            </div>

            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

            <div className="flex justify-center my-2">
              <button
              onClick={() => console.log('gg')}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </button>

              <button
              onClick={() => console.log('')}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </button>

              <button
              onClick={() => console.log('')}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </button>
            </div>

            <p className="text-gray-400 my-3">or use your email account</p>

            <div className="flex flex-col items-center">
              <TextInput
                type="email"
                name="email"
                placeholder="Email"
                icon={<FaRegEnvelope className="text-gray-400 m-2" />}
                value={newUser.email}
                onChange={handleInputValueChange}
              />

              <TextInput
                type="password"
                name="password"
                placeholder="Password"
                icon={<MdLockOutline className="text-gray-400 m-2" />}
                value={newUser.password}
                onChange={handleInputValueChange}
              />

              <div className="flex justify-between w-64 mb-5">
                <label className="flex items-center text-xs">
                  <input type="checkbox" name="remember" className="mr-1" />
                  Remember me
                </label>
                <a href="#home" className="text-xs">
                  Forgot Password
                </a>
              </div>

              <Button title="Sign In"   onClick={handleSubmit}/>
              <ToastContainer />
            </div>
          </div>

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us
            </p>
            <a href="#home"
              onClick={() => navigate('/signUp')}
              className="border-2 border—white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
                     hover:text-green-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginScreen;

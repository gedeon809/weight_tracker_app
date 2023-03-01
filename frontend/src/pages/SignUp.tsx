import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { signIn } from "../api/auth";
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
import { useSignUpMutation } from "../redux/services/weight";

interface NewUser {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUpScreen: React.FC = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState<NewUser>({
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  // const [error, setError] = useState<string>("");
  const [signUp, error] = useSignUpMutation();

  const handleSubmit = async () => {
    if (newUser.confirmPassword !== newUser.password) return alert("Please enter your password");
    
    try {
      await signUp(newUser).unwrap();
      navigate("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const handleInputValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): any => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

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
                Sign up to Account
              </h2>
            </div>

            <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>

            <div className="flex justify-center my-2">
              <button
                onClick={() => console.log("gg")}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF className="text-sm" />
              </button>

              <button
                onClick={() => console.log("")}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn className="text-sm" />
              </button>

              <button
                onClick={() => console.log("")}
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaGoogle className="text-sm" />
              </button>
            </div>

            <p className="text-gray-400 my-3">or use your email account</p>

            <div className="flex flex-col items-center">
              <TextInput
                type="text"
                name="userName"
                placeholder="User Name"
                icon={<FaRegEnvelope className="text-gray-400 m-2" />}
                value={newUser.userName}
                onChange={handleInputValueChange}
              />

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

              <TextInput
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                icon={<MdLockOutline className="text-gray-400 m-2" />}
                value={newUser.confirmPassword}
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

              <Button title="Sign Up" onClick={handleSubmit} />
            </div>
          </div>

          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Hello, Friend!</h2>
            <div className="border-2 w-10 border-white inline-block mb-2"></div>
            <p className="mb-10">
              Fill up personal information and start journey with us
            </p>
            <a href="#home" 
              onClick={() => navigate("/")}
              className="border-2 border—white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white
                     hover:text-green-500"
            >
              Sign in
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUpScreen;

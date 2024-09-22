import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const Login = () => {
  //eyeopen stata implemnent
  const [EyeOpen, setEyeOpen] = useState(true);

  //handelInput stata implemnent
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });

  //handelInput stata implemnent
  const handelInput = (event) => {
    setuserInfo({
      ...userInfo,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <div className=" justify-center h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-y-10 w-[497px]">
          {/* Top part */}
          <div>
            <span className="flex justify-center text-[50px]">
              <a
                href="https://www.linkedin.com/"
                target="_"
                className=" text-auth_blue_color pb-[32px]">
                <FaLinkedin />
              </a>
            </span>
            <h3 className="font-Nunito text-[32.4px] text-center font-semibold pb-3 text-auth_font_color">
              Login
            </h3>
            <p className="text-center font-Nunito text-[20.64px] font-normal text-auth_font_color opacity-50">
              Free register and you can enjoy it
            </p>
          </div>
          {/* Email impliment */}
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
              <legend className="font-Nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Email Address
              </legend>
              <input
                type="text"
                name="email"
                id="email"
                onChange={handelInput}
                className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                placeholder="Enter your email/gmail"
              />
            </fieldset>
          </div>
          {/* Password impliment */}
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
              <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Password
              </legend>
              <div className="flex items-center">
                <input
                  type={EyeOpen ? "password" : "text"}
                  onChange={handelInput}
                  name="password"
                  id="password"
                  className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[40px] p-4"
                  placeholder="......."
                />
                <span
                  className="pr-5 cursor-pointer"
                  onClick={() => setEyeOpen(!EyeOpen)}>
                  {EyeOpen ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </fieldset>
          </div>
          <button className="w-full py-[15px] rounded-[86px] leading-10 bg-auth_blue_color font-nunito text-[20.64px] text-white font-normal">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

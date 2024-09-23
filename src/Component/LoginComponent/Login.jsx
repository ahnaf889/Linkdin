import React, { useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import {
  emailpattenpass,
  passwordpattenpass,
} from "../../../Utils/Validate.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import { successToast, errorToast } from "../../../Utils/Toast.js";
import BeatLoader from "react-spinners/SyncLoader.js";

const Login = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  const [EyeOpen, setEyeOpen] = useState(true);
  const [loader, setloader] = useState(false);

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (event) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.id]: event.target.value,
    });
  };

  const [loginError, setloginError] = useState({
    emailError: "",
    passwordError: "",
  });

  // Clear error messages when user starts typing
  const handleSignUp = () => {
    const { email, password } = loginInfo;
    if (!email || !emailpattenpass(email)) {
      setloginError({
        ...loginError,
        emailError: "Your email is wrong",
      });
    } else if (!password || !passwordpattenpass(password)) {
      setloginError({
        ...loginError,
        emailError: "",
        passwordError: "Your password is wrong",
      });
    } else {
      setloader(true);
      setloginError({
        ...loginError,
        emailError: "",
        passwordError: "",
      });
      setloginError({
        ...loginError,
        emailError: "",
        passwordError: "",
      });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          successToast("Pleace check your email", "top-left");
        })
        .catch((error) => {
          errorToast(error.code, "top-right");
        })
        .finally(() => {
          setLoginInfo({
            ...loginInfo,
            email: "",
            password: "",
          });
          setloader(false);
        });
    }
  };

  return (
    <div className="justify-center h-screen">
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col gap-y-10 w-[497px]">
          <div>
            <span className="flex justify-center text-[50px]">
              <a
                href="https://www.linkedin.com/"
                target="_"
                className="text-auth_blue_color pb-[32px]">
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
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
              <legend className="font-Nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Email Address
              </legend>
              <input
                type="text"
                name="email"
                id="email"
                value={loginInfo.email}
                onChange={handleLoginInput}
                className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                placeholder="Enter your email/gmail"
              />
            </fieldset>
            <span className="text-red-700 font-Nunito text-[17px] font-medium">
              {loginError.emailError}
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
              <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                Password
              </legend>
              <div className="flex items-center">
                <input
                  type={EyeOpen ? "password" : "text"}
                  name="password"
                  id="password"
                  value={loginInfo.password}
                  onChange={handleLoginInput}
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
            <span className="text-red-700 font-Nunito text-[17px] font-medium">
              {loginError.passwordError}
            </span>
          </div>
          <button
            className="w-full py-[15px] rounded-[86px] leading-10 bg-auth_blue_color font-nunito text-[20.64px] text-white font-normal"
            onClick={handleSignUp}>
            {loader ? (
              <BeatLoader
                color="#FF0000"
                loading={loader}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Sign In"
            )}
          </button>
          <p className="font-nunito text-center cursor-pointer -mt-5 text-[18px]">
            Already have an account?
            <Link to={"/registration"}>
              <span className="text-red-600 font-semibold"> Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

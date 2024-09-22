/** @format */

import React, { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import BeatLoader from "react-spinners/SyncLoader.js";
import {
  emailpattenpass,
  Fullnamepattenpass,
  passwordpattenpass,
} from "../../../Utils/Validate.js";
import { successToast, errorToast, infoToast } from "../../../Utils/Toast.js";

const Registration = () => {
  //firebase connection
  const auth = getAuth();

  // State for input
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [password, setpassword] = useState("");

  // State for errors
  const [emailerror, setemailerror] = useState("");
  const [fullnameerror, setfullnameerror] = useState("");
  const [passworderror, setpassworderror] = useState("");

  // State for spnner
  const [loader, setloader] = useState(false);

  // State for Eyeopen
  const [eyeOpen, seteyeOpen] = useState(true);
  const handeleye = () => {
    seteyeOpen(!eyeOpen);
  };

  // State for valueS
  const handelEmail = (event) => {
    setemail(event.target.value);
  };

  const handelFullname = (event) => {
    setfullname(event.target.value);
  };

  const handelPassword = (event) => {
    setpassword(event.target.value);
  };

  //useEffect user disply name implement
  useEffect(() => {
    onAuthStateChanged(auth, (userinfo) => {
      console.log(userinfo.displayName);
    });
  });

  //State for Submmit
  const handelSubmit = () => {
    if (!email || !emailpattenpass(email)) {
      setemailerror("Your email is undifind....?");
    } else if (!fullname || !Fullnamepattenpass(fullname)) {
      setemailerror("");
      setfullnameerror("Pleace type your full name....?");
    } else if (!password || !passwordpattenpass(password)) {
      setfullnameerror("");
      setpassworderror("Your password is wrong....?");
    } else {
      setemailerror("");
      setfullnameerror("");
      setpassworderror("");
      setloader(true);

      // Create user with email and password
      createUserWithEmailAndPassword(auth, email, password)
        .then((userinfo) => {
          successToast("Your Registration Is Done");
        })
        .then(() => {
          sendEmailVerification(auth.currentUser).then(() => {
            successToast("Pleace check your email");
          });
        })
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: fullname,
          });
        })
        .catch((error) => {
          //react toastity Error implement
          let errormessage = error.message.split("/")[1];
          errorToast(errormessage.slice(0, errormessage.length - 2));
        })
        .finally(() => {
          setemail("");
          setfullname("");
          setpassword("");
          setemailerror("");
          setfullnameerror("");
          setpassworderror("");
          setloader(false);
          eyeOpen(true);
        });
    }
  };

  return (
    <>
      <div className=" justify-center h-screen">
        <div className="flex justify-center items-center h-full">
          <div className="flex flex-col gap-y-10">
            {/* Top part */}
            <div>
              <span className="flex justify-center text-[50px]">
                <a
                  href="https://www.linkedin.com/"
                  target="_"
                  className=" text-auth_blue_color pb-[42px]">
                  <FaLinkedin />
                </a>
              </span>
              <h3 className="font-Nunito text-[32.4px] font-semibold pb-3 text-auth_font_color">
                Get started with easily register
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
                  value={email}
                  onChange={handelEmail}
                  className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your email/gmail"
                />
              </fieldset>
              <span className="text-red-700 font-Nunito text-[17px] font-medium">
                {emailerror}
              </span>
            </div>
            {/* FullName impliment */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Full Name
                </legend>
                <input
                  type="text"
                  name="text"
                  value={fullname}
                  onChange={handelFullname}
                  className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[16px] p-4"
                  placeholder="Enter your full name"
                />
              </fieldset>
              <span className="text-red-700 font-Nunito text-[17px] font-medium">
                {fullnameerror}
              </span>
            </div>
            {/* Password impliment */}
            <div className="flex flex-col gap-y-3">
              <fieldset className="border-[2px] rounded-md border-auth_font_color opacity-70">
                <legend className="font-nunito px-3 font-medium ml-8 text-[15.76px] text-auth_font_color">
                  Password
                </legend>
                <div className="flex items-center">
                  <input
                    type={eyeOpen ? "password" : "text"}
                    name="password"
                    value={password}
                    onChange={handelPassword}
                    className="text-[18px] placeholder:text-auth_opasiti_color w-full placeholder:text-[40px] p-4"
                    placeholder="......."
                  />
                  <span className="pr-5 cursor-pointer" onClick={handeleye}>
                    {eyeOpen ? <FaEyeSlash /> : <FaRegEye />}
                  </span>
                </div>
              </fieldset>
              <span className="text-red-700 font-Nunito text-[17px] font-medium">
                {passworderror}
              </span>
            </div>
            <button
              className="w-full py-[15px] rounded-[86px] leading-10 bg-auth_blue_color font-nunito text-[20.64px] text-white font-normal"
              onClick={handelSubmit}>
              {loader ? (
                <BeatLoader
                  color="#FF0000"
                  loading={loader}
                  size={15}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;

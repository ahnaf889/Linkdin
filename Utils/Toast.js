/** @format */

import { toast, Bounce } from "react-toastify";

/**
 * todo: SuccessToast funtion implement
 * @param {*} message
 */
export const successToast = (message, position = "top-left") => {
  toast.success(message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

/**
 * todo: Errortoast funtion implement
 * @param {*} message
 */
export const errorToast = (message, position = "top-right") => {
  toast.error(message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

/**
 * todo: InfoToast funtion implement
 * @param {*} message
 */
export const infoToast = (message, position = "top-right") => {
  toast.info(message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

import moment from "moment";

export const getTimeNow = () => {
  return moment().format("DD MM YYYY, h:mm:ss a");
};

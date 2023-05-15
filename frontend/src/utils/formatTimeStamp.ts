import moment from "moment";
export const formatTimeStamp = (value: any) => {
  let date = new Date(value);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let formattedTime =
    hours + ":" + minutes + " - " + moment(date).format("DD/MM/YYYY");
  return formattedTime;
};

import moment from "moment";
function getMinutes2Digits(date: any) {
  return String(date.getMinutes()).padStart(2, "0");
}
function getHours2Digits(date: any) {
  return String(date.getHours()).padStart(2, "0");
}
export const formatTimeStamp = (value: any) => {
  let date = new Date(value);
  let hours = getHours2Digits(date);
  let minutes = getMinutes2Digits(date);
  let formattedTime =
    hours + ":" + minutes + " - " + moment(date).format("DD/MM/YYYY");
  return formattedTime;
};

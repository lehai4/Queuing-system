import moment from "moment";
function getMinutes2Digits_version2(date: any) {
  return String(date.getMinutes()).padStart(2, "0");
}
function getHours2Digits_version2(date: any) {
  return String(date.getHours()).padStart(2, "0");
}
export const formatTimeStamp_version2 = (value: any) => {
  let date = new Date(value);
  let hours = getHours2Digits_version2(date);
  let minutes = getMinutes2Digits_version2(date);
  let second = date.getSeconds();
  let formattedTime =
    moment(date).format("DD/MM/YYYY") +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    second;
  return formattedTime;
};

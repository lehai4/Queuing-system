import axios from "axios";

export const LoginApi = async (user: any) => {
  return axios
    .post(`http://localhost:3001/v1/auth/signIn`, user)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
};

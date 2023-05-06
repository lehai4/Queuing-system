import axios from "axios";
import jwt_decode from "jwt-decode";
import { currentUserProps } from "../../typeProps";

const refreshToken = async () => {
  try {
    const res: any = await axios.post("http://localhost:3001/v1/auth/refresh", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const createAxios = (
  currentUser: currentUserProps | null,
  dispatch: any,
  stateSuccess: any
) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      type decodedProps = {
        id: string;
        admin: boolean;
        iat: number;
        exp: number;
      };
      const decodedToken: decodedProps = jwt_decode(
        currentUser?.accessToken ?? ""
      );
      if (decodedToken.exp < date.getTime() / 1000) {
        const data: any = await refreshToken();
        const refreshUser = {
          ...currentUser,
          accessToken: data?.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer" + data.accessToken;
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};

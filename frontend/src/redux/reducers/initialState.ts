import {
  PropLogin,
  PropRegister,
  PropLogOut,
  ApplianceProp,
  UsersProp,
} from "../../typeProps";

const login: PropLogin = {
  currentUser: null,
  isFetching: false,
  error: false,
};
const register: PropRegister = {
  isFetching: false,
  error: false,
  success: false,
};
const logOut: PropLogOut = {
  isFetching: false,
  error: false,
};
const users: UsersProp = {
  allUsers: null,
  isFetching: false,
  error: false,
  message: "",
};
type applianceProps = {
  applianceArr: ApplianceProp[];
  status: string;
};
let appliance: applianceProps = {
  applianceArr: [],
  status: "idle",
};
//
export type initialStateType = {
  login: PropLogin;
  register: PropRegister;
  logOut: PropLogOut;
  users: UsersProp;
  appliance: applianceProps;
  apiCallInProgress: number;
};

const initialState: initialStateType = {
  login,
  register,
  logOut,
  users,
  appliance,
  apiCallInProgress: 0,
};
export default initialState;

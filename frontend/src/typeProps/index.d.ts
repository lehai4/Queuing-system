export interface User {
  username: string;
  password: string;
  confirmpassword: string;
  email: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
  _id: string;
  admin: boolean;
}
interface currentUserProps {
  user?: User | null | undefined;
  accessToken: string;
}
export interface PropLogin {
  currentUser: currentUserProps | null;
  isFetching: boolean;
  error: boolean;
}
export interface PropRegister {
  isFetching: boolean;
  error: boolean;
  success: boolean;
}
export interface PropLogOut {
  isFetching: boolean;
  error: boolean;
}
export interface UsersProp {
  allUsers: User[] | null;
  isFetching: boolean;
  error: boolean;
  message: string;
}
export interface ApplianceProp {
  uId: string;
  id: number;
  nameAppliance: string;
  addressIP: string;
  statusActive: string;
  statusConnect: string;
  typeAppliance: string;
  nameSignIn: string;
  passSignIn: string;
  useService: string;
}
export interface GrantNumberInterface {
  stt: string;
  name: string;
  nameService: string;
  timeGrant: Date;
  expireUse: Date;
  status: number;
  sourceProvider: string;
  phone: string;
  email: email;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
  admin: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
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
export interface ReportInterface {
  stt: string;
  nameService: string;
  timeGrant: Date;
  status: number;
  sourceProvider: string;
}
export interface AccountProps {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
  admin: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}

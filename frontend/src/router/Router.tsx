import { Navigate, Route, Routes } from "react-router-dom";
import {
  AddAccountPage,
  ApplianceDetail,
  ApplianceFormAdd,
  ApplianceFormUpdate,
  Authentication,
  GrantNumberNew,
  NotFound,
  Profile,
  UpdateAccountPage,
} from "../components";
import GrantNumberDetail from "../components/GrantNumber/GrantNumberDetail";
import { useAppSelector } from "../hooks/hooks";
import {
  Appliance,
  GrantNumber,
  HistoryActive,
  Home,
  ManagerAccount,
  ManagerRule,
  Report,
  Service,
} from "../pages";
export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  const datas = useAppSelector(
    (state) => state.appliances.appliance.applianceArr
  );
  const granNumber = useAppSelector(
    (state) => state.grantNumbers.grantNumber.grantArr
  );
  const user = useAppSelector((state) => state.auth.login.currentUser?.user);
  const allUsers = useAppSelector((state) => state?.users?.users?.allUsers);
  const getProductBySlug = (slug: string) => datas.find((e) => e.uId == slug);
  const getUserBySlug = (slug: string) => allUsers?.find((e) => e._id === slug);
  const getGrantNumberBySlug = (slug: string) =>
    granNumber.find((e) => e.stt == slug);
  return (
    <Routes>
      <Route path="/trang-chu" element={<Home />} />
      <Route
        path="/"
        element={
          user === undefined ? (
            <Navigate to="/auth" />
          ) : (
            <Navigate to="/trang-chu" />
          )
        }
      />

      <Route path="/auth" element={<Authentication />}>
        <Route path=":slug" element={<Authentication />} />
      </Route>

      <Route path="/thiet-bi/them-thiet-bi" element={<ApplianceFormAdd />} />
      <Route
        path="/thiet-bi/cap-nhat-thiet-bi/:slug"
        element={<ApplianceFormUpdate getProductBySlug={getProductBySlug} />}
      />
      <Route
        path="/thiet-bi/chi-tiet/:slug"
        element={<ApplianceDetail getProductBySlug={getProductBySlug} />}
      />
      <Route path="/thiet-bi" element={<Appliance />} />

      <Route path="/dich-vu" element={<Service />} />

      <Route path="/cap-so/cap-so-moi" element={<GrantNumberNew />} />
      <Route
        path="/cap-so/chi-tiet/:slug"
        element={
          <GrantNumberDetail getGrantNumberBySlug={getGrantNumberBySlug} />
        }
      />
      <Route path="/cap-so" element={<GrantNumber />} />

      <Route path="/bao-cao" element={<Report />} />

      <Route
        path="/cai-dat/quan-li-tai-khoan/cap-nhat-tai-khoan/:slug"
        element={<UpdateAccountPage getUserBySlug={getUserBySlug} />}
      />
      <Route
        path="/cai-dat/quan-li-tai-khoan/them-tai-khoan"
        element={<AddAccountPage />}
      />
      <Route path="/cai-dat">
        <Route path="quan-li-tai-khoan" element={<ManagerAccount />} />
        <Route path="quan-li-vai-tro" element={<ManagerRule />} />
        <Route path="history-active" element={<HistoryActive />} />
      </Route>

      <Route path="/profile" element={<Profile />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;

import { Navigate, Route, Routes } from "react-router-dom";
import {
  Authentication,
  ApplianceFormAdd,
  ApplianceFormUpdate,
  ApplianceDetail,
  NotFound,
} from "../components";
import { useAppSelector } from "../hooks/hooks";
import {
  Appliance,
  GrantNumber,
  Home,
  Report,
  Service,
  Setting,
} from "../pages";
import { ApplianceProp } from "../typeProps";
export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  const datas = useAppSelector(
    (state) => state.appliances.appliance.applianceArr
  );
  const getProductBySlug = (slug: string) => datas.find((e) => e.uId == slug);
  const user = useAppSelector((state) => state.auth.login.currentUser?.user);
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route
        path="/"
        element={
          user === undefined ? (
            <Navigate to="/auth" />
          ) : (
            <Navigate to="/dashboard" />
          )
        }
      />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/auth/:slug" element={<Authentication />} />
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
      <Route path="/cap-so" element={<GrantNumber />} />
      <Route path="/bao-cao" element={<Report />} />
      <Route path="/cai-dat" element={<Setting />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default Router;

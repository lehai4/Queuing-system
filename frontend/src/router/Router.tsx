import { Authentication, NotFound } from "../components";
import { Navigate } from "react-router-dom";
import {
  Home,
  Appliance,
  Setting,
  GrantNumber,
  Service,
  Report,
} from "../pages";
import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";
export interface IRouterProps {}
const Router: React.FunctionComponent<IRouterProps> = () => {
  const user = useAppSelector((state) => state.auth.login.currentUser);
  return (
    <Routes>
      <Route path="/dashboard" element={<Home />} />
      <Route
        path="/"
        element={!user ? <Navigate to="/auth" /> : <Navigate to="/dashboard" />}
      />
      <Route path="/auth" element={<Authentication />} />
      <Route path="/auth/:slug" element={<Authentication />} />
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

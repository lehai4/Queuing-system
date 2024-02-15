import { SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import iconBaocao from "../assets/icon/baocao.png";
import iconCapso from "../assets/icon/capso.png";
import iconDashboard from "../assets/icon/dashboard.png";
import iconDichvu from "../assets/icon/dichvu.png";
import iconLogOut from "../assets/icon/fi_log-out.png";
import iconMoniter from "../assets/icon/monitor.png";
import logo from "../assets/img/Logo_alta.png";
import { Button, Wrapper } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logOut } from "../redux/apiRequest";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    <span className="font-normal">Trang chủ </span>,
    "/trang-chu",
    <img src={iconDashboard} />
  ),
  getItem(
    <span className="font-normal">Thiết bị</span>,
    "/thiet-bi",
    <img src={iconMoniter} />
  ),
  getItem(
    <span className="font-normal">Dịch vụ</span>,
    "/dich-vu",
    <img src={iconDichvu} />
  ),
  getItem(
    <span className="font-normal">Cấp số</span>,
    "/cap-so",
    <img src={iconCapso} />
  ),
  getItem(
    <span className="font-normal">Báo cáo</span>,
    "/bao-cao",
    <img src={iconBaocao} />
  ),
  getItem(
    <span className="font-normal">Cài đặt</span>,
    "/cai-dat",
    <SettingOutlined style={{ fontSize: 18, color: "gray" }} />,
    [
      getItem(
        <span className="font-normal">Quản lý vai trò</span>,
        "/cai-dat/quan-li-vai-tro"
      ),
      getItem(
        <span className="font-normal">Quản lý tài khoản</span>,
        "/cai-dat/quan-li-tai-khoan"
      ),
      getItem(
        <span className="font-normal">Nhật ký người dùng</span>,
        "/cai-dat/history-active"
      ),
    ]
  ),
];
const Sidebar = () => {
  const currentColor = "#FF7506";
  const bgColor = "#FFF2E7";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.login.currentUser);

  const handleLogOut = () => {
    logOut(dispatch, navigate, currentUser?.accessToken ?? "");
  };

  return (
    <Wrapper className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto relative">
      <div className="flex justify-center items-center">
        <Link
          to="/"
          className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
        >
          <img src={`${logo}`} alt="logo" />
        </Link>
      </div>
      <Wrapper className="mt-24 mt-24-override">
        <Menu
          mode="vertical"
          defaultSelectedKeys={["/dashboard"]}
          onClick={(e) => {
            navigate(`${e.key}`);
          }}
          items={items}
          style={{
            width: "inherit",
            border: "none",
            fontSize: 17,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
          className="bg-white"
        />
      </Wrapper>
      <Button
        text="Đăng xuất"
        handleClick={handleLogOut}
        icon={iconLogOut}
        style={{
          width: 176,
          backgroundColor: bgColor,
          color: currentColor,
          alignItems: "center",
          padding: "12px 0px",
          fontSize: 16,
          position: "absolute",
          bottom: 45,
          gap: 12,
          left: "50%",
          flexDirection: "row",
          transform: "translateX(-50%)",
          borderRadius: 8,
          border: `1px solid ${bgColor}`,
        }}
        bgHoverColor="#FF9138"
      />
    </Wrapper>
  );
};

export default Sidebar;

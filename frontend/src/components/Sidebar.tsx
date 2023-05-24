import React, { useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import iconLogOut from "../assets/icon/fi_log-out.png";
import iconCatdat from "../assets/icon/setting.png";
import logo from "../assets/img/Logo_alta.png";
import { Button, Wrapper } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { links } from "../mock/dummy";
import { logOut } from "../redux/apiRequest";
import SidebarLinkGroup from "./SidebarLinkGroup";

const Sidebar = () => {
  const currentColor = "#FF7506";
  const activeMenu = true;
  const bgColor = "#FFF2E7";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.login.currentUser);
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );
  const handleLogOut = () => {
    logOut(dispatch, navigate, currentUser?.accessToken ?? "");
  };
  const activeLink =
    "flex items-center mb-1 gap-3 pl-7 pb-15-override pt-15-override text-white  text-md";
  const normalLink =
    "flex items-center mb-1 gap-3 pl-7 pb-15-override pt-15-override text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray";

  return (
    <Wrapper className="h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto relative">
      {activeMenu && (
        <>
          <div className="flex justify-center items-center">
            <Link
              to="/"
              className="items-center gap-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <img src={`${logo}`} alt="logo" />
            </Link>
          </div>
          <Wrapper className="mt-24 mt-24-override">
            {links.map((link) => (
              <div key={link.name}>
                <NavLink
                  to={`${link.path}`}
                  key={link.name}
                  style={({ isActive }) => ({
                    backgroundColor: isActive ? currentColor : "",
                  })}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  <span className="icon-sidebar">
                    <img src={`${link.iconVector}`} alt="" />
                  </span>
                  <span className="capitalize">{link.name}</span>
                </NavLink>
              </div>
            ))}

            <SidebarLinkGroup activecondition={pathname.includes("cai-dat")}>
              {(handleClick: () => void, open: boolean) => {
                return (
                  <React.Fragment>
                    <a
                      href="#0"
                      className={`block text-black-500 truncate transition duration-150`}
                      onClick={(e) => {
                        e.preventDefault();
                        sidebarExpanded
                          ? handleClick()
                          : setSidebarExpanded(true);
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src={`${iconCatdat}`} alt="" />
                          <span className="capitalize ml-3 ">Cài đặt</span>
                        </div>
                        {/* Icon */}
                        <div className="flex shrink-0 ml-2">
                          <svg
                            className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${
                              open && "rotate-180"
                            }`}
                            viewBox="0 0 12 12"
                          >
                            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                          </svg>
                        </div>
                      </div>
                    </a>
                    <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                      <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                        <li className="my-4 last:mb-0">
                          <NavLink
                            end
                            to="/cai-dat/quan-li-vai-tro"
                            className={({ isActive }) =>
                              "block transition duration-150 truncate " +
                              (isActive ? "text-white" : "hover:opacity-70")
                            }
                          >
                            <span className="capitalize lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Quản lý vai trò
                            </span>
                          </NavLink>
                        </li>
                        <li className="my-4 last:mb-0">
                          <NavLink
                            end
                            to="/cai-dat/quan-li-tai-khoan"
                            className={({ isActive }) =>
                              "block transition duration-150 truncate " +
                              (isActive ? "text-white" : " hover:opacity-70")
                            }
                          >
                            <span className="capitalize lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Quản lý tài khoản
                            </span>
                          </NavLink>
                        </li>
                        <li className="my-4 last:mb-0">
                          <NavLink
                            end
                            to="/cai-dat/history-user"
                            className={({ isActive }) =>
                              "block transition duration-150 truncate " +
                              (isActive ? "text-white" : "hover:opacity-70")
                            }
                          >
                            <span className="capitalize lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                              Nhật ký người dùng
                            </span>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </React.Fragment>
                );
              }}
            </SidebarLinkGroup>
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
        </>
      )}
    </Wrapper>
  );
};

export default Sidebar;

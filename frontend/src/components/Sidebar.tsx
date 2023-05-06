import { Link, NavLink, useNavigate } from "react-router-dom";
import iconLogOut from "../assets/icon/fi_log-out.png";
import logo from "../assets/img/Logo_alta.png";
import { Button, Wrapper } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { links } from "../mock/dummy";
import { logOut } from "../redux/apiRequest";

const Sidebar = () => {
  const currentColor = "#FF7506";
  const activeMenu = true;
  const bgColor = "#FFF2E7";
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentUser = useAppSelector((state) => state.auth.login.currentUser);

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
                  to={`/${link.path}`}
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
              bottom: 30,
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

import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { Wrapper } from ".";
import notifications from "../assets/icon/notifi.png";
import avatar from "../assets/img/unsplash_Fyl8sMC2j2Q.png";
import { useAppSelector } from "../hooks/hooks";
import Notification from "./Notification";

type NavButtonProps = {
  title: string;
  color: string;
  img: string;
  dotColor: string;
  handleClick: () => void;
};
const NavButton = ({
  title,
  color,
  img,
  handleClick,
  dotColor,
}: NavButtonProps) => (
  <Tooltip title={title} placement="top">
    <button
      type="button"
      style={{ color }}
      className={`relative text-xl rounded-full p-3 `}
      onClick={handleClick}
    >
      <div>{img ? <img src={`${img}`} alt="" /> : <span></span>}</div>
    </button>
  </Tooltip>
);
type UserProp = {
  isLayoutChange: boolean;
};
const User = ({ isLayoutChange }: UserProp) => {
  const bgColor = "#FFF2E7";
  const [toggle, setToggle] = useState<boolean>(false);
  const user = useAppSelector((state) => state.auth.login.currentUser?.user);
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };
  return (
    <Wrapper className="p-3 md:ml-0 relative">
      <Wrapper className="flex items-center user gap-4">
        <NavButton
          title="Notification"
          dotColor={toggle ? "#FF7506" : ""}
          color={bgColor}
          img={`${notifications}`}
          handleClick={handleToggle}
        />
        <Wrapper className="flex items-center gap-2 cursor-pointer hover:bg-light-gray rounded-lg">
          <Wrapper className="flex items-center">
            <Tooltip title="Profile" placement="bottom">
              <img
                className="rounded-full w-9 h-9"
                src={`${avatar}`}
                alt="user-profile"
              />
            </Tooltip>
            <Wrapper className="flex flex-col ml-2">
              <span className="welcome">Xin chào</span>
              <span className="username">{user?.name}</span>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      {toggle && <Notification isLayoutChange={isLayoutChange} />}
    </Wrapper>
  );
};

export default User;

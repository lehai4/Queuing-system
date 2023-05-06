import Tooltip from "@mui/material/Tooltip";
import { Wrapper } from ".";
import notifications from "../assets/icon/notifi.png";
import avatar from "../assets/img/unsplash_Fyl8sMC2j2Q.png";
import { useAppSelector } from "../hooks/hooks";

type NavButtonProps = {
  title: string;
  color: string;
  img: string;
  dotColor: string;
};
const NavButton = ({ title, color, img, dotColor }: NavButtonProps) => (
  <Tooltip title={title} placement="top">
    <button
      type="button"
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <div>{img ? <img src={`${img}`} alt="" /> : <span></span>}</div>
    </button>
  </Tooltip>
);
const User = () => {
  const bgColor = "#FFF2E7";
  const user = useAppSelector((state) => state.auth.login.currentUser?.user);

  return (
    <Wrapper className="flex justify-between p-3 pl-6 md:ml-0 md:mr-6 relative">
      <Wrapper className="flex items-center user">
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          color={bgColor}
          img={`${notifications}`}
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
    </Wrapper>
  );
};

export default User;

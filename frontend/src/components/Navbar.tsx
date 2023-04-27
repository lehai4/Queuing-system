import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Input, Wrapper } from ".";
import avatar from "../assets/img/unsplash_Fyl8sMC2j2Q.png";
type NavButtonProps = {
  title: string;
  color: string;
  img: string;
  dotColor: string;
};
const NavButton = ({ title, color, img, dotColor }: NavButtonProps) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <div>{img ? <img src={`${img}`} alt="" /> : <span></span>}</div>
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const bgColor = "#FFF2E7";
  return (
    <Wrapper className="flex justify-between p-3 pl-6 md:ml-0 md:mr-6 relative">
      <Wrapper className="flex align-center search relative">
        <Input
          name=""
          value=""
          id=""
          typeInput=""
          width={370}
          className="search-input navbar"
          placeholder="Tìm bằng số vé"
          handleChange={() => {}}
        />
      </Wrapper>
      <Wrapper className="flex align-center user">
        <NavButton title="Mail" dotColor="#03C9D7" color={bgColor} img="" />
        <NavButton
          title="Notification"
          dotColor="rgb(254, 201, 15)"
          color={bgColor}
          img=""
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <Wrapper className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg">
            <img
              className="rounded-full w-9 h-9"
              src={`${avatar}`}
              alt="user-profile"
            />
          </Wrapper>
        </TooltipComponent>
      </Wrapper>
    </Wrapper>
  );
};

export default Navbar;

import Wrapper from "./Wrapper";
import arrow from "../assets/icon/u_angle-right.png";
type DirectionProps = {
  direction: string;
  redirection: string;
};
const Direction = (props: DirectionProps) => {
  return (
    <Wrapper className="flex items-center direction md:ml-2">
      <img src={`${arrow}`} alt="" className="md:mr-2" />
      {props.direction && <span>{props.direction}</span>}
      {props.redirection && <span>{props.redirection}</span>}
    </Wrapper>
  );
};

export default Direction;

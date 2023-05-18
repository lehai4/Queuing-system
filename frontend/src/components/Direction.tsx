import { Link } from "react-router-dom";
import arrow from "../assets/icon/u_angle-right.png";
import Wrapper from "./Wrapper";
type DirectionProps = {
  direction: string;
  slug: string | undefined;
  path: string;
  redirection: string;
};
const Direction = (props: DirectionProps) => {
  return (
    <Wrapper className="flex items-center direction md:ml-2">
      {props.direction !== "" && props.redirection === "" ? (
        <>
          <img src={`${arrow}`} alt="" className="md:mr-2" />
          <Link
            to={`http://localhost:3000/${props.path}`}
            className={`${
              props.direction !== "" && props.redirection === ""
                ? "text-orange-400"
                : "text-gray-500"
            }`}
          >
            {props.direction}
          </Link>
        </>
      ) : props.redirection !== "" && props.direction === "" ? (
        <>
          <img src={`${arrow}`} alt="" className="md:mr-2" />
          <Link
            to={`http://localhost:3000/${props.path}/${props.redirection}/${props.slug}`}
          >
            {props.redirection}
          </Link>
        </>
      ) : props.direction !== "" && props.redirection !== "" ? (
        <>
          <img src={`${arrow}`} alt="" className="md:mr-2" />
          <Link
            to={`http://localhost:3000/${props.path}`}
            className="text-gray-500"
          >
            {props.direction}
          </Link>
          <img src={`${arrow}`} alt="" className="md:mr-2" />
          <Link
            to={`http://localhost:3000/${props.path}/${props.redirection}/${props.slug}`}
          >
            {props.redirection}
          </Link>
        </>
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Direction;

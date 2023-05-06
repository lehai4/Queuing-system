import { Wrapper, Header, Direction } from ".";

type NavProps = {
  direct: boolean;
  title: string;
  redirect: boolean;
  showDirection: string;
  showRedirection: string;
};

const Navbar = (props: NavProps) => {
  return (
    <Wrapper className="flex items-center relative">
      <Header
        title={props.title}
        style={{
          fontWeight: 600,
          fontSize: 20,
          color: "#7E7D88",
          lineHeight: "110%",
        }}
      />
      {props.direct && (
        <Direction direction={props.showDirection} redirection="" />
      )}
      {props.redirect && (
        <Direction direction="" redirection={props.showRedirection} />
      )}
    </Wrapper>
  );
};

export default Navbar;

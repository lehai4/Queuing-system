import { Wrapper, Header, Direction } from ".";

type NavProps = {
  title: string;
  path: string;
  slug: string | undefined;
  direct: boolean;
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
      {props.direct === true && props.redirect === false ? (
        <Direction
          slug={props.slug}
          path={props.path}
          direction={props.showDirection}
          redirection=""
        />
      ) : props.redirect === true && props.direct === false ? (
        <Direction
          slug={props.slug}
          path={props.path}
          direction=""
          redirection={props.showRedirection}
        />
      ) : props.direct === true && props.redirect === true ? (
        <Direction
          slug={props.slug}
          path={props.path}
          direction={props.showDirection}
          redirection={props.showRedirection}
        />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default Navbar;

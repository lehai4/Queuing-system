import { Header, Helmet, Navbar, User, Wrapper } from "../components";
const Setting = () => {
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cài đặt hệ thống"
          direct={true}
          redirect={false}
          path="thiet-bi"
          slug="/"
          showRedirection=""
          showDirection=""
        />
      </div>
      <Helmet title="Cài đặt">
        <Header
          title="Danh sách vai trò"
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
        <Wrapper className="absolute top-1 right-11">
          <User isLayoutChange={true} />
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default Setting;

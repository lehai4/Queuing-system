import { Header, Helmet, Wrapper } from "../components";
const Setting = () => {
  return (
    <Wrapper className="md:m-10 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-12 md:pt-4 md:pl-6 bg-white rounded-3xl">
      <Helmet title="Cài đặt">
        <Header
          title="Cài đặt"
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
      </Helmet>
    </Wrapper>
  );
};

export default Setting;

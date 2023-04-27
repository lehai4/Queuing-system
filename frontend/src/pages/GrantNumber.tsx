import { Helmet, Wrapper, Header } from "../components";

const GrantNumber = () => {
  return (
    <Wrapper className="md:m-10 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-12 md:pt-4 md:pl-6 bg-grey rounded-3xl">
      <Helmet title="Cấp số">
        <Header
          title="Cấp số"
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
export default GrantNumber;

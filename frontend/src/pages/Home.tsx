import { Box } from "@mui/material";
import { Header, Helmet, Rectangle, User, Wrapper, Frame } from "../components";
import MiniCalendar from "../components/Calender";
import { item, items } from "../mock/dummy";

const Home = () => {
  return (
    <Helmet title="Trang chủ">
      <Wrapper className="grid grid-cols-3">
        <Wrapper className="col-span-2">
          <Wrapper className="md:mb-0 md:ml-0 mt-24 md:p-6 bg-main-grey rounded-3xl">
            <Header
              title="Dashboard"
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "#FF7506",
                lineHeight: "110%",
              }}
            />
            <Header
              title="Biểu đồ cấp số"
              style={{
                fontWeight: 700,
                marginTop: 55,
                fontSize: 24,
                color: "#FF7506",
                lineHeight: "110%",
              }}
            />
            <Wrapper className="grid grid-cols-4 gap-4 md:mb-5 md:mt-5">
              <Rectangle items={item} />
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper className="col-span-1 relative bg-white min-h-screen">
          <Wrapper className="md:mb-0 md:ml-0 mt-24 md:p-6 md:pt-0 rounded-3xl">
            <Wrapper className="absolute top-1 left-2/4 -translate-x-2/4">
              <User />
            </Wrapper>
            <Wrapper className="md:mt-28">
              <Header
                title="Tổng quan"
                style={{
                  fontWeight: 700,
                  fontSize: 24,
                  color: "#FF7506",
                  lineHeight: "110%",
                }}
              />
            </Wrapper>
            <Wrapper className="md:mb-5 md:mt-5 w-full flex flex-col gap-y-4">
              <Frame items={items} />
            </Wrapper>
            <Wrapper className="md:mb-5 md:mt-6 w-full flex flex-col gap-y-4">
              <Box
                sx={{
                  width: 512,
                  height: 400,
                  backgroundColor: "#FFF",
                  borderRadius: 3,
                  padding: 4,
                  boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <MiniCalendar selectRange={false} />
              </Box>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Helmet>
  );
};

export default Home;

import { Box } from "@mui/material";
import format from "date-fns/format";
import vi from "date-fns/locale/vi";
import { useState } from "react";
import {
  Frame,
  Header,
  Helmet,
  Rectangle,
  Selector,
  User,
  Wrapper,
} from "../components";
import MiniCalendar from "../components/Calender";
import AreaChart from "../components/Chart/AreaChart";
import { item, items } from "../mock/dummy";

const Home = () => {
  const [value, setValue] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const handleChange = (event: any) => {
    setSelectedDate(event);
  };
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
            <Box
              sx={{
                width: "inherit",
                height: 585,
                backgroundColor: "#FFF",
                borderRadius: 3,
                boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Wrapper className="md:p-4">
                <Wrapper className="flex flex-row items-center justify-between md:mt-2">
                  <Header
                    title={`Bảng thống kê theo ${value.toLowerCase()}`}
                    style={{
                      fontWeight: 700,
                      marginTop: 0,
                      marginLeft: 20,
                      fontSize: 20,
                      color: "#111",
                      lineHeight: "110%",
                    }}
                  />
                  <Wrapper className="flex flex-row items-center gap-3 md:mr-3">
                    <span className="text-base font-semibold text-black-500">
                      Xem thêm
                    </span>
                    <Selector
                      optionComon="Ngày"
                      isShowCommon={true}
                      setValue={setValue}
                      items={["Ngày", "Tuần", "Tháng"].map((act) => act)}
                    />
                  </Wrapper>
                </Wrapper>
                <Wrapper className="md:my-4 md:ml-5">
                  {value === "Ngày"
                    ? format(selectedDate as Date, "MMMM/yyyy", { locale: vi })
                    : value === "Tuần"
                    ? format(selectedDate as Date, "MMMM/yyyy", { locale: vi })
                    : `Năm ${format(selectedDate as Date, "yyyy", {
                        locale: vi,
                      })}`}
                </Wrapper>
                <AreaChart value={value} />
                <Wrapper className="unit text-sm text-gray-500 md:ml-5">
                  sl/ngày
                </Wrapper>
              </Wrapper>
            </Box>
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
                <MiniCalendar
                  selectRange={false}
                  selectedDate={selectedDate}
                  handleChange={handleChange}
                />
              </Box>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Helmet>
  );
};

export default Home;

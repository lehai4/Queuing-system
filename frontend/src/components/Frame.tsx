import { Box } from "@mui/material";
import { Wrapper } from "../components";
import RadialbarMulti from "./Chart/RadialbarMulti";
import iconActive from "../assets/icon/dotActive.png";
import iconNoActive from "../assets/icon/dotNoactive.png";
import iconUssing from "../assets/icon/dotUssing.png";
import iconWaiting from "../assets/icon/dotWaiting.png";
import iconIgnore from "../assets/icon/dotIgnore.png";
type FrameProps = {
  items: any[];
};
const Frame = (props: FrameProps) => {
  return (
    <>
      {props.items.map((item, i) => (
        <Box
          key={i}
          sx={{
            width: 512,
            height: 100,
            backgroundColor: "#FFF",
            paddingRight: 2,
            borderRadius: 3,
            boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Wrapper className="flex flex-row justify-between items-center gap-20">
            <Wrapper className="flex flex-row justify-between gap-2 items-center">
              <Wrapper className="cycle-chart">
                <RadialbarMulti options={item.options} series={item.series} />
              </Wrapper>
              <Wrapper className="flex flex-col">
                <h3 className="text-3xl font-bold">{item.total}</h3>
                <Wrapper className="flex flex-row items-center gap-2">
                  <img src={`${item.icon}`} alt="" />
                  <span
                    className={`${
                      item.type === "Thiết bị"
                        ? "text-orange-500"
                        : item.type === "Dịch vụ"
                        ? "text-blue-500"
                        : "text-green-500"
                    }`}
                  >
                    {item.type}
                  </span>
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper className="flex flex-1 flex-col gap-y-1.5">
              {item.active && item.noactive ? (
                <>
                  <Wrapper className="flex flex-row items-center gap-5">
                    <Wrapper className="flex flex-row items-center gap-2">
                      <img
                        src={
                          item.type === "Thiết bị"
                            ? `${iconActive}`
                            : `${iconUssing}`
                        }
                        alt=""
                      />
                      <h5 className="text-base text-gray-500 ">
                        Đang hoạt động
                      </h5>
                    </Wrapper>
                    <span
                      className={`text-base flex flex-1 font-semibold ${
                        item.type === "Thiết bị"
                          ? "text-orange-500"
                          : item.type === "Dịch vụ"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      {item.active}
                    </span>
                  </Wrapper>
                  <Wrapper className="flex flex-row items-center gap-3">
                    <Wrapper className="flex flex-row items-center gap-2">
                      <img src={`${iconNoActive}`} alt="" />
                      <h5 className="text-base text-gray-500 ">
                        Ngưng hoạt động
                      </h5>
                    </Wrapper>
                    <span
                      className={`text-base flex flex-1 font-semibold ${
                        item.type === "Thiết bị"
                          ? "text-orange-500"
                          : item.type === "Dịch vụ"
                          ? "text-blue-500"
                          : ""
                      }`}
                    >
                      {item.noactive}
                    </span>
                  </Wrapper>
                </>
              ) : (
                <>
                  <Wrapper className="flex flex-row items-center gap-16">
                    <Wrapper className="flex flex-row items-center gap-2">
                      <img src={`${iconWaiting}`} alt="" />
                      <h5 className="text-base text-gray-500">Đang chờ</h5>
                    </Wrapper>
                    <span className="text-base flex flex-1 font-semibold text-green-500">
                      {item.waiting}
                    </span>
                  </Wrapper>
                  <Wrapper className="flex flex-row items-center gap-15">
                    <Wrapper className="flex flex-row items-center gap-2">
                      <img src={`${iconNoActive}`} alt="" />
                      <h5 className="text-base text-gray-500">Đã sử dụng</h5>
                    </Wrapper>
                    <span className="text-base flex flex-1 font-semibold text-green-500">
                      {item.ussing}
                    </span>
                  </Wrapper>
                  <Wrapper className="flex flex-row items-center gap-21">
                    <Wrapper className="flex flex-row items-center gap-2">
                      <img src={`${iconIgnore}`} alt="" />
                      <h5 className="text-base text-gray-500">Bỏ qua</h5>
                    </Wrapper>
                    <span className="text-base flex flex-1 font-semibold text-green-500">
                      {item.ignore}
                    </span>
                  </Wrapper>
                </>
              )}
            </Wrapper>
          </Wrapper>
        </Box>
      ))}
    </>
  );
};

export default Frame;

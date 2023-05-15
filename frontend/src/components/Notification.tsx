import { Box } from "@mui/material";
import { Header, Wrapper } from "../components";
import { notifiItem } from "../mock/dummy";
import moment from "moment";
const formatTimeStamp = (value: any) => {
  var hours = value.getHours();
  var minutes = value.getMinutes();
  var formattedTime =
    hours + "h" + minutes + " ngày " + moment(value).format("DD/MM/YYYY");
  return formattedTime;
};
const Notification = () => {
  return (
    <Wrapper className="notification w-90 z-10 md:mt-3 absolute overscroll-contain">
      <Wrapper className="bg-orange-400 h-12 items-center flex justify-center rounded-t-xl">
        <Header
          title="Thông báo"
          style={{
            fontWeight: 500,
            fontSize: 20,
            marginTop: "-0.75rem",
            marginBottom: "-0.75rem",
            color: "#FFF",
            lineHeight: "110%",
          }}
        />
      </Wrapper>
      <Box
        sx={{
          width: 360,
          height: 325,
          backgroundColor: "#FFF",
          borderTop: "none",
          paddingLeft: 2,
          paddingRight: 2,
          overflow: "overlay",
          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
          boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
        }}
      >
        {notifiItem.map((noti, i) => (
          <Wrapper className="flex flex-col border-b-2 md:pt-4 md:pb-4" key={i}>
            <Wrapper className="text-orange-500 font-semibold text-base">
              Người dùng: {noti.name}
            </Wrapper>
            <Wrapper className="text-black-300 text-base">
              Thời gian nhận số:
              {` ${formatTimeStamp(noti.timestamp)}`}
            </Wrapper>
          </Wrapper>
        ))}
      </Box>
    </Wrapper>
  );
};

export default Notification;

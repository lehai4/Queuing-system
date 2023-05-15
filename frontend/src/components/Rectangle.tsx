import { Box } from "@mui/material";
import { Wrapper } from "../components";
type RectangleProps = {
  items: any[];
};
const Rectangle = (props: RectangleProps) => {
  return (
    <>
      {props.items.map((item, i) => (
        <Box
          key={i}
          sx={{
            width: 255,
            height: 150,
            backgroundColor: "#FFF",
            borderRadius: 3,
            boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Wrapper className="md:p-4">
            <Wrapper className="flex items-center flex-row md:mt-2 md:mb-5 gap-5 max-h-14 h-14">
              <img src={`${item.icon}`} alt="" />
              <span className="text-lg font-semibold">{item.name}</span>
            </Wrapper>
            <Wrapper className="flex items-center flex-row justify-between md:mt-2 md:mb-1.5">
              <h3 className="text-3xl font-bold">{item.total}</h3>
              <Wrapper
                className={`flex items-center flex-row ${
                  item.name === "Số thứ tự đã sử dụng" ||
                  item.name === "Số thứ tự đã bỏ qua"
                    ? " bg-red-200"
                    : "bg-orange-200"
                } rounded-lg md:p-0.5`}
              >
                <img src={`${item.iconRate}`} alt="" />
                <span
                  className={`text-xs ${
                    item.name === "Số thứ tự đã sử dụng" ||
                    item.name === "Số thứ tự đã bỏ qua"
                      ? " text-red-500"
                      : "text-orange-500"
                  } `}
                >
                  {item.rate}
                </span>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Box>
      ))}
    </>
  );
};

export default Rectangle;

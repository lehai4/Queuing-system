import { useState } from "react";
import { Button, Header, Helmet, Navbar, Selector, User, Wrapper } from "..";
import { useNavigate } from "react-router-dom";
const GrantNumberNew = () => {
  const navigate = useNavigate();
  const [service, setService] = useState<string>("");
  let serviceArrayCurrent = [
    "Khám tim mạch",
    "Khám sản - Phụ khoa",
    "Khám răng hàm mặt",
    "Khám tai mũi họng",
    "Khám hô hấp",
  ];
  const handlePrintNumber = () => {};
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <Wrapper className="md:mb-0 md:pr-6 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <Wrapper className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cấp số"
          direct={true}
          redirect={true}
          path="cap-so"
          slug=""
          showDirection="Danh sách cấp số"
          showRedirection="Cấp số mới"
        />
      </Wrapper>
      <Helmet title="Chi tiết thiết bị">
        <Header
          title="Quản lý cấp số"
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
        <Wrapper className="absolute top-1 right-5">
          <User />
        </Wrapper>
        <Wrapper className="flex flex-row md:mt-5 gap-7">
          <Wrapper className="flex-1 md:mb-4 p-2 md:p-8 md:pb-96 md:pt-4 md:pl-6 bg-white rounded-3xl">
            <Wrapper className="text-center">
              <Wrapper className="md:my-4">
                <Header
                  title="Cấp số mới"
                  style={{
                    fontWeight: 700,
                    fontSize: 32,
                    textTransform: "uppercase",
                    color: "#FF7506",
                    lineHeight: "110%",
                  }}
                />
              </Wrapper>
              <Wrapper className="text-xl text-gray-500 font-bold md:my-4 md:mt-6">
                Dịch vụ khách hàng lựa chọn
              </Wrapper>
              <Wrapper className="w-97 mx-auto">
                <Selector
                  optionComon="Chọn dịch vụ"
                  isShowCommon={false}
                  setValue={setService}
                  items={serviceArrayCurrent.map((act) => act)}
                />
              </Wrapper>
              <Wrapper className="flex flex-row items-center justify-center my-20 gap-8">
                <Button
                  text="Hủy bỏ"
                  icon=""
                  style={{
                    backgroundColor: "#FFF2E7",
                    color: "#FF9138",
                    border: "1px solid #FF9138",
                    fontSize: 16,
                    borderRadius: 6,
                    fontWeight: 700,
                    height: 48,
                    width: 115,
                  }}
                  handleClick={handleCancel}
                  bgHoverColor=""
                />
                <Button
                  text="In số"
                  icon=""
                  style={{
                    backgroundColor: " #FF9138",
                    color: "#FFF",
                    border: "1px solid #FF9138",
                    fontSize: 16,
                    borderRadius: 6,
                    fontWeight: 700,
                    height: 48,
                    width: 115,
                  }}
                  handleClick={handlePrintNumber}
                  bgHoverColor=""
                />
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default GrantNumberNew;

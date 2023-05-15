import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, Helmet, Navbar, Wrapper, User } from "..";
import { ApplianceProp } from "../../typeProps";

type PropsApplianceDetail = {
  getProductBySlug: (value: string) => ApplianceProp | undefined;
};
const ApplianceDetail = (props: PropsApplianceDetail) => {
  const { slug } = useParams();
  const data = props.getProductBySlug(slug ?? "");
  const navigate = useNavigate();
  const handleShowPageUpdate = (data: ApplianceProp | undefined) => {
    navigate(`/thiet-bi/cap-nhat-thiet-bi/${data?.uId}`);
  };
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <Wrapper className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Thiết bị"
          direct={true}
          redirect={true}
          path="thiet-bi"
          slug={slug}
          showDirection="Danh sách thiết bị"
          showRedirection="Chi tiết thiết bị"
        />
      </Wrapper>
      <Helmet title="Chi tiết thiết bị">
        <Header
          title="Quản lý thiết bị"
          style={{
            fontWeight: 700,
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
        <Wrapper className="absolute top-1 right-11">
          <User />
        </Wrapper>
        <Wrapper className="flex flex-row md:mt-5 gap-7">
          <Wrapper className="flex-1 md:mb-4 p-2 md:p-8 md:pb-96 md:pt-4 md:pl-6 bg-white rounded-3xl">
            <Wrapper className="detail-appliance">
              <Header
                title="Thông tin thiết bị"
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  marginBottom: 25,
                  color: "#FF7506",
                  lineHeight: "110%",
                }}
              />
              <Wrapper className="grid grid-cols-2">
                <Wrapper className="grid grid-span-1">
                  <Wrapper className="flex flex-col justify-start">
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-12">
                        Mã thiết bị:
                      </span>
                      <span className="tracking-wide text-base">
                        {data?.uId}
                      </span>
                    </Wrapper>
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-11">
                        Tên thiết bị:
                      </span>
                      <span className="tracking-wide text-base">
                        {data?.nameAppliance}
                      </span>
                    </Wrapper>
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-14">
                        Địa chỉ IP:
                      </span>
                      <span className="tracking-wide text-base">
                        {data?.addressIP}
                      </span>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper className="grid grid-span-1">
                  <Wrapper className="flex flex-col justify-end">
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-16">
                        Loại thiết bị:
                      </span>
                      <span className="tracking-wide text-base">
                        {data?.typeAppliance}
                      </span>
                    </Wrapper>
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-10">
                        Tên đăng nhập:
                      </span>
                      <span className="tracking-wide text-base">
                        {data?.nameSignIn}
                      </span>
                    </Wrapper>
                    <Wrapper className="flex-row md:mb-6 max-w-xs">
                      <span className="font-semibold text-lg md:mr-16">
                        Mật khẩu:
                      </span>
                      <span className="tracking-wide text-base md:ml-5">
                        {data?.passSignIn}
                      </span>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
              <Wrapper className="flex flex-col md:mb-6">
                <span className="font-semibold text-lg md:mr-12 md:mb-4">
                  Dịch vụ sử dụng:
                </span>
                <span className="tracking-wide">{data?.useService}</span>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Button
            text="Cập nhật thiết bị"
            handleClick={() => handleShowPageUpdate(data)}
            style={{
              backgroundColor: "#FFF2E7",
              height: 94,
              fontWeight: 700,
              width: 80,
              color: "#FF7506",
              lineHeight: "19px",
              fontSize: 14,
              padding: 8,
              borderRadius: 8,
            }}
            icon=""
            bgHoverColor=""
          />
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default ApplianceDetail;

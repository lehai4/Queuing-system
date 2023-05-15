import { useNavigate, useParams } from "react-router-dom";
import { Button, Header, Helmet, Navbar, User, Wrapper } from "..";
import { GrantNumberInterface } from "../../typeProps";
import { formatTimeStamp } from "../../utils/formatTimeStamp";
import back from "../../assets/icon/back-square.png";
import { statusGrant } from "../../mock/dummy";

type PropsGrantNumberDetail = {
  getGrantNumberBySlug: (value: string) => GrantNumberInterface | undefined;
};

const GrantNumberDetail = (props: PropsGrantNumberDetail) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = props.getGrantNumberBySlug(slug ?? "");
  const handleComeBack = () => {
    navigate(-1);
  };
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <Wrapper className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cấp số"
          direct={true}
          redirect={true}
          path="cap-so"
          slug={slug}
          showDirection="Danh sách cấp số"
          showRedirection="Chi tiết"
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
        <Wrapper className="absolute top-1 right-10">
          <User />
        </Wrapper>
        <Wrapper className="flex flex-row md:mt-5 gap-7">
          <Wrapper className="flex-1 md:mb-4 p-2 md:p-8 md:pb-96 md:pt-4 md:pl-6 bg-white rounded-3xl">
            <Wrapper className="detail-grantNumber">
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
                    <Wrapper className="flex items-center flex-row-reverse flex-wrap gap-24 md:mb-6">
                      <span className="tracking-wide text-base flex-1">
                        {data?.name}
                      </span>
                      <span className="font-semibold text-lg">Họ tên:</span>
                    </Wrapper>
                    <Wrapper className="flex items-center flex-row-reverse flex-wrap gap-16-override md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {data?.nameService}
                      </span>
                      <span className="font-semibold text-lg">
                        Tên dịch vụ:
                      </span>
                    </Wrapper>
                    <Wrapper className="flex items-center flex-row-reverse flex-wrap gap-20-override md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {data?.stt}
                      </span>
                      <span className="font-semibold text-lg">Số thứ tự:</span>
                    </Wrapper>
                    <Wrapper className="flex items-center flex-row-reverse flex-wrap gap-10 md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {formatTimeStamp(data?.timeGrant)}
                      </span>
                      <span className="font-semibold text-lg">
                        Thời gian cấp:
                      </span>
                    </Wrapper>
                    <Wrapper className="flex items-center flex-row-reverse flex-wrap gap-12 md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {formatTimeStamp(data?.expireUse)}
                      </span>
                      <span className="font-semibold text-lg">
                        Hạn sử dụng:
                      </span>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
                <Wrapper className="grid grid-span-1">
                  <Wrapper className="flex flex-col">
                    <Wrapper className="flex flex-row-reverse flex-wrap gap-16 md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {data?.sourceProvider}
                      </span>
                      <span className="font-semibold text-lg">Nguồn cấp:</span>
                    </Wrapper>
                    <Wrapper className="flex flex-row-reverse flex-wrap gap-17-override md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        {statusGrant(data?.status)}
                      </span>
                      <span className="font-semibold text-lg">Trạng thái:</span>
                    </Wrapper>
                    <Wrapper className="flex flex-row-reverse flex-nowrap gap-12 md:mb-6 max-w-xs">
                      <span className="tracking-wide text-base flex-1">
                        0{data?.phone}
                      </span>
                      <span className="font-semibold text-lg">
                        Số điện thoại:
                      </span>
                    </Wrapper>
                    <Wrapper className="flex flex-row-reverse flex-nowrap gap-12 md:mb-6 ">
                      <span className="tracking-wide text-base flex-1">
                        {data?.email}
                      </span>
                      <span className="font-semibold text-lg">
                        Địa chỉ Email:
                      </span>
                    </Wrapper>
                  </Wrapper>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Wrapper>
          <Button
            text="Quay lại"
            handleClick={handleComeBack}
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
            icon={back}
            bgHoverColor=""
          />
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default GrantNumberDetail;

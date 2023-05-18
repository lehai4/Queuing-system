import { useState } from "react";
import {
  DatePickers,
  Header,
  Helmet,
  Input,
  Navbar,
  Selector,
  Wrapper,
} from "../components";
import User from "../components/User";

const Service = () => {
  const [active, setActive] = useState<string>("Tất cả");
  const [searchInput, setSearchInput] = useState<string>("");
  const [serviceArr, setServiceArr] = useState<any[]>([]);
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Dịch vụ"
          direct={true}
          redirect={false}
          path="dich-vu"
          slug="/"
          showRedirection=""
          showDirection="Danh sách dịch vụ"
        />
      </div>
      <Helmet title="Thiết bị">
        <Header
          title="Quản lý dịch vụ"
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
        <Wrapper className="absolute top-1 right-11">
          <User isLayoutChange={true} />
        </Wrapper>
        <Wrapper className="flex flex-row filter-option justify-between md:mr-28 md:mb-4 md:mt-5">
          <Wrapper className="flex flex-row gap-6">
            <Wrapper className="flex flex-col filter-option-selector">
              <label className="label-title">Trạng thái hoạt động</label>
              <Selector
                optionComon="Tất cả"
                isShowCommon={true}
                setValue={setActive}
                items={serviceArr.map((act) => act.statusActive)}
              />
            </Wrapper>
          </Wrapper>
          <Wrapper className="flex flex-col">
            <label className="label-title">Chọn thời gian</label>
            <Wrapper className="flex flex-row items-center">
              <DatePickers
                valueStart={startDate}
                valueEnd={endDate}
                showIcon={true}
                isRange={true}
                setValueStart={(preV) => setStartDate(preV)}
                setValueEnd={(preV) => setEndDate(preV)}
              />
            </Wrapper>
          </Wrapper>
          <Wrapper className="flex flex-col filter-option-search">
            <label className="label-title">Từ khóa</label>
            <Input
              placeholder="Nhập từ khóa"
              typeInput="text"
              handleChange={(e) => setSearchInput(e.target.value)}
              width={300}
              className=""
              name=""
              id=""
              value={searchInput}
            />
          </Wrapper>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default Service;

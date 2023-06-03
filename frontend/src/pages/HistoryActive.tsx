import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import {
  DatePickers,
  Helmet,
  Input,
  Navbar,
  User,
  Wrapper,
} from "../components";
import { useAppSelector } from "../hooks/hooks";
import { paginationComponentOptions } from "../mock/dummy";
import { PropsHistory } from "../typeProps";
import moment from "moment";
const HistoryActive = () => {
  const historySession = useAppSelector(
    (state) => state.historySession.historySession
  );
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [history, setHistory] = useState<PropsHistory[]>([]);
  const [historyOriginal, setHistoryOriginal] = useState<PropsHistory[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const columns: TableColumn<PropsHistory>[] = [
    {
      name: "Tên đăng nhập",
      selector: (row) => row.user ?? "",
      allowOverflow: false,
      width: "386px",
      center: true,
    },
    {
      name: "Thời gian tác động",
      selector: (row) => row.timestamp,
      allowOverflow: false,
      width: "386px",
    },
    {
      name: "Tên dịch vụ",
      selector: (row) => row.Ip,
      allowOverflow: false,
      width: "386px",
    },
    {
      name: "Thao tác thực hiện",
      selector: (row) => row.action,
      allowOverflow: false,
      width: "386px",
    },
  ];

  useEffect(() => {
    let filterResult: PropsHistory[] = historyOriginal;
    filterResult =
      startDate !== null && endDate !== null
        ? historyOriginal.filter(
            (item) =>
              moment(item.timestamp, "DD/MM/YYYY").isSameOrAfter(
                moment(startDate)
              ) &&
              moment(endDate).isSameOrAfter(
                moment(item.timestamp, "DD/MM/YYYY")
              )
          )
        : filterResult;
    setHistory(filterResult);
  }, [startDate, endDate]);

  useEffect(() => {
    setHistory(historySession);
    setHistoryOriginal(historySession);
  }, [historySession]);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cài đặt hệ thống"
          direct={true}
          redirect={false}
          path="cai-dat/history-active"
          slug="/"
          showRedirection=""
          showDirection="Nhật ký hoạt động"
        />
      </div>
      <Helmet title="Nhật ký hoạt động">
        <Wrapper className="absolute top-1 right-11">
          <User isLayoutChange={true} />
        </Wrapper>
        <Wrapper className="flex flex-row filter-option justify-between md:mr-28 md:mb-4 md:mt-5">
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
        <Wrapper className="content flex flex-row gap-7">
          <Wrapper className="content-table">
            <DataTable
              columns={columns}
              data={history}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </Wrapper>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default HistoryActive;

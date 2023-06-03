import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import down from "../assets/icon/document-download.png";
import {
  Button,
  DatePickers,
  Helmet,
  Navbar,
  User,
  Wrapper,
} from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { paginationComponentOptions, statusGrant } from "../mock/dummy";
import { fetchGrantNumber } from "../redux/grantNumberSlice";
import { ReportInterface } from "../typeProps";
import { formatTimeStamp } from "../utils/formatTimeStamp";
import { formatTimeStamp_version2 } from "../utils/formatTimeStamp_version2";
import { addHistorySession } from "../redux/historySlice";

const timesGrant = (data: any) => {
  return <span>{formatTimeStamp(data)}</span>;
};

const Report = () => {
  const pdfRef = useRef(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.auth?.login?.currentUser?.user);
  const grantNumbers = useAppSelector(
    (state) => state.grantNumbers.grantNumber.grantArr
  );
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(new Date());
  const [reportArr, setReportArr] = useState<ReportInterface[]>([]);
  const [reportArrOriginal, setReportArrOriginal] = useState<ReportInterface[]>(
    []
  );
  const columns: TableColumn<ReportInterface>[] = [
    {
      name: "Số thứ tự",
      selector: (row) => row.stt,
      allowOverflow: false,
      width: "310px",
      center: true,
      sortable: true,
    },
    {
      name: "Tên dịch vụ",
      selector: (row) => row.nameService,
      allowOverflow: false,
      width: "310px",
      sortable: true,
    },

    {
      name: "Thời gian cấp",
      cell: (row) => timesGrant(row.timeGrant),
      allowOverflow: false,
      width: "310px",
      sortable: true,
    },
    {
      name: "Trạng thái",
      cell: (row) => statusGrant(row.status),
      allowOverflow: false,
      width: "310px",
      sortable: true,
    },
    {
      name: "Nguồn cấp",
      selector: (row) => row.sourceProvider,
      allowOverflow: false,
      width: "310px",
      sortable: true,
    },
  ];
  const convertDate = (value: any) => {
    let date = new Date(value);
    return date;
  };
  const handleDownloadPdf = () => {
    const capture: any = pdfRef.current;
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png", 1.0);
      const docs = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = docs.internal.pageSize.getWidth();
      const pdfHeight = docs.internal.pageSize.getHeight();

      const imgWidth = canvas.width;
      const imgHeight = canvas.width;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      docs.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        pdfHeight * ratio
      );
      docs.save("report.pdf");
    });
    const object = {
      user: user?.username,
      timestamp: formatTimeStamp_version2(new Date()),
      Ip: "192.168.1.1",
      action: `Tải file báo cáo (pdf)`,
    };
    dispatch(addHistorySession(object));
  };
  useEffect(() => {
    setReportArr(grantNumbers);
    setReportArrOriginal(grantNumbers);
  }, [grantNumbers]);
  useEffect(() => {
    let filterResult: ReportInterface[] = reportArrOriginal;
    filterResult =
      startDate !== null && endDate !== null
        ? reportArrOriginal.filter(
            (item) =>
              moment(convertDate(item.timeGrant), "DD/MM/YYYY").isSameOrAfter(
                moment(startDate)
              ) &&
              moment(endDate).isSameOrAfter(
                moment(convertDate(item.timeGrant), "DD/MM/YYYY")
              )
          )
        : filterResult;
    setReportArr(filterResult);
  }, [startDate, endDate]);
  useEffect(() => {
    dispatch(fetchGrantNumber());
  }, []);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Báo cáo"
          direct={true}
          redirect={false}
          path="bao-cao"
          slug="/"
          showRedirection=""
          showDirection="Lập báo cáo"
        />
      </div>
      <Helmet title="Báo cáo">
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
        </Wrapper>
        <Wrapper className="content flex flex-row gap-7">
          <div className="content-table" ref={pdfRef}>
            <DataTable
              columns={columns}
              data={reportArr}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </div>
          <Button
            text="Tải về"
            handleClick={handleDownloadPdf}
            style={{
              backgroundColor: "#FFF2E7",
              height: 94,
              width: 80,
              color: "#FF7506",
              lineHeight: "19px",
              fontSize: 14,
              padding: 8,
              borderRadius: 8,
            }}
            icon={down}
            bgHoverColor=""
          />
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default Report;

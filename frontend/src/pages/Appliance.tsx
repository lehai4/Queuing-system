import { Header, Helmet, Wrapper } from "../components";
import DataTable, { TableColumn } from "react-data-table-component";
import { gridActiveApliance, gridConnectApliance } from "../mock/dummy";
import { useState } from "react";

const paginationComponentOptions = {
  rowsPerPageText: "Page Number",
  rangeSeparatorText: "page",
  selectAllRowsItem: true,
  selectAllRowsItemText: "ALL",
};
interface ApplianceProp {
  uId: string;
  nameApliance: string;
  addressIP: string;
  statusActive: number;
  statusConnect: number;
  typeApliance: string;
  nameSignIn: string;
  passSignIn: string;
  useService: string;
}
const Appliance = () => {
  const columns: TableColumn<ApplianceProp>[] = [
    {
      name: "Mã thiết bị",
      selector: (row) => row.uId,
      allowOverflow: false,
      width: "70px",
      center: true,
    },
    {
      name: "Tên thiết bị",
      selector: (row) => row.nameApliance,
      allowOverflow: false,
      width: "140px",
    },
    {
      name: "Địa chỉ IP",
      selector: (row) => row.addressIP,
      allowOverflow: false,
      width: "140px",
    },
    {
      name: "Trạng thái hoạt động",
      cell: (row, index, column, id) => gridActiveApliance(row),
      allowOverflow: false,
      width: "190px",
    },
    {
      name: "Trạng thái kết nối",
      cell: (row, index, column, id) => gridConnectApliance(row),
      allowOverflow: false,
      width: "190px",
    },
    {
      name: "Dịch vụ sử dụng",
      cell: (row, index, column, id) => (
        <span className="service">{row.useService}</span>
      ),
      allowOverflow: false,
      width: "190px",
    },
    {
      cell: () => (
        <div className="flex align-center">
          <button className="button-detail capitalize rounded-2xl text-md">
            Chi tiết
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: false,
    },
    {
      cell: () => (
        <div className="flex align-center">
          <button className="button-detail capitalize rounded-2xl text-md">
            Cập nhật
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: false,
    },
  ];
  const [appliance, setApliance] = useState<ApplianceProp[]>([]);
  return (
    <Wrapper className="md:m-10 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-6 md:pt-4 md:pl-6 bg-grey rounded-3xl">
      <Helmet title="Thiết bị">
        <Header
          title="Danh sách thiết bị"
          style={{
            fontWeight: "700",
            fontSize: 24,
            color: "#FF7506",
            lineHeight: "110%",
          }}
        />
        <DataTable
          columns={columns}
          data={appliance}
          pagination
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 15, 20]}
          paginationComponentOptions={paginationComponentOptions}
        />
      </Helmet>
    </Wrapper>
  );
};
export default Appliance;

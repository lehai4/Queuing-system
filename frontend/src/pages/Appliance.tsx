import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import plus from "../assets/icon/add-square.png";
import { paginationComponentOptions } from "../mock/dummy";

import {
  Button,
  Header,
  Helmet,
  Input,
  Navbar,
  Selector,
  Wrapper,
} from "../components";
import ModalViewMore from "../components/Modal/ModalViewMore";
import User from "../components/User";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { gridActiveApliance, gridConnectApliance } from "../mock/dummy";
import { fetchAppliance } from "../redux/applianceSlice";
import { ApplianceProp } from "../typeProps";

const Appliance = () => {
  const data = useAppSelector(
    (state) => state.appliances.appliance.applianceArr
  );
  const navigate = useNavigate();
  const dispath = useAppDispatch();
  const columns: TableColumn<ApplianceProp>[] = [
    {
      name: "Mã thiết bị",
      selector: (row) => row.uId,
      allowOverflow: false,
      width: "165px",
      center: true,
    },
    {
      name: "Tên thiết bị",
      selector: (row) => row.nameAppliance,
      allowOverflow: false,
      width: "180px",
    },
    {
      name: "Địa chỉ IP",
      selector: (row) => row.addressIP,
      allowOverflow: false,
      width: "180px",
    },
    {
      name: "Trạng thái hoạt động",
      cell: (row) => gridActiveApliance(row),
      allowOverflow: false,
      width: "220px",
    },
    {
      name: "Trạng thái kết nối",
      cell: (row) => gridConnectApliance(row),
      allowOverflow: false,
      width: "220px",
    },
    {
      name: "Dịch vụ sử dụng",
      cell: (row, index) => (
        <div className="flex flex-col items-start">
          <span className="service">{row.useService}</span>
          <button
            className="underline btn btn-additional"
            onClick={() => handleSeeMore(row.useService, index)}
          >
            Xem thêm
          </button>
        </div>
      ),
      allowOverflow: false,
      width: "300px",
    },
    {
      cell: (row) => (
        <div className="flex align-center">
          <button
            className="btn btn-detail underline capitalize rounded-2xl text-md"
            onClick={() => handleShowPageDetail(row)}
          >
            Chi tiết
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: false,
      width: "140px",
    },
    {
      cell: (row) => (
        <div className="flex align-center">
          <button
            className="btn btn-detail underline capitalize rounded-2xl text-md"
            onClick={() => handleShowPageUpdate(row)}
          >
            Cập nhật
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: false,
      width: "140px",
    },
  ];
  const [active, setActive] = useState<string>("Tất cả");
  const [connected, setConnected] = useState<string>("Tất cả");
  const [toggle, setToggle] = useState<boolean>(false);
  const [service, setService] = useState<string>("");
  const [searchInput, setSearchInput] = useState<string>("");
  const [appliance, setAppliance] = useState<ApplianceProp[]>([]);
  const [applianceOriginal, setApplianceOriginal] = useState<ApplianceProp[]>(
    []
  );
  const handleSeeMore = (service: string, index: number) => {
    setToggle(true);
    setService(service);
  };

  const closeModal = () => {
    setToggle(false);
  };
  const handleShowPageDetail = (data: ApplianceProp) => {
    navigate(`/thiet-bi/chi-tiet/${data.uId}`);
  };
  const handleShowPageUpdate = (data: ApplianceProp) => {
    navigate(`/thiet-bi/cap-nhat-thiet-bi/${data.uId}`);
  };
  const handleShowFormAdd = () => {
    navigate("/thiet-bi/them-thiet-bi");
  };

  useEffect(() => {
    let filterResult: ApplianceProp[] = applianceOriginal;
    filterResult =
      searchInput !== ""
        ? applianceOriginal.filter((app) => app.uId === searchInput)
        : filterResult;
    filterResult =
      active !== "Tất cả"
        ? applianceOriginal.filter((app) => {
            return app.statusActive === active;
          })
        : filterResult;
    filterResult =
      connected !== "Tất cả"
        ? filterResult.filter((app) => {
            return app.statusConnect === connected;
          })
        : filterResult;
    setAppliance(filterResult);
  }, [connected, active, searchInput]);
  useEffect(() => {
    setAppliance(data);
    setApplianceOriginal(data);
  }, [data]);
  useEffect(() => {
    dispath(fetchAppliance());
  }, []);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Thiết bị"
          direct={true}
          redirect={false}
          path="thiet-bi"
          slug="/"
          showRedirection=""
          showDirection="Danh sách thiết bị"
        />
      </div>
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
        <Wrapper className="absolute top-1 right-11">
          <User />
        </Wrapper>
        <Wrapper className="flex flex-row filter-option justify-between md:mr-28 md:mb-4 md:mt-5">
          <Wrapper className="flex flex-row gap-6">
            <Wrapper className="flex flex-col filter-option-selector">
              <label className="label-title">Trạng thái hoạt động</label>
              <Selector
                optionComon="Tất cả"
                isShowCommon={true}
                setValue={setActive}
                items={applianceOriginal.map((act) => act.statusActive)}
              />
            </Wrapper>
            <Wrapper className="flex flex-col filter-option-selector">
              <label className="label-title">Trạng thái kết nối</label>
              <Selector
                optionComon="Tất cả"
                isShowCommon={true}
                setValue={setConnected}
                items={applianceOriginal.map(
                  (connect) => connect.statusConnect
                )}
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
              data={appliance}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </Wrapper>
          <Button
            text="Thêm thiết bị"
            handleClick={handleShowFormAdd}
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
            icon={plus}
            bgHoverColor=""
          />
        </Wrapper>
        {toggle && (
          <ModalViewMore
            toggle={toggle}
            service={service}
            closeModal={closeModal}
          />
        )}
      </Helmet>
    </Wrapper>
  );
};
export default Appliance;

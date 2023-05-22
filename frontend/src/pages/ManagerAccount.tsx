import { useEffect, useState } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Link } from "react-router-dom";
import plus from "../assets/icon/add-square.png";
import { Header, Helmet, Navbar, User, Wrapper } from "../components";
import { gridStatusAccount, paginationComponentOptions } from "../mock/dummy";

import { Button, Input, Selector } from "../components";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getAllUsers } from "../redux/apiRequest";
import { AccountProps } from "../typeProps";
const ManagerAccount = () => {
  const allUsers = useAppSelector((state) => state?.users?.users?.allUsers);
  const user = useAppSelector((state) => state.auth.login.currentUser);
  const dispath = useAppDispatch();
  const columns: TableColumn<AccountProps>[] = [
    {
      name: "Tên đăng nhập",
      selector: (row) => row.username,
      allowOverflow: false,
      width: "220px",
      center: true,
    },
    {
      name: "Họ tên",
      selector: (row) => row.name,
      allowOverflow: false,
      width: "220px",
    },
    {
      name: "Số điện thoại",
      selector: (row) => row.phone,
      allowOverflow: false,
      width: "200px",
    },
    {
      name: "Email",
      selector: (row) => row.email,
      allowOverflow: false,
      width: "250px",
    },
    {
      name: "Vai trò",
      selector: (row) => row.role,
      allowOverflow: false,
      width: "220px",
    },
    {
      name: "Trạng thái hoạt động",
      cell: (row) => gridStatusAccount(row),
      allowOverflow: false,
      width: "220px",
    },
    {
      cell: (row) => (
        <Link to={`${row._id}`}>
          <div className="flex align-center">
            <button className="btn btn-detail underline capitalize rounded-2xl text-md">
              Cập nhật
            </button>
          </div>
        </Link>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: false,
      width: "220px",
    },
  ];
  const [role, setRole] = useState<string>("Tất cả");
  const [searchInput, setSearchInput] = useState<string>("");
  const [account, setAccount] = useState<AccountProps[]>([]);
  const [accountOriginal, setAccountOriginal] = useState<AccountProps[]>([]);
  useEffect(() => {
    let filterResult: AccountProps[] = accountOriginal;
    filterResult =
      searchInput !== ""
        ? accountOriginal.filter((app) => app.username === searchInput)
        : filterResult;
    filterResult =
      role !== "Tất cả"
        ? accountOriginal.filter((app) => {
            return app.role === role;
          })
        : filterResult;
    setAccount(filterResult);
  }, [role, searchInput]);
  useEffect(() => {
    setAccount(allUsers ?? []);
    setAccountOriginal(allUsers ?? []);
  }, [allUsers]);
  useEffect(() => {
    getAllUsers(user?.accessToken ?? "", dispath);
  }, []);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cài đặt hệ thống"
          direct={true}
          redirect={false}
          path="cai-dat"
          slug="/"
          showRedirection=""
          showDirection="Quản lý tài khoản"
        />
      </div>
      <Helmet title="Quản lý tài khoản">
        <Header
          title="Danh sách tài khoản"
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
              <label className="label-title">Tên vai trò</label>
              <Selector
                optionComon="Tất cả"
                isShowCommon={true}
                setValue={setRole}
                items={accountOriginal.map((act) => act.role)}
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
              data={account}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </Wrapper>
          <Link to="them-tai-khoan">
            <Button
              text="Thêm tài khoản"
              handleClick={() => {}}
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
          </Link>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default ManagerAccount;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plus from "../assets/icon/add-square.png";
import {
  Button,
  Header,
  Helmet,
  Input,
  Navbar,
  User,
  Wrapper,
} from "../components";
import { paginationComponentOptions } from "../mock/dummy";
import { useAppSelector } from "../hooks/hooks";

const ManagerRule = () => {
  const allUsers = useAppSelector((state) => state?.users?.users?.allUsers);
  const [role, setRole] = useState<string[] | undefined>([]);
  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    const result = allUsers
      ?.map((ac) => {
        return ac.role;
      })
      .filter((act, i, arrCurr) => {
        return arrCurr.indexOf(act) === i;
      })
      .map((item) => {
        return item;
      });
    setRole(result);
  }, []);
  useEffect(() => {
    console.log(role);
  }, [role]);
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
          showDirection="Quản lý vai trò"
        />
      </div>
      <Helmet title="Quản lý vai trò">
        <Header
          title="Danh sách vai trò"
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
              <div></div>
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
          {/* <Wrapper className="content-table">
            <DataTable
              columns={columns}
              data={account}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </Wrapper> */}
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

export default ManagerRule;

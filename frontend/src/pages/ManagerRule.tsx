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
import DataTable, { TableColumn } from "react-data-table-component";
import { Rule } from "../typeProps";
import { toast } from "react-toastify";

interface Use {
  _id: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  name: string;
  phone: string;
  active: boolean;
  role: string;
  admin: boolean;
  image: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
}
const ManagerRule = () => {
  const allUsers = useAppSelector((state) => state?.users?.users?.allUsers);
  const [rule, setRule] = useState<Rule[]>([]);
  const [ruleOriginal, setRuleOriginal] = useState<Rule[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const columns: TableColumn<Rule>[] = [
    {
      name: "Tên vai trò",
      selector: (row) => row.nameRule,
      allowOverflow: false,
      width: "350px",
      center: true,
    },
    {
      name: "Số lượng người dùng",
      selector: (row) => row.numberRule,
      allowOverflow: false,
      width: "360px",
      center: true,
    },
    {
      name: "Mô tả",
      selector: (row) => row.desc,
      allowOverflow: false,
      width: "435px",
      center: true,
    },
    {
      cell: () => (
        <div className="flex align-center">
          <button
            className="btn btn-detail underline capitalize rounded-2xl text-md"
            onClick={() => {
              toast.warning("function temporarily not working!");
            }}
          >
            Cập nhật
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
      center: true,
      width: "398px",
    },
  ];
  const countAppearRule = (arr: Use[], rule: string) => {
    let count = 0;
    for (let i in arr) {
      if (arr[i].role === rule) {
        count++;
      }
    }
    return count;
  };
  useEffect(() => {
    let filterResult: Rule[] = ruleOriginal;
    filterResult =
      searchInput !== ""
        ? ruleOriginal.filter((app) => app.nameRule === searchInput)
        : filterResult;
    setRule(filterResult);
  }, [searchInput]);
  useEffect(() => {
    const nameRule: any = allUsers
      ?.map((ac) => {
        return ac.role;
      })
      .filter((act, i, arrCurr) => {
        return arrCurr.indexOf(act) === i;
      })
      .map((item) => {
        return item;
      });
    setRule(
      nameRule.map((rule: string) => {
        return {
          nameRule: rule,
          numberRule: countAppearRule(allUsers ?? [], rule),
          desc: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
        };
      })
    );
    setRuleOriginal(
      nameRule.map((rule: string) => {
        return {
          nameRule: rule,
          numberRule: countAppearRule(allUsers ?? [], rule),
          desc: "Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu",
        };
      })
    );
  }, []);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <div className="absolute md:static md:mb-8 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cài đặt hệ thống"
          direct={true}
          redirect={false}
          path="cai-dat/quan-li-vai-tro"
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
        <Wrapper className="flex flex-row filter-option justify-between md:mr-28 md:-mt-16 md:mb-5">
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
          <Wrapper className="content-table">
            <DataTable
              columns={columns}
              data={rule}
              pagination
              responsive
              paginationPerPage={10}
              paginationRowsPerPageOptions={[5, 10, 15, 20]}
              paginationComponentOptions={paginationComponentOptions}
            />
          </Wrapper>
          <Button
            text="Thêm vai trò"
            handleClick={() => {
              toast.warning("function temporarily not working!");
            }}
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
      </Helmet>
    </Wrapper>
  );
};

export default ManagerRule;

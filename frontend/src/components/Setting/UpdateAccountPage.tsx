import { useFormik } from "formik";
import { useRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";

import { SvgIcon } from "@mui/material";
import { toast } from "react-toastify";
import {
  Button,
  Header,
  Helmet,
  Input,
  Navbar,
  Selected,
  User,
  Wrapper,
} from "..";
import { updateUser } from "../../redux/apiRequest";
import { AccountProps } from "../../typeProps";

type PropsUpdateAcountPage = {
  getUserBySlug: (value: string) => AccountProps | undefined;
};
type AccountInterface = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
  active: string;
  role: string;
};
const role = ["Kế toán", "Quản lý", "Admin"];
const active = [true, false];

const UpdateAcountPage = (props: PropsUpdateAcountPage) => {
  const { slug } = useParams();
  const data = props.getUserBySlug(slug ?? "");
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleConfirm, setToggleConfirm] = useState<boolean>(false);
  const refVisibility = useRef(null);
  const navigate = useNavigate();
  let initData: AccountInterface = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
    active: "",
    role: "",
  };
  let initialValues = { ...initData, ...data };
  const handleCompared = (data1: any, data2: any) => {
    if (
      data1.name === data2?.name &&
      data1.username === data2?.username &&
      data1.email === data2?.email &&
      data1.password === data2?.password &&
      data1.confirmpassword === data2?.confirmpassword &&
      data1.phone === data2?.phone &&
      data1.active === data2?.active &&
      data1.role === data2?.role
    ) {
      return true;
    } else {
      return false;
    }
  };
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string().required("required"),
      email: Yup.string().required("required"),
      password: Yup.string()
        .required("required")
        .min(8, "Must be 8 characters or more")
        .matches(/[^\w]/, "Password requires a symbol"),
      confirmpassword: Yup.string()
        .required("required")
        .oneOf([Yup.ref("password")], "Passwords must match"),
      name: Yup.string().required("required"),
      phone: Yup.string().required("required"),
      active: Yup.string().required("required"),
      role: Yup.string().required("required"),
    }),
    onSubmit: async (e) => {
      let dataOverrides = {
        _id: data?._id,
        ...e,
        active:
          e.active === "Hoạt động" ? true : e.active === true ? true : false,
      };
      if (handleCompared(dataOverrides, initialValues)) {
        toast.error("data has not changed!");
      } else {
        await updateUser(dataOverrides._id, dataOverrides)
          .then(() => {
            toast.success("Updated account successfully!");
            navigate("/cai-dat/quan-li-tai-khoan");
          })
          .catch((err) => {
            toast.error(err.message);
          });
      }
    },
  });
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };
  const handleToggleConfirm = () => {
    setToggleConfirm((preV) => !preV);
  };
  const handleCancel = () => {
    navigate(-1);
  };
  return (
    <form
      className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl"
      onSubmit={formik.handleSubmit}
    >
      <Wrapper className="absolute md:static md:mb-7 dark:bg-main-dark-bg navbar">
        <Navbar
          title="Cài đặt hệ thống"
          direct={true}
          redirect={true}
          path="cai-dat/quan-li-tai-khoan"
          slug="/"
          showRedirection="Cập nhật tài khoản"
          showDirection="Quản lý tài khoản"
        />
      </Wrapper>
      <Helmet title="Cập nhật thiết bị">
        <Header
          title="Cập nhật tài khoản"
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
        <Wrapper className="md:m-14 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-12 md:pt-4 md:pl-6 bg-white rounded-3xl">
          <Wrapper className="form-appliance">
            <Header
              title="Thông tin thiết bị"
              style={{
                fontWeight: 700,
                fontSize: 20,
                color: "#FF7506",
                lineHeight: "110%",
              }}
            />
            <Wrapper className="grid grid-cols-2 gap-4">
              <Wrapper className="col-span-1">
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Họ tên:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Input
                    typeInput="text"
                    id="name"
                    name="name"
                    placeholder="Nhập họ tên"
                    className="mt-2 mb-3"
                    width={745}
                    value={formik.values.name}
                    handleChange={formik.handleChange}
                  />
                  {formik.errors.name && (
                    <p className="mes__error">{formik.errors.name}</p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Số điện thoại:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Input
                    typeInput="text"
                    id="phone"
                    name="phone"
                    placeholder="Nhập số điện thoại"
                    className="mt-2 mb-3"
                    width={745}
                    value={formik.values.phone}
                    handleChange={formik.handleChange}
                  />
                  {formik.errors.phone && (
                    <p className="mes__error">{formik.errors.phone}</p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Email:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Input
                    typeInput="text"
                    id="email"
                    name="email"
                    placeholder="Nhập email"
                    className="mt-2 mb-3"
                    width={745}
                    value={formik.values.email}
                    handleChange={formik.handleChange}
                  />
                  {formik.errors.email && (
                    <p className="mes__error">{formik.errors.email}</p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Vai trò:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Selected
                    name="role"
                    placeholder="Chọn vai trò"
                    multi={false}
                    handleChange={formik.handleChange}
                    value={formik.values.role}
                    options={role
                      .map((ac) => {
                        return ac;
                      })
                      .filter((act, i, arrCurr) => {
                        return arrCurr.indexOf(act) === i;
                      })
                      .map((item) => {
                        return {
                          label: item,
                          value: item,
                        };
                      })}
                  />
                  {formik.errors.role && (
                    <p className="mes__error">{formik.errors.role}</p>
                  )}
                </Wrapper>
              </Wrapper>
              <Wrapper className="col-span-1">
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Tên đăng nhập:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Input
                    typeInput="text"
                    id="username"
                    name="username"
                    placeholder="Nhập tên đăng nhập"
                    className="mt-2 mb-3"
                    width={745}
                    value={formik.values.username}
                    handleChange={formik.handleChange}
                  />
                  {formik.errors.username && (
                    <p className="mes__error">{formik.errors.username}</p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Mật khẩu:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Wrapper className="flex flex-row items-center">
                    <Input
                      typeInput={toggle ? "password" : "text"}
                      id="password"
                      name="password"
                      placeholder="Nhập password"
                      className="mt-2 mb-3"
                      width={745}
                      value={formik.values.password}
                      handleChange={formik.handleChange}
                    />
                    <div ref={refVisibility} onClick={handleToggle}>
                      {toggle ? (
                        <SvgIcon
                          component={MdVisibilityOff}
                          style={{ marginLeft: -40 }}
                        />
                      ) : (
                        <SvgIcon
                          component={MdVisibility}
                          style={{ marginLeft: -40 }}
                        />
                      )}
                    </div>
                  </Wrapper>

                  {formik.errors.password && (
                    <p className="mes__error">{formik.errors.password}</p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Nhập lại mật khẩu:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Wrapper className="flex flex-row items-center">
                    <Input
                      typeInput={toggleConfirm ? "password" : "text"}
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="Xác thực password"
                      className="mt-2 mb-3"
                      width={745}
                      value={formik.values.confirmpassword}
                      handleChange={formik.handleChange}
                    />
                    <div onClick={handleToggleConfirm}>
                      {toggleConfirm ? (
                        <SvgIcon
                          component={MdVisibilityOff}
                          style={{ marginLeft: -40 }}
                        />
                      ) : (
                        <SvgIcon
                          component={MdVisibility}
                          style={{ marginLeft: -40 }}
                        />
                      )}
                    </div>
                  </Wrapper>
                  {formik.errors.confirmpassword && (
                    <p className="mes__error">
                      {formik.errors.confirmpassword}
                    </p>
                  )}
                </Wrapper>
                <Wrapper className="form__group form-add-appliance flex flex-col">
                  <Wrapper className="flex items-center">
                    <label htmlFor="">Tình trạng:</label>
                    <span className="star ml-1">*</span>
                  </Wrapper>
                  <Selected
                    name="active"
                    placeholder="Hoạt động"
                    multi={false}
                    handleChange={formik.handleChange}
                    value={formik.values.active}
                    options={active
                      .map((ac) => {
                        return ac ? "Hoạt động" : !ac ? "Ngưng hoạt động" : [];
                      })
                      .filter((act, i, arrCurr) => {
                        return arrCurr.indexOf(act) === i;
                      })
                      .map((item) => {
                        return {
                          label: item,
                          value: item,
                        };
                      })}
                  />
                  {formik.errors.active && (
                    <p className="mes__error">{formik.errors.active}</p>
                  )}
                </Wrapper>
              </Wrapper>
            </Wrapper>
            <Wrapper className="form__group form-add-appliance">
              <Wrapper className="flex items-center">
                <span className="star mr-1">*</span>
                <label>Là trường thông tin bắt buộc</label>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Wrapper className="flex items-center gap-8 justify-center md:mt-7 md:mr-14 md:pr-8">
          <Button
            text="Hủy bỏ"
            bgHoverColor=""
            style={{
              fontSize: 16,
              color: "#FF9138",
              backgroundColor: "#FFF2E7",
              padding: "13px 30px",
              fontWeight: 700,
              maxWidth: 116,
              border: "1px solid #FF9138",
              borderRadius: 8,
            }}
            icon=""
            handleClick={handleCancel}
          />
          <Button
            text="Cập nhật"
            bgHoverColor=""
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              backgroundColor: "#FF9138",
              padding: "13px 22px",
              fontWeight: 700,
              border: "1px solid #FF9138",
              borderRadius: 8,
              maxWidth: 115,
            }}
            icon=""
            handleClick={() => {}}
          />
        </Wrapper>
      </Helmet>
    </form>
  );
};

export default UpdateAcountPage;

import { useFormik } from "formik";
import { useRef, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { SvgIcon } from "@mui/material";
import { toast } from "react-toastify";
import * as Yup from "yup";
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
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { registerUser } from "../../redux/apiRequest";
import { formatTimeStamp_version2 } from "../../utils/formatTimeStamp_version2";
import { addHistorySession } from "../../redux/historySlice";
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
const AddAccountPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state?.auth?.login?.currentUser?.user);
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleConfirm, setToggleConfirm] = useState<boolean>(false);
  const refVisibility = useRef(null);
  const active = [true, false];
  const role = ["Kế toán", "Quản lý", "Admin"];
  let initialValues: AccountInterface = {
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    name: "",
    phone: "",
    active: "",
    role: "",
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
        image: "",
        ...e,
        active: e.active === "Hoạt động" ? true : false,
      };
      const object = {
        user: user?.username,
        timestamp: formatTimeStamp_version2(new Date()),
        Ip: "192.168.1.1",
        action: `Thêm tài khoản với username: ${e.username}`,
      };
      await registerUser(dataOverrides, dispatch)
        .then(() => {
          dispatch(addHistorySession(object));
          toast.success("Add account successfully!");
          navigate(-1);
        })
        .catch((err) => {
          toast.error(err.message);
        });
    },
  });

  const handleCancel = () => {
    navigate(-1);
  };
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };
  const handleToggleConfirm = () => {
    setToggleConfirm((preV) => !preV);
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
          showRedirection="Thêm tài khoản"
          showDirection="Quản lý tài khoản"
        />
      </Wrapper>
      <Helmet title="Thêm thiết bị">
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
        <Wrapper className="md:m-14 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-12 md:pt-4 md:pl-6 bg-white rounded-3xl">
          <Wrapper className="form-appliance">
            <Header
              title="Thông tin tài khoản"
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
                        return ac === true
                          ? "Hoạt động"
                          : ac === false
                          ? "Ngưng hoạt động"
                          : [];
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
              padding: "13px 45px",
              fontWeight: 700,
              maxWidth: 148,
              border: "1px solid #FF9138",
              borderRadius: 8,
            }}
            icon=""
            handleClick={handleCancel}
          />
          <Button
            text="Thêm"
            bgHoverColor=""
            style={{
              fontSize: 16,
              color: "#FFFFFF",
              backgroundColor: "#FF9138",
              padding: "13px 22px",
              fontWeight: 700,
              border: "1px solid #FF9138",
              borderRadius: 8,
              maxWidth: 148,
            }}
            icon=""
            handleClick={() => {}}
          />
        </Wrapper>
      </Helmet>
    </form>
  );
};

export default AddAccountPage;

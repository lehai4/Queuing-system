import { SvgIcon } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Button, Input, Wrapper } from "../../index";
export interface initialize {
  password: string;
  confirmPassword: string;
}
let initialValues: initialize = {
  password: "",
  confirmPassword: "",
};

const ChangePassword = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [toggleConfirm, setToggleConfirm] = useState<boolean>(false);

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .required("Required")
        .oneOf([Yup.ref("password")], 'Must match "password" field value'),
    }),
    onSubmit: (e) => {
      toast.success("Đổi mật khẩu thành công");
      navigate("/auth");
    },
  });
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };
  const handleToggleConfirm = () => {
    setToggleConfirm((preV) => !preV);
  };
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="form__group  m-12 ml-14 p-12"
    >
      <h3 className="mb-3 mt-12 flex justify-center">Đặt lại mật khẩu mới</h3>
      <Wrapper className="form__group-user flex flex-col">
        <label htmlFor="">Mật khẩu</label>
        <Wrapper className="flex flex-row items-center">
          <Input
            typeInput={toggle ? "password" : "text"}
            id="password"
            name="password"
            placeholder=""
            className="mt-2 mb-3"
            width={400}
            value={formik.values.password}
            handleChange={formik.handleChange}
          />
          <div onClick={handleToggle}>
            {toggle ? (
              <SvgIcon
                component={MdVisibilityOff}
                style={{ marginLeft: -40 }}
              />
            ) : (
              <SvgIcon component={MdVisibility} style={{ marginLeft: -40 }} />
            )}
          </div>
        </Wrapper>
      </Wrapper>
      {formik.errors.password && (
        <p className="mes__error">{formik.errors.password}</p>
      )}
      <Wrapper className="form__group-user flex flex-col">
        <label htmlFor="">Nhập lại mật khẩu</label>
        <Wrapper className="flex flex-row items-center">
          <Input
            typeInput={toggleConfirm ? "password" : "text"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder=""
            className="mt-2 mb-3"
            width={400}
            value={formik.values.confirmPassword}
            handleChange={formik.handleChange}
          />
          <div onClick={handleToggleConfirm}>
            {toggleConfirm ? (
              <SvgIcon
                component={MdVisibilityOff}
                style={{ marginLeft: -40 }}
              />
            ) : (
              <SvgIcon component={MdVisibility} style={{ marginLeft: -40 }} />
            )}
          </div>
        </Wrapper>
      </Wrapper>
      {formik.errors.confirmPassword && (
        <p className="mes__error">{formik.errors.confirmPassword}</p>
      )}
      <Wrapper className="btn btn-login mt-5 flex flex-row items-center justify-center gap-5">
        <Button
          text="Xác nhận"
          handleClick={() => {}}
          icon=""
          style={{
            width: 162,
            backgroundColor: "#ff9138",
            color: "#fff",
            padding: "8px 40px",
            borderRadius: 8,
            fontWeight: 700,
          }}
          bgHoverColor="#FF9138"
        />
      </Wrapper>
    </form>
  );
};

export default ChangePassword;

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { signInUser } from "../../../redux/apiRequest";
import { Button, Input, Wrapper } from "../../index";
import { SvgIcon } from "@mui/material";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
export interface initialize {
  username: string;
  password: string;
}
let initialValues: initialize = {
  username: "",
  password: "",
};
const SignIn = () => {
  const [toggle, setToggle] = useState<boolean>(true);
  const refVisibility = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string()
        .required("required")
        .min(4, "Must be 4 characters or more"),
      password: Yup.string()
        .required("required")
        .min(8, "Must be 8 characters or more")
        .matches(/[^\w]/, "Password requires a symbol"),
    }),
    onSubmit: async (e) => {
      await signInUser(e, dispatch, navigate);
    },
  });
  const handleToggle = () => {
    setToggle((preV) => !preV);
  };
  return (
    <form onSubmit={formik.handleSubmit} className="form__group m-12 p-12">
      <Wrapper className="form__group-user flex flex-col">
        <label htmlFor="">Tên đăng nhập *</label>
        <Input
          typeInput="text"
          id="username"
          name="username"
          placeholder=""
          className="mt-2 mb-3"
          width={400}
          value={formik.values.username}
          handleChange={formik.handleChange}
        />
        {formik.errors.username && (
          <p className="mes__error">{formik.errors.username}</p>
        )}
      </Wrapper>
      <Wrapper className="form__group-password flex flex-col">
        <label htmlFor="">Mật khẩu *</label>
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
          <div ref={refVisibility} onClick={handleToggle}>
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

        {formik.errors.password && (
          <p className="mes__error">{formik.errors.password}</p>
        )}
      </Wrapper>
      {!formik.isSubmitting && formik.isValid === true ? (
        <Wrapper className="btn btn-forget">
          <Link to="/auth/forget-password" className="forget-password">
            Quên mật khẩu?
          </Link>
        </Wrapper>
      ) : (
        <></>
      )}
      <Wrapper className="btn btn-login mt-5 flex flex-col items-center justify-center">
        <Button
          text="Đăng nhập"
          handleClick={() => {}}
          icon=""
          style={{
            width: 162,
            backgroundColor: "#ff9138",
            color: "#fff",
            padding: "8px 40px",
            borderRadius: 8,
          }}
          bgHoverColor="#FF9138"
        />
        {formik.isValid === false ? (
          <Wrapper className="btn btn-forget mt-2">
            <Link to="/auth/forget-password" className="forget-password">
              Quên mật khẩu?
            </Link>
          </Wrapper>
        ) : formik.isSubmitting && formik.isValid ? (
          <Wrapper className="btn btn-forget mt-2">
            <button className="forget-password">Quên mật khẩu?</button>
          </Wrapper>
        ) : (
          <></>
        )}
      </Wrapper>
    </form>
  );
};

export default SignIn;

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { changeConfirmPassword } from "../../../redux/userSlice";
import { Button, Input, Wrapper } from "../../index";
export interface initialize {
  email: string;
}
let initialValues: initialize = {
  email: "",
};

const ConfirmEmail = () => {
  const dispath = useAppDispatch();
  const navigate = useNavigate();
  const allUser = useAppSelector((state) => state.users.users.allUsers);
  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      email: Yup.string().required("required"),
    }),
    onSubmit: (e) => {
      let result = allUser?.find((user) => user?.email === e.email);
      if (result === undefined) {
        toast.error("Email is incorrect!");
      } else {
        dispath(changeConfirmPassword(result));
        navigate("/auth/change-password");
      }
    },
  });
  const handleClose = () => {
    navigate("/auth");
  };
  return (
    <form onSubmit={formik.handleSubmit} className="form__group m-12 p-12">
      <h3 className="mb-3 mt-7 flex items-center justify-center">
        Đặt lại mật khẩu
      </h3>
      <Wrapper className="form__group-user flex items-center flex-col">
        <label htmlFor="">
          Vui lòng nhập email để đặt lại mật khẩu của bạn *
        </label>
        <Input
          typeInput="email"
          id="email"
          name="email"
          placeholder=""
          className="mt-2 mb-3"
          width={400}
          value={formik.values.email}
          handleChange={formik.handleChange}
        />
      </Wrapper>
      <Wrapper className="btn btn-login mt-5 flex flex-row items-center justify-center gap-5">
        <Button
          text="Hủy"
          handleClick={handleClose}
          icon=""
          style={{
            width: 162,
            backgroundColor: "#FFF",
            color: "#ff9138",
            padding: "8px 40px",
            borderRadius: 8,
            fontWeight: 700,
          }}
          bgHoverColor="#FF9138"
        />
        <Button
          text="Tiếp tục"
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

export default ConfirmEmail;

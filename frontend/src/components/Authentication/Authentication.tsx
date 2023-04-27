import { AuthForm, Helmet, Wrapper } from "../";
import imgAuthen from "../../assets/img/authentication.png";

const Authentication = () => {
  return (
    <Wrapper className="authentication">
      <Helmet title="Login">
        <></>
      </Helmet>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AuthForm />
        <Wrapper className="authentication-img flex justify-end items-center">
          <img src={`${imgAuthen}`} alt="Quản lý xếp hàng" />
        </Wrapper>
        <Wrapper className="authentication-content flex justify-center flex-col">
          <h3>Hệ thống</h3>
          <h2>Quản lý xếp hàng</h2>
        </Wrapper>
      </div>
    </Wrapper>
  );
};

export default Authentication;

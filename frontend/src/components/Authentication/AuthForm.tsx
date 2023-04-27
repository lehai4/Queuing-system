import { useParams } from "react-router-dom";
import { ChangePassword, ConfirmEmail, SignIn, Wrapper } from "..";
import logo from "../../assets/img/Logo-alta.png";

const AuthForm = () => {
  const { slug } = useParams();

  return (
    <Wrapper className="authenform">
      <Wrapper className="authenform-logo items-center flex justify-center mt-20 mb-16">
        <img src={logo} alt="Alta Software" />
      </Wrapper>
      {!slug ? (
        <SignIn />
      ) : slug === "forget-password" ? (
        <ConfirmEmail />
      ) : slug === "change-password" ? (
        <ChangePassword />
      ) : (
        <></>
      )}
    </Wrapper>
  );
};

export default AuthForm;

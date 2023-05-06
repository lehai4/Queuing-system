import { useEffect } from "react";
import { Header, Wrapper, Helmet } from "../components";
import { deleteUser, getAllUsers } from "../redux/apiRequest";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { signInSuccess } from "../redux/authSlice";
import { createAxios } from "../components/Instance/createInstance";

const Home = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.auth.login.currentUser);
  const userList = useAppSelector((state) => state.users.users?.allUsers);
  const message = useAppSelector((state) => state.users.users?.message);

  let axiosJWT = createAxios(currentUser, dispatch, signInSuccess);
  const handleDeleteUser = (id: string) => {
    deleteUser(currentUser?.accessToken ?? "", dispatch, id, axiosJWT);
  };

  useEffect(() => {
    getAllUsers(currentUser?.accessToken ?? "", dispatch);
  }, []);
  return (
    <Wrapper className="relative md:m-10 md:mb-0 md:ml-0 mt-24 p-2 md:p-8 md:pb-12 md:pt-4 md:pl-6 bg-grey rounded-3xl">
      <Helmet title="Trang chủ">
        <Wrapper className="grid grid-cols-3 gap-4">
          <Wrapper className="col-span-2">
            <Header
              title="Biểu đồ cấp số"
              style={{
                fontWeight: "700",
                fontSize: 24,
                color: "#FF7506",
                lineHeight: "110%",
              }}
            />
          </Wrapper>
          <Wrapper className="bg-white min-h-max">
            <Header
              title="Tổng quan"
              style={{
                fontWeight: "700",
                fontSize: 24,
                color: "#FF7506",
                lineHeight: "110%",
              }}
            />
          </Wrapper>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};

export default Home;

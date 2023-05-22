import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Header, Helmet, User, Wrapper } from ".";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { getUserById, uploadImage } from "../redux/apiRequest";
import profileDefault from "../assets/img/profile.png";

function convertToBase64(file: any) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}

const Profile = () => {
  const imageRef = useRef(null);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.login.currentUser);
  const [post, setPost] = useState<any>({ myfile: "" });
  let profileLeft = [
    {
      text: "Tên người dùng",
      data: user?.user?.name,
    },
    {
      text: "Số điện thoại",
      data: `0${user?.user?.phone}`,
    },
    {
      text: "Email",
      data: user?.user?.email,
    },
  ];
  let profileRight = [
    {
      text: "Tên đăng nhập",
      data: user?.user?.username,
    },
    {
      text: "Mật khẩu",
      data: user?.user?.password,
    },
    {
      text: "Vai trò",
      data: user?.user?.role,
    },
  ];
  const handleFileUpload = async (e: any) => {
    let file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPost({ ...post, myfile: base64 });
    await uploadImage(user?.user?._id, { image: base64 }, user?.accessToken);
    await getUserById(user?.user?._id, dispatch, user?.accessToken);
  };
  useEffect(() => {
    console.log(user?.user);
  }, [user]);
  return (
    <Wrapper className="md:mb-0 md:ml-0 mt-24 md:pb-6 md:pt-4 md:pl-6 bg-main-grey rounded-3xl">
      <Helmet title="profile">
        <Header
          title="Thông tin cá nhân"
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
        <Wrapper className="profile md:mt-24">
          <Box
            sx={{
              width: 1550,
              height: "auto",
              backgroundColor: "#FFF",
              borderRadius: 3,
              boxShadow: "0 0px 25px -15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <Wrapper className="grid grid-cols-3 md:p-12 gap-x-6">
              <Wrapper className="image-profile">
                <Wrapper className="flex flex-col justify-center items-center gap-y-5">
                  <label htmlFor="file-upload">
                    <img
                      ref={imageRef}
                      src={
                        user?.user?.image === ""
                          ? profileDefault
                          : user?.user?.image
                      }
                      alt=""
                    />
                    <input
                      type="file"
                      aria-label="Image"
                      name="myFile"
                      id="file-upload"
                      accept=".jpeg, .png, .jpg"
                      onChange={(e) => handleFileUpload(e)}
                    />
                  </label>
                  <h2 className="text-3xl font-bold">{user?.user?.name}</h2>
                </Wrapper>
              </Wrapper>
              <Wrapper className="flex flex-col gap-y-3">
                {profileLeft.map((item, i) => (
                  <Wrapper className="flex flex-col" key={i}>
                    <h4 className="font-bold text-xl md:mb-2">{item.text}</h4>
                    <span className="md:p-3 md:mb-2 opacity-70 bg-gray-300 rounded-lg">
                      {item.data}
                    </span>
                  </Wrapper>
                ))}
              </Wrapper>
              <Wrapper className="flex flex-col gap-y-3">
                {profileRight.map((item, i) => (
                  <Wrapper className="flex flex-col" key={i}>
                    <h4 className="font-bold text-xl md:mb-2">{item.text}</h4>
                    <span className="md:p-3 md:mb-2 opacity-70 bg-gray-300 rounded-lg">
                      {item.data}
                    </span>
                  </Wrapper>
                ))}
              </Wrapper>
            </Wrapper>
          </Box>
        </Wrapper>
      </Helmet>
    </Wrapper>
  );
};
export default Profile;

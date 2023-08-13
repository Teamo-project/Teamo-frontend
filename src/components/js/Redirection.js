import { Navigate, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import { useEffect, useState } from "react";

// 구글로그인 화면
function Redirection() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toMain = useNavigate;
  const searchParams = new URLSearchParams(window.location.search);
  const urlParams = new URL(window.location.href).searchParams;
  const accessToken = urlParams.get("accessToken");
  const userId = urlParams.get("userId");

  const signup = async () => {
    try {
      console.log(accessToken);
      await axios
        .get(
          "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/info",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", accessToken);
          dispatch(
            login({
              userId: res.data.id,
              userToken: accessToken,
              userEmail: res.data.email,
              userImg: res.data.img,
              userName: res.data.name,
              userGender: res.data.gender,
              userAge: res.data.age,
              userPhone: res.data.phone,
              userRegion: res.data.region,
            })
          );
          navigate("/");
        });
    } catch (err) {
      alert("oAuth token expired");
      console.log(err);
    }
  };

  useEffect(() => {

    if (accessToken === null) {
      alert("구글을 통한 회원가입을 위하여 추가정보를 기입해주세요.");
      navigate(`/signup/Google/${userId}`);
    } else {
      console.log(accessToken);
      signup();


      console.log(`엑세스토큰 : ${accessToken} 을 저장했습니다.`);
    }
  }, [accessToken, dispatch]);

  return <h3>로딩중입니다.</h3>;
}
export default Redirection;

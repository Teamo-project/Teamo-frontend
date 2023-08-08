import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/userSlice";
import { useEffect, useState } from "react";

// 구글로그인 화면
function Redirection() {
  const navigate = useNavigate();

  const toMain = useNavigate;
  const searchParams = new URLSearchParams(window.location.search);
  const urlParams = new URL(window.location.href).searchParams;
  const accessToken = urlParams.get("accessToken");
  console.log(accessToken);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/user/info",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then((res) => {
        localStorage.setItem("token", accessToken);

        dispatch(
          login({
            user_id: res.data.id,
            user_token: accessToken,
            user_email: res.data.email,
            user_image: res.data.img,
            user_name: res.data.name,
          })
        );
      })
      .catch((err) => {
        alert("oAuth token expired");
      });

    navigate("/");
    console.log(`엑세스토큰 : ${accessToken} 을 저장했습니다.`);
  }, [accessToken, dispatch]);


  return <h3>로딩중입니다.</h3>;
}
export default Redirection;

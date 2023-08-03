import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
function Redirection() {
  const toMain = useNavigate;
  const searchParams = new URLSearchParams(window.location.search);
  const urlParams = new URL(window.location.href).searchParams;
  const accessToken = urlParams.get("accessToken");
  console.log(accessToken);
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
      console.log(res);
    })
    .catch((err) => {
      alert("oAuth token expired");
    });

  //   window.location.replace("http://localhost:3000/");
  console.log(`엑세스토큰 : ${accessToken} 을 저장했습니다.`);

  return <h3>로딩중입니다.</h3>;
}
export default Redirection;

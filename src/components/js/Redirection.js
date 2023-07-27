import { Navigate, useNavigate } from "react-router-dom";

function Redirection() {
  const toMain = useNavigate;
  const searchParams = new URLSearchParams(window.location.search);
  const urlParams = new URL(window.location.href).searchParams;
  const accessToken = urlParams.get("accessToken");
  window.location.replace("http://localhost:3000/");
  console.log(`엑세스토큰 : ${accessToken} 을 저장했습니다.`);
  return <h3>로딩중입니다.</h3>;
}
export default Redirection;

import man_logo from "../img/man.png";
import woman_logo from "../img/woman.png";
import navigation from "../css/navigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector,useState } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import profile from "../img/Profile.png";
import log from "../img/Logout.png";

// 제일 위 로고쪽 부분
function Navigation(prop) {
  const token = useSelector((state) => state.rootReducer.user.user_token);

  const dispatch = useDispatch();

  const LogOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
  };
  
  const [btnActive, setBtnActive] = useState(prop.re);

  const handleActive = (re) => {
    setBtnActive(re);
  };

  return (
    <div>
    <div style={{ position: "relative", width: "980px", display: "flex" }}>
      <img className={navigation.man} src={man_logo} alt="holo_img" />

      <div className={navigation.logobox}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className={navigation.holo}>홀로서기</div>

        </Link>
        <div className={navigation.content}>청소년 자립 지원 공공서비스</div>
      </div>

      <img className={navigation.woman} src={woman_logo} alt="holo_img" />

      <div className={navigation.logindiv}>
        {/* 로그인 성공시 로그인 -> 마이페이지로 */}

        {token === "" ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button className={navigation.login}>로그인 / 회원가입</Button>
          </Link>
        ) : (
          <div
            style={{ display: "flex", width: "270px", alignItems: "center" }}
          >
            <img src={profile} className={navigation.myimg} />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button className={navigation.mybutton}>마이페이지</Button>
            </Link>
            <div style={{ padding: "8px" }}>/</div>
            <img src={log} className={navigation.myimg} />
            <Button className={navigation.mybutton} onClick={LogOut}>
              로그아웃
            </Button>
          </div>
        )}
      </div>
    </div>
<div className={navigation.menu}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            style={
              btnActive == "home" ? { color: "#66c109" } : { background: "" }
            }
          >
            홈
          </Button>
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => handleActive("cal")}
        >
          <Button
            style={
              btnActive == "cal" ? { color: "#66c109" } : { background: "" }
            }
          >
            게시판
          </Button>
        </Link>
        <Link
          to="/"
          style={{ textDecoration: "none" }}
          onClick={() => handleActive("qna")}
        >
          <Button
            style={
              btnActive == "qna" ? { color: "#66c109" } : { background: "" }
            }
          >
            프로그램
          </Button>
        </Link>
        <Link
          to="/postlist"
          style={{ textDecoration: "none" }}
          onClick={() => handleActive("mento")}
        >
          <Button
            style={
              btnActive == "mento" ? { color: "#66c109" } : { background: "" }
            }
          >
            멘토멘티
          </Button>
        </Link>
        <Link
          to="/mypage"
          style={{ textDecoration: "none" }}
          onClick={() => handleActive("mypage")}
        >
          <Button
            style={
              btnActive == "mypage" ? { color: "#66c109" } : { background: "" }
            }
          >
            
          </Button>
</div>
  );
}

export default Navigation;

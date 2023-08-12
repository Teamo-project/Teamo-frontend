import man_logo from "../img/user.png";
import woman_logo from "../img/woman.png";
import navigation from "../css/navigation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";

import Mypage from "../../routes/js/mypage";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/userSlice";
import profile from "../img/Profile.png";
import log from "../img/Logout.png";
import { useState } from "react";

// 제일 위 로고쪽 부분
function Navigation(prop) {
  const token = useSelector((state) => state.rootReducer.user.userToken);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const LogOut = () => {
    localStorage.removeItem("token");
    dispatch(logout());
    navigate("/");
  };

  const [btnActive, setBtnActive] = useState(prop.re);

  const handleActive = (re) => {
    setBtnActive(re);
  };

  return (
    <div>
      <div style={{ position: "relative", width: "1180px", display: "flex" }}>
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

              <Link to="/mypage" style={{ textDecoration: "none" }}>
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
    </div>
  );
}

export default Navigation;

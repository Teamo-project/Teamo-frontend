import man_logo from "../img/man.png";
import woman_logo from "../img/woman.png";
import navigation from "../css/navigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
function Navigation() {
  const [logIn, setLogin] = useState(false);
  return (
    <div style={{ height: "50px" }}>
      <div className={navigation.total}>
        <div className={navigation.logo}>
          <img className={navigation.man} src={man_logo} alt="holo_img" />
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h1>홀로서기</h1>
            </Link>
            <p>청소년 자립 지원 공공서비스</p>
          </div>
          <img className={navigation.woman} src={woman_logo} alt="holo_img" />
        </div>
        {setLogin ? (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button className={navigation.login}>로그인</Button>
          </Link>
        ) : (
          <Link to="/mypage" style={{ textDecoration: "none" }}>
            <Button className={navigation.login}>마이페이지</Button>
          </Link>
        )}
      </div>
      <div className={navigation.menu}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button style={{ color: "#66c109" }}>홈</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>캘린더</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>문의</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>멘토멘티신청</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>마이페이지</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

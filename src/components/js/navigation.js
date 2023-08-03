import man_logo from "../img/man.png";
import woman_logo from "../img/woman.png";
import navigation from "../css/navigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navigation() {
  return (
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
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button className={navigation.login}>로그인 / 회원가입</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

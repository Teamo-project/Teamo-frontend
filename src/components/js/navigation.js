import man_logo from "../img/man.png";
import woman_logo from "../img/woman.png";
import navigation from "../css/navigation.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Navigation() {
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

        {/* 로그인 성공시 로그인 -> 마이페이지로 */}
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button className={navigation.login}>로그인</Button>
        </Link>
      </div>
    </div>
  );
}

export default Navigation;

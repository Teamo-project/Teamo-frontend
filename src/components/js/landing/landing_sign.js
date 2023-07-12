import sign from "../../css/landing/landing_sign.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import sign_team from "../../img/landing_sign.png";
function Sign() {
  return (
    <div className={sign.sign_total}>
      <div className={sign.sign_description}>
        <h1>팀을 만들고 싶나요?</h1>
        <p>팀 프로젝트를 할 준비가 되셨나요?</p>
        <p>그렇다면 아래 버튼을 눌러 로그인을 진행해주세요</p>
        <div className={sign.link}>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <Button className={sign.button}>로그인</Button>
          </Link>
        </div>
      </div>
      <div>
        <img className={sign.team_img} src={sign_team} alt="sign"></img>
      </div>
    </div>
  );
}

export default Sign;

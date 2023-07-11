import mypage from "../css/landing_mypage.module.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import mypage_img from "../img/landing_mypage.png";

function Mypage() {
  return (
    <div className={mypage.mypage_total}>
      <div>
        <img className={mypage.mypage_img} src={mypage_img} alt="mypage"></img>
      </div>
      <div className={mypage.mypage_description}>
        <h1>나만의 프로필을 만들어 보세요</h1>
        <div className={mypage.mypage_div_child}>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>마이페이지에서 자신의 개인정보를 작성해보세요</span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>자신이 속한 팀 정보 확인 </span>
            </li>

            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>현재까지의 팀프로젝트 목록 확인</span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                지금까지의 팀프로젝트 결과물 포트폴리오를 만들어보세요
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mypage;

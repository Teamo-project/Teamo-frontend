import navigation from "../css/main_navigation.module.css";
import icon from "../img/icon.png";
import { Button } from "react-bootstrap";

function Navigation() {
  return (
    <div className={navigation.nav_total}>
      <div className={navigation.nav_header}>
        <img src={icon} alt="icon" />
        <span>Teemo</span>
        <i class="fa-solid fa-bars"></i>
      </div>
      <div className={navigation.nav_link}>
        <Button>
          <i class="fa-solid fa-comment-dots"></i>
          <span>홈</span>
        </Button>
        <Button>
          <i class="fa-solid fa-comment-dots"></i>
          <span>마이 페이지</span>
        </Button>
        <Button>
          <i class="fa-solid fa-comment-dots"></i>
          <span>나의 프로젝트</span>
        </Button>
      </div>
      <Button className={navigation.gear}>
        <i class="fa-solid fa-gear"></i>
        <span>설정</span>
      </Button>
    </div>
  );
}

export default Navigation;

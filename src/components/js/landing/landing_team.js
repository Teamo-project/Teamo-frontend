import team from "../../css/landing/landing_team.module.css";
import team_headphone from "../../img/landing_headphone.png";

function Team() {
  return (
    <div className={team.team_total}>
      <div className={team.team_total_first}>
        <img
          className={team_headphone}
          src={team_headphone}
          alt="headphone"
        ></img>
      </div>
      <div className={team.team_description}>
        <h1>팀별 일정을 관리해요</h1>
        <p>개인의 시간을 고려해 팀 일정을 자동으로 관리해주는 서비스 </p>
        <ul className={team.team_ul}>
          <li className={team.team_li}>
            <i class="fa-regular fa-circle-check"></i>개인 일정을 고려 후 팀플
            가능 시간 체크
          </li>
          <li className={team.team_li}>
            <i class="fa-regular fa-circle-check"></i>유동적으로 팀원 일정 고려
            후 일정 픽스
          </li>
          <li className={team.team_li}>
            <i class="fa-regular fa-circle-check"></i>팀 프로젝트 관리
          </li>
          <li className={team.team_li}>
            <i class="fa-regular fa-circle-check"></i>팀 구성원 추가 기능
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Team;

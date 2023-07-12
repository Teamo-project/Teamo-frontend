import teamo from "../../css/landing/landing_teamo_score.module.css";
import teamo_img from "../../img/landing_teamo.png";

function Teamo() {
  return (
    <div className={teamo.teamo_total}>
      <div className={teamo.teamo_description}>
        <h1>티모점수를 관리해 포인트를 쌓으세요</h1>
        <p>티모점수를 쌓는 기능으로 팀원들 간 참여도 증가</p>
        <div className={teamo.teamo_div_child}>
          <ul>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>팀에서 진행되는 프로젝트 관리</span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>각 팀플이 끝나면 팀장이 성실도를 체크 후 게이지 부여</span>
            </li>

            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>팀 모임 참여도 확인</span>
            </li>
            <li>
              <i class="fa-regular fa-circle-check"></i>
              <span>
                마이페이지에서 티모 점수를 통한 자신의 성실도를 확인해보세요
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img className={teamo.team_img} src={teamo_img} alt="teamo"></img>
      </div>
    </div>
  );
}

export default Teamo;

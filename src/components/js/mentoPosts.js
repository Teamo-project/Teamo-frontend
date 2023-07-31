import { Link } from "react-router-dom";
import mentoStyle from "../../routes/css/mento.module.css";
function posts() {
  return (
    <div>
      <div className={mentoStyle.postsContent}>
        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "42px" }}>1</flex> <flex> 법률</flex>
          <Link to="/mentopost" className={mentoStyle.linkPage}>
            <span>지원 멘티 모집</span>
          </Link>
        </div>

        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "30px" }}>김남진</flex>{" "}
          <flex style={{ marginRight: "30px" }}>23.07.25</flex>{" "}
          <flex style={{ marginRight: "15px" }}>21</flex>
        </div>
      </div>
      <hr className={mentoStyle.line2}></hr>
    </div>
  );
}
export default posts;

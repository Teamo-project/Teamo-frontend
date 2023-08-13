import { Link } from "react-router-dom";
import mentoStyle from "../../routes/css/mento.module.css";

function Posts(postInfo) {
  return (
    <div>
      <div className={mentoStyle.postsContent}>
        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "42px" }}>{postInfo.id}</flex>{" "}
          <flex> {postInfo.category}</flex>
          <Link to={`/viewpost/${postInfo.id}`} className={mentoStyle.linkPage}>
            <span>{postInfo.title}</span>
          </Link>
        </div>

        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "30px" }}>{postInfo.creatorName}</flex>{" "}
          <flex style={{ marginRight: "30px" }}>{postInfo.createDate}</flex>{" "}
          <flex style={{ marginRight: "15px" }}>{postInfo.count}</flex>
        </div>
      </div>
      <hr className={mentoStyle.line2}></hr>
    </div>
  );
}
export default Posts;

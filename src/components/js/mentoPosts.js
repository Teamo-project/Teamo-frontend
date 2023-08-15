import { Link } from "react-router-dom";
import mentoStyle from "../../routes/css/mento.module.css";

function Posts(postInfo) {
  console.log(postInfo);
  return (
    <div>
      <div className={mentoStyle.postsContent}>
        <div className={mentoStyle.postsContents}>
          <span style={{ marginRight: "42px" }}>{postInfo.id}</span>
          <span> {postInfo.category}</span>
          <Link to={`/viewpost/${postInfo.id}`} className={mentoStyle.linkPage}>
            <span className={mentoStyle.span}>{postInfo.title}</span>
          </Link>
        </div>

        <div
          className={mentoStyle.postsContents}
          style={{ marginRight: "10px" }}
        >
          <flex style={{ marginRight: "30px" }}>{postInfo.creatorName}</flex>{" "}
          <flex style={{ marginRight: "30px" }}>{postInfo.createDate}</flex>{" "}
          <flex style={{ marginRight: "15px" }}>
            {postInfo.isReceipt == true ? "모집중" : "마감"}
          </flex>
        </div>
      </div>
      <hr className={mentoStyle.line2}></hr>
    </div>
  );
}
export default Posts;

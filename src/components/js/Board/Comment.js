import user_img from "../../img/user_img.png";
import board from "../../css/Board/board.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { deleteCommentApi } from "../../../apis/boardApi";
import { useSelector } from "react-redux";

// 해당 댓글 내용 보여주기(Board 아래)
function Comment({ id, postId, creatorId, content, createDate }) {
  const navigate = useNavigate();

  //로그인 한 user의 정보 받기
  const state_userid = useSelector((state) => state.rootReducer.user.userId);
  const token = useSelector((state) => state.rootReducer.user.userToken);

  // 댓글 수정 부분
  const moveToupdateComment = () => {
    navigate(`/update/${postId}/comment/${id}`);
  };

  // 댓글 삭제 부분
  const deleteComment = async () => {
    try {
      let deleteConfirm = window.confirm("댓글을 삭제 하시겠습니까?");
      if (deleteConfirm) {
        (await deleteCommentApi(postId, id, token)).then((res) => {
          alert("댓글이 삭제되었습니다.");
          navigate(`/posting/${postId}`);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 댓글 한개의 BOX를 반환
  return (
    <div
      style={{
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
        padding: "16px 0px 16px 14px",
        width: "980px",
        height: "90px",
        marginLeft: "100px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <img style={{ width: "30px" }} src={user_img} alt="user" />
        </div>
        <div style={{ marginLeft: "8px", marginTop: "2px" }}>익명</div>
      </div>
      <div style={{ marginTop: "8px" }}>{content}</div>
      <div style={{ width: "980px", display: "flex", position: "relative" }}>
        <div style={{ marginTop: "12px", fontSize: "0.9rem" }}>
          {createDate}
        </div>
        {/* 해당 댓글의 작성자와 로그인한 사용자의 정보가 같을경우에만 수정,삭제 */}
        {state_userid === creatorId ? (
          <div className={board.caption_btn}>
            <Button
              onClick={moveToupdateComment}
              style={{ marginLeft: "580px" }}
            >
              수정
            </Button>
            <Button onClick={deleteComment}>삭제</Button>
          </div>
        ) : (
          <div className={board.caption_btn}></div>
        )}
      </div>
    </div>
  );
}

export default Comment;

import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Comment({ comment_id, post_id, user_id, comment, createDate }) {
  const navigate = useNavigate();

  const moveToupdateCaption = () => {
    navigate(`/update/${post_id}/comment/${comment_id}`);
  };

  const deletecaption = async () => {
    if (window.confirm("댓글을 삭제 하시겠습니까?")) {
      (
        await axios.delete(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${post_id}/comment/${comment_id}`
        )
      ).then((res) => {
        alert("댓글이 삭제되었습니다.");
        navigate(`/posting/${post_id}`);
      });
    }
  };

  return (
    <div>
      <div
        style={{
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          padding: "15px 5px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ width: "30px" }} src={user_img} alt="user" />
          </div>
          <div style={{ marginLeft: "7px", marginTop: "2px" }}>
            익명{user_id}
          </div>
        </div>
        <div style={{ marginTop: "7px" }}>{comment}</div>
        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ marginTop: "12px", fontSize: "0.9rem" }}>
            {createDate}
          </div>
          <div className={board.caption_btn}>
            <Button style={{ marginLeft: "640px" }}>수정</Button>
            <Button onClick={deletecaption}>삭제</Button>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid lightgray",
          borderBottom: "1px solid lightgray",
          padding: "20px 5px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ width: "30px" }} src={user_img} alt="user" />
          </div>
          <div style={{ marginLeft: "7px", marginTop: "2px" }}>
            익명{user_id}
          </div>
        </div>
        <div style={{ marginTop: "7px" }}>
          안녕하세이ㅛ여러분들.{board.comment}
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <div style={{ marginTop: "12px", fontSize: "0.9rem" }}>
            2022-03-28 11:03:25{board.createDate}
          </div>
          <div className={board.caption_btn}>
            <Button
              onClick={moveToupdateCaption}
              style={{ marginLeft: "538px" }}
            >
              수정
            </Button>
            <Button onClick={deletecaption}>삭제</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;

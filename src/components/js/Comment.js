import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { deleteCommentApi } from "../../apis/boardApi";
import { useSelector } from "react-redux";

// 해당 댓글 내용 보여주기(Board 아래)
function Comment({ comment_id, post_id, user_id, comment, createDate }) {
  const navigate = useNavigate();

  //로그인 한 user의 user_id
  const state_userid = useSelector((state) => state.rootReducer.user.user_id);

  const moveToupdateComment = () => {
    navigate(`/update/${post_id}/comment/${comment_id}`);
  };

  const deleteComment = async () => {
    try {
      let deleteConfirm = window.confirm("댓글을 삭제 하시겠습니까?");
      if (deleteConfirm) {
        (await deleteCommentApi(post_id, comment_id)).then((res) => {
          alert("댓글이 삭제되었습니다.");
          navigate(`/posting/${post_id}`);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        borderTop: "1px solid lightgray",
        borderBottom: "1px solid lightgray",
        padding: "16px 6px",
        width: "980px",
      }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <img style={{ width: "30px" }} src={user_img} alt="user" />
        </div>
        <div style={{ marginLeft: "8px", marginTop: "2px" }}>익명{user_id}</div>
      </div>
      <div style={{ marginTop: "8px" }}>{comment}</div>
      <div style={{ width: "980px", display: "flex", position: "relative" }}>
        <div style={{ marginTop: "12px", fontSize: "0.9rem" }}>
          {createDate}
        </div>
        {state_userid === user_id ? (
          <div className={board.caption_btn}>
            <Button
              onClick={moveToupdateComment}
              style={{ marginLeft: "640px" }}
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

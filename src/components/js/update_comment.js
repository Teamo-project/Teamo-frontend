import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import update from "../css/update_caption.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Etc_Comment from "./EtcComment.js";
import { getCommentApi } from "../../apis/boardApi";
import { getCommentListApi } from "../../apis/boardApi";
import { updateCommentApi } from "../../apis/boardApi";
import { useSelector } from "react-redux";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

// 댓글 수정시 해당 게시물 보이기 및 댓글 수정(update_comment_board 아래)
function Update_caption({
  posting_id,
  title,
  content,
  user_id,
  createDate,
  category,
  comment_id,
}) {
  const navigate = useNavigate();

  // 로그인 한 user의 user_id
  const state_userid = useSelector((state) => state.rootReducer.user.user_id);

  const [new_comment, setNew_comment] = useState({
    comment_id: comment_id,
    post_id: posting_id,
    user_id: state_userid,
    comment: "",
  });

  const getComment = async () => {
    try {
      const resp = await getCommentApi(posting_id, comment_id);
      setNew_comment(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  const { comment } = new_comment;

  const onChange = (event) => {
    const { value, name } = event.target;
    setNew_comment({
      ...new_comment,
      [name]: value,
    });
  };

  const [commentlist, setCommentlist] = useState([]);

  const getCommentlist = async () => {
    try {
      const resp = await getCommentListApi(posting_id);
      setCommentlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComment();
    getCommentlist();
  }, []);

  const updateComment = async () => {
    try {
      let updateConfirm = window.confirm("댓글을 수정 하시겠습니까?");

      if (updateConfirm) {
        await updateCommentApi(new_comment).then((res) => {
          alert("댓글이 수정되었습니다.");
          navigate(`/posting/${posting_id}`);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const backDetail = () => {
    navigate("/posting/" + posting_id);
  };

  return (
    <div>
      {/* 게시판 카테고리 보여주는 부분 */}
      <div
        style={{
          width: "980px",
          fontSize: "1.5rem",
          height: "36px",
          border: "1px solid gray",
          padding: "10px 0px 10px 10px",
          borderRadius: "6px",
          fontWeight: "bold",
          marginBottom: "14px",
          marginTop: "260px",
        }}
      >
        {category} 게시판
      </div>
      {/* 게시물 정보 보여주는 부분 */}
      <div
        style={{
          width: "980px",
          height: "366px",
          paddingLeft: "10px",
          border: "1px solid gray",

          borderRadius: "6px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderBottom: "1px solid lightgray",
            paddingBottom: "10px",
            paddingLeft: "8px",
            width: "950px",
          }}
        >
          <div>
            <img src={user_img} alt="user_img" style={{ width: "38px" }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ fontWeight: "700", fontSize: "0.9rem" }}>
              익명{user_id}
            </div>
            <div style={{ fontSize: "0.9rem" }}>{createDate}</div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            width: "940px",
            padding: "14px 10px",
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
        <div
          style={{
            paddingLeft: "10px",
            marginTop: "10px",
            height: "176px",
            overflowY: "scroll",
            marginRight: "30px",
          }}
        >
          {content && <Viewer initialValue={content} />}
        </div>
      </div>
      <div
        style={{
          margin: "16px 10px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          width: "980px",
        }}
      >
        댓글 수정
      </div>

      {/* 댓글 수정하는 부분 */}
      <div
        style={{
          borderBottom: "1px solid lightgray",
          paddingTop: "20px",
          borderTop: "1px solid gray",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ width: "30px" }} src={user_img} alt="user" />
          </div>
          <div style={{ marginLeft: "8px", marginTop: "2px" }}>
            익명{new_comment.user_id}
          </div>
        </div>
        <div style={{ marginTop: "8px" }}>
          <input
            name="comment"
            type="text"
            placeholder="댓글 수정을 해주세요"
            value={comment}
            onChange={onChange}
            className={update.comment}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "relative",
            marginBottom: "20px",
          }}
        >
          <div style={{ marginTop: "12px", fontSize: "0.9rem" }}></div>
          <div className={update.caption_btn}>
            <Button
              onClick={updateComment}
              style={{
                marginLeft: "850px",
                backgroundColor: "#66c109",
                color: "white",
                borderRadius: "5px",
                border: " none",
                height: "25px",
                width: "55px",
              }}
            >
              저장
            </Button>
            <Button onClick={backDetail}>취소</Button>
          </div>
        </div>
      </div>
      {/*수정을 원하는 댓글 제외 나머지 댓글들 보여주기  */}
      {commentlist.map((comment) => {
        if (comment_id !== comment.comment_id) {
          <Etc_Comment
            comment_id={comment.comment_id}
            post_id={comment.post_id}
            user_id={comment.user_id}
            comment={comment.comment}
            createDate={comment.createDate}
          />;
        }
      })}

      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}

export default Update_caption;

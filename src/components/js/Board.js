import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Comment from "./Comment.js";
import { deleteBoardApi } from "../../apis/boardApi";
import { writeCommentApi } from "../../apis/boardApi";
import { getCommentListApi } from "../../apis/boardApi";
import { useSelector } from "react-redux";
import { Viewer } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";

// 게시물 정보 보여주는 부분 (posting_detail아래)
function Board({ posting_id, title, content, user_id, createDate, category }) {
  const navigate = useNavigate();

  // 로그인한 사용자의 user_id
  const state_userid = useSelector((state) => state.rootReducer.user.user_id);

  const moveToupdate = () => {
    navigate(`/update/${posting_id}`);
  };

  const deleteboard = async () => {
    try {
      let DeleteConfirm = window.confirm("게시글을 삭제 하시겠습니까?");
      if (DeleteConfirm) {
        (await deleteBoardApi(posting_id)).then((res) => {
          alert("삭제되었습니다.");
          navigate("/posting");
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 새롭게 쓰는 댓글 정보
  const [new_comment, setNew_comment] = useState({
    post_id: posting_id,
    // user_id: state_userid,
    comment: "",
  });

  const { comment } = new_comment;

  const onChange = (event) => {
    const { value, name } = event.target;
    setNew_comment({
      ...new_comment,
      [name]: value,
    });
  };

  // 댓글 수 number 변수
  const [number, setNumber] = useState(0);

  const writeComment = async () => {
    try {
      await writeCommentApi(new_comment).then((res) => {
        setNumber(number + 1);
        alert("댓글이 작성되었습니다.");
        navigate(`/posting/${posting_id}`);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [commentlist, setCommentlist] = useState([]);

  // 모든 댓글들 가져오기
  const getCommentlist = async () => {
    try {
      const resp = await getCommentListApi(posting_id);
      setCommentlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCommentlist();
    commentlist.map((board) => {
      setNumber(number + 1);
    });
  }, []);

  return (
    <div>
      {/* 어떤 게시판인지 보여주는 부분 */}
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
        {state_userid === user_id ? (
          <div className={board.btn}>
            {/* 수정삭제는 게시글의 user이름과 사용자의 user이름이 같을 경우만 */}
            <Button onClick={moveToupdate}>수정</Button>
            <Button onClick={deleteboard}>삭제</Button>
          </div>
        ) : (
          <div className={board.btn}></div>
        )}
      </div>

      <div
        style={{ margin: "16px 10px", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        댓글 {number}
      </div>

      {/* 댓글 작성 부분 */}
      <div style={{ position: "relative", width: "980px" }}>
        <input
          name="comment"
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={onChange}
          className={board.comment}
          style={{ marginLeft: "8px", width: "840px" }}
        />
        <Button
          onClick={writeComment}
          style={{
            position: "absolute",
            right: "4px",
            top: "16px",
            width: "76px",
            height: "36px",
            backgroundColor: "#66c109",
            color: "white",
            border: "none",
            borderRadius: "6px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          등록
        </Button>
      </div>

      {/* 해당 게시물의 작성된 댓글들 보여주는 부분 */}
      {commentlist.map((event) => {
        <Comment
          comment_id={event.comment_id}
          post_id={event.post_id}
          user_id={event.user_id}
          comment={event.comment}
          createDate={event.createDate}
        />;
      })}

      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}

export default Board;

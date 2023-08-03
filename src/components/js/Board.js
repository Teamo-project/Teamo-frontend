import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Comment from "./Comment.js";

function Board({ posting_id, title, content, user_id, createdate, category }) {
  const navigate = useNavigate();

  // 유저 id과 글의user id 가 같을 때 버튼이 보이게
  // realuser는 redux하기전 진짜 user id
  const [realuser, setRealuser] = useState("qwer");

  const moveToupdate = () => {
    navigate(`/update/${posting_id}`);
  };

  const deleteboard = async () => {
    try {
      let DeleteConfirm = window.confirm("게시글을 삭제 하시겠습니까?");
      if (DeleteConfirm) {
        (
          await axios.delete(
            `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}`
          )
        ).then((res) => {
          alert("삭제되었습니다.");
          navigate("/posting");
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [caption, setCaption] = useState({
    post_id: posting_id,
    user_id: realuser,
    comment: "",
  });

  const { comment } = caption;

  const onChange = (event) => {
    const { value, name } = event.target;
    setCaption({
      ...caption,
      [name]: value,
    });
  };

  const [number, setNumber] = useState(0);

  const writeCaption = async () => {
    try {
      await axios
        .post(
          `https://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment`,
          caption
        )
        .then((res) => {
          setNumber(number + 1);
          alert("댓글이 작성되었습니다.");
          navigate(`/posting/${posting_id}`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const [commentlist, setCommentlist] = useState([]);

  const getCaptionlist = async () => {
    try {
      const resp = await axios.get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment`
      );
      setCommentlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCaptionlist();
    commentlist.map((board) => {
      setNumber(number + 1);
    });
  }, []);

  return (
    <div>
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
        {category}게시판
      </div>
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
              익명 {user_id}
            </div>
            <div style={{ fontSize: "0.9rem" }}>{createdate}</div>
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
        <div className={board.content}>
          {content.split(`\n`).map((line) => {
            return (
              <div>
                {line}
                <br />
              </div>
            );
          })}
        </div>
        {realuser === user_id ? (
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
          onClick={writeCaption}
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
      {commentlist.map((event) => {
        <Comment
          comment_id={event.comment_id}
          post_id={event.post_id}
          user_id={event.user_id}
          comment={event.comment}
          createDate={event.createDate}
        />;
      })}

      {/* 댓글 예시 */}
      <Comment
        comment_id="1234"
        post_id="5678"
        user_id="asdf"
        comment="안녕"
        createDate="2022"
      />

      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}

export default Board;

import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Comment from "./Comment.js";

function Board({ posting_id, title, content, user_id, createdate, category }) {
  const navigate = useNavigate();

  // 유저 id과 글의user id 가 같을 때

  const moveToupdate = () => {
    navigate(`/update/${posting_id}`);
  };

  const deleteboard = async () => {
    if (window.confirm("게시글을 삭제 하시겠습니까?")) {
      (
        await axios.delete(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}`
        )
      ).then((res) => {
        alert("삭제되었습니다.");
        navigate("/posting");
      });
    }
  };

  const [caption, setCaption] = useState({
    post_id: posting_id,
    user_id: user_id,
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

  let number = 0;

  const writeCaption = async () => {
    await axios
      .post(
        `https://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment`,
        caption
      )
      .then((res) => {
        number = number + 1;
        alert("댓글이 작성되었습니다.");
        navigate(`/posting/${posting_id}`);
      });
  };

  const [commentlist, setCommentlist] = useState([]);

  const getCaptionlist = async () => {
    const resp = await (
      await axios.get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment`
      )
    ).data;
    setCommentlist(resp.data);
  };

  useEffect(() => {
    getCaptionlist();
    commentlist.map((board) => {
      number = number + 1;
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "788px",
          fontSize: "1.5rem",
          height: "35px",
          border: "1px solid gray",
          padding: "10px",
          borderRadius: "5px",
          fontWeight: "bold",
          marginBottom: "13px",
        }}
      >
        {category}게시판
      </div>
      <div
        style={{
          width: "800px",
          height: "365px",
          paddingLeft: "10px",
          border: "1px solid gray",

          borderRadius: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            borderBottom: "1px solid lightgray",
            paddingBottom: "10px",
            paddingLeft: "7px",
            width: "95%",
          }}
        >
          <div>
            <img src={user_img} alt="user_img" style={{ width: "38px" }} />
          </div>
          <div style={{ marginLeft: "10px" }}>
            <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
              익명 {user_id}
            </div>
            <div style={{ fontSize: "0.9rem" }}>{createdate}</div>
          </div>
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            width: "93%",
            padding: "15px 10px",
            fontSize: "1.4rem",
            fontWeight: "bold",
          }}
        >
          {title}
        </div>
        <div className={board.content}>
          {content.split("\n").map((line) => {
            return (
              <div>
                {line}
                <br />
              </div>
            );
          })}
        </div>
        <div className={board.btn}>
          {/* 수정삭제는 게시글의 user이름과 사용자의 user이름이 같을 경우만 */}
          <Button onClick={moveToupdate}>수정</Button>
          <Button onClick={deleteboard}>삭제</Button>
        </div>
      </div>
      <div
        style={{ margin: "13px 10px", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        댓글 {number}
      </div>
      <div style={{ position: "relative" }}>
        <input
          name="comment"
          type="text"
          placeholder="댓글을 입력해주세요."
          value={comment}
          onChange={onChange}
          className={board.comment}
        />
        <Button
          onClick={writeCaption}
          style={{
            position: "absolute",
            right: "13px",
            top: "9px",
            width: "75px",
            height: "32px",
            backgroundColor: "#66c109",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "0.9rem",
            cursor: "pointer",
          }}
        >
          등록
        </Button>
      </div>
      {commentlist.map((board) => {
        <Comment
          comment_id={board.comment_id}
          post_id={board.post_id}
          user_id={board.user_id}
          comment={board.comment}
          createDate={board.createDate}
        />;
      })}

      {/* 댓글 예시 */}
      <Comment
        comment_id="1234"
        post_id="5678"
        user_id="ljsf"
        comment="안녕"
        createDate="2022"
      />

      <div style={{ paddingBottom: "80px" }}></div>
    </div>
  );
}

export default Board;

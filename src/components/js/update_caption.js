import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import update from "../css/update_caption.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import Comment from "./Comment.js";

function Update_caption({
  posting_id,
  title,
  content,
  user_id,
  createdate,
  category,
}) {
  const navigate = useNavigate();

  //   삭제할려는 caption_id
  //   해당 삭제하려는 댓글의 사용자 user id를 알아야한다.
  const { caption_id } = useParams();
  const [caption, setCaption] = useState({
    comment_id: { caption_id },
    post_id: posting_id,
    user: "",
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
  }, []);

  const updateComment = async () => {
    await axios
      .put(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment/${caption_id}`,
        {
          post_id: caption.post_id,
          comment: caption.comment,
        }
      )
      .then((res) => {
        alert("댓글이 수정되었습니다.");
        navigate(`/posting/${posting_id}`);
      });
  };

  const backDetail = () => {
    navigate("/posting/" + posting_id);
  };

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
        <div className={update.content}>
          {content.split("\n").map((line) => {
            return (
              <div>
                {line}
                <br />
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{ margin: "13px 10px", fontWeight: "bold", fontSize: "1.1rem" }}
      >
        댓글 수정
      </div>

      <div style={{ paddingTop: "20px", borderTop: "1px solid gray" }}>
        <div style={{ display: "flex" }}>
          <div>
            <img style={{ width: "30px" }} src={user_img} alt="user" />
          </div>
          <div style={{ marginLeft: "7px", marginTop: "2px" }}>
            익명{user_id}
          </div>
        </div>
        <div style={{ marginTop: "7px" }}>
          <input
            name="comment"
            type="text"
            placeholder="수정을 해주세요"
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
          <div style={{ marginTop: "12px", fontSize: "0.9rem" }}>
            2022-03-28 11:03:25{update.createDate}
          </div>
          <div className={update.caption_btn}>
            <Button
              onClick={updateComment}
              style={{
                marginLeft: "538px",
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

      {commentlist.map((comment) => {
        if (caption_id !== comment.comment_id) {
          <Comment
            comment_id={comment.comment_id}
            post_id={comment.post_id}
            user_id={comment.user_id}
            comment={comment.comment}
            createDate={comment.createDate}
          />;
        }
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

export default Update_caption;

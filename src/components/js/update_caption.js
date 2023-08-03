import React, { useEffect, useState } from "react";
import user_img from "../img/user_img.png";
import update from "../css/update_caption.module.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import EtcComment from "./EtcComment.js";

function Update_caption({
  posting_id,
  title,
  content,
  user_id,
  createdate,
  category,
  comment_id,
}) {
  const navigate = useNavigate();

  // 유저 id과 글의user id 가 같을 때 버튼이 보이게
  // realuser는 redux하기전 진짜 user id
  const [realuser, setRealuser] = useState("asdf");

  const [caption, setCaption] = useState({
    comment_id: comment_id,
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
  }, []);

  const updateComment = async () => {
    try {
      let updateConfirm = window.confirm("댓글을 수정 하시겠습니까?");

      if (updateConfirm) {
        await axios
          .put(
            `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}/comment/${comment_id}`,
            {
              caption,
            }
          )
          .then((res) => {
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
        style={{
          margin: "16px 10px",
          fontWeight: "bold",
          fontSize: "1.1rem",
          width: "980px",
        }}
      >
        댓글 수정
      </div>

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
            익명{caption.user_id}
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

      {commentlist.map((comment) => {
        if (comment_id !== comment.comment_id) {
          <etc_Comment
            comment_id={comment.comment_id}
            post_id={comment.post_id}
            user_id={comment.user_id}
            comment={comment.comment}
            createDate={comment.createDate}
          />;
        }
      })}

      {/* 댓글 예시 */}
      <EtcComment
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

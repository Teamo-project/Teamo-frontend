import user_img from "../img/user_img.png";
import board from "../css/board.module.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useState } from "react";

function EtcComment({ comment_id, post_id, user_id, comment, createDate }) {
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
      </div>
    </div>
  );
}

export default EtcComment;

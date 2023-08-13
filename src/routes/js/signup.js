import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import menu from "../../components/css/navigationMenu.module.css";
import { useEffect, useState } from "react";
import { getBoardDetailApi } from "../../apis/boardApi";
// 게시물 상세 페이지

function BoardDetail() {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "1180px",
        margin: "0 auto",
      }}
    >
      <Navigation />

      {/* 메뉴 부분 */}
      <div className={menu.menu}>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>홈</Button>
          </Link>
        </div>
        <div className={menu.post}>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button style={{ color: "#66c109" }}>게시판</Button>
          </Link>
        </div>
        <div>
          <Link to="/program" style={{ textDecoration: "none" }}>
            <Button>프로그램</Button>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>멘토멘티</Button>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>문의</Button>
          </Link>
        </div>
      </div>
      <div
        style={{
          width: "980px",
          height: "976px",
          marginTop: "46px",
          display: "flex",
        }}
      ></div>
    </div>
  );
}

export default BoardDetail;

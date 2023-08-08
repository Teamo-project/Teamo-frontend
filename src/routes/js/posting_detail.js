import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import axios from "axios";
import Board from "../../components/js/Board";
import { useEffect, useState } from "react";
import { getBoardDetailApi } from "../../apis/boardApi";

// 게시물 상세 페이지
function BoardDetail() {
  const { posting_id } = useParams();

  const [board, setBoard] = useState({});

  const getBoard = async () => {
    try {
      const resp = await getBoardDetailApi(posting_id);
      setBoard(resp.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBoard();
  }, []);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: "980px",
        // marginLeft: "230px",
        // marginRight: "230px",
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
          marginTop: "300px",
          display: "flex",
        }}
      >
        {/* 해당 게시물 Detail 보이도록 하는 부분 */}
        <Board
          posting_id={board.posting_id}
          title={board.title}
          content={board.content}
          user_id={board.user_id}
          createDate={board.createDate}
          category={board.category}
        />
      </div>
    </div>
  );
}

export default BoardDetail;

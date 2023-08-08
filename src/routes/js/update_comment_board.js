import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import UpdateComment_board from "../../components/js/update_comment";
import { getBoardDetailApi } from "../../apis/boardApi";

// 댓글 수정 페이지
function Modifycomment() {
  const { post_id, comment_id } = useParams();

  const [board, setBoard] = useState({});

  const getBoard = async () => {
    try {
      const resp = await getBoardDetailApi(post_id);
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
        margin: "0 auto",
        // marginLeft: "230px",
        // marginRight: "230px",
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
        style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}
      >
        {/* 댓글을 수정하기 위한 화면(board와 비슷한 역할) */}
        <UpdateComment_board
          posting_id={board.posting_id}
          title={board.title}
          content={board.content}
          user_id={board.user_id}
          createDate={board.createDate}
          category={board.category}
          comment_id={comment_id}
        />
      </div>
    </div>
  );
}

export default Modifycomment;

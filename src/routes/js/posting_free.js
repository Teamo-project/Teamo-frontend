import Navigation from "../../components/js/navigation";
import menu from "../../components/css/navigation_menu.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import post from "../css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Posting_free() {
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    const resp = await (
      await axios.get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting"
      )
    ).data;
    setBoardlist(resp.data);
  };

  useEffect(() => {
    getboardlist();
  }, []);

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className={menu.menu}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>홈</Button>
        </Link>
        <div className={menu.post}>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button style={{ color: "#66c109" }}>
              게시판 <i class="fa-solid fa-angle-down"></i>
            </Button>
          </Link>
          <ul className={menu.list}>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <li>전체 게시판</li>
            </Link>
            <Link
              to="/posting/category=자유"
              style={{ textDecoration: "none" }}
            >
              <li>자유 게시판</li>
            </Link>
            <Link
              to="/posting/category=질문"
              style={{ textDecoration: "none" }}
            >
              <li>질문 게시판</li>
            </Link>
            <Link
              to="/posting/category=정보"
              style={{ textDecoration: "none" }}
            >
              <li>정보 게시판</li>
            </Link>
            <Link
              to="/posting/category=구인구직"
              style={{ textDecoration: "none" }}
            >
              <li>구인/구직 게시판</li>
            </Link>
          </ul>
        </div>
        <Link to="/program" style={{ textDecoration: "none" }}>
          <Button>프로그램</Button>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>멘토멘티신청</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>문의</Button>
        </Link>
      </div>
      <div className={post.board}>
        <div className={post.board_title}>자유 게시판</div>

        <div className={post.new_post_total}>
          <div className={post.new_post}>검색어를 입력해주세요.</div>
          <Link to="/posting/write">
            <Button
              style={{
                width: "70px",
                height: "35px",
                marginTop: "15px",
                marginLeft: "17px",
                border: "none",
                backgroundColor: "#66c109",
                color: "white",
                borderRadius: "7px",
                cursor: "pointer",
              }}
            >
              글쓰기
            </Button>
          </Link>
        </div>
        <div className={post.post}>
          {boardlist.map((board) => {
            if (board.category == "자유") {
              return (
                <Link to={`/posting/${board.posting_id}`}>
                  <div className={post.box} style={{ position: "relative" }}>
                    <div
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        margin: "5px 0px 20px",
                      }}
                    >
                      {board.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        margin: "5px 0px 70px",
                        width: "360px",
                        lineHeight: "28px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {board.content}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        position: "absolute",
                        top: "177px",
                        fontSize: "0.8rem",
                        width: "100%",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          display: "flex",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <div style={{ width: "80%", display: "flex" }}>
                          <div>{board.createDate}</div>
                          <div style={{ marginLeft: "15px" }}>익명</div>
                        </div>
                        <div style={{ width: "20%" }}>댓글 수</div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Posting_free;

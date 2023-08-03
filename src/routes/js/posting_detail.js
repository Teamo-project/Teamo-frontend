import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import axios from "axios";
import Board from "../../components/js/Board";
import { useEffect, useState } from "react";

function BoardDetail() {
  const { posting_id } = useParams();

  const [loading, setLoading] = useState(true);
  const [board, setBoard] = useState({});

  const getBoard = async () => {
    try {
      const resp = await axios.get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}`
      );
      setBoard(resp.data);
      setLoading(false);
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
        marginLeft: "230px",
        marginRight: "230px",
      }}
    >
      <Navigation />
      <div className={menu.menu}>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button style={{ color: "#66c109" }}>홈</Button>
          </Link>
        </div>
        <div className={menu.post}>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button>
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
        <div>
          <Link to="/program" style={{ textDecoration: "none" }}>
            <Button>프로그램</Button>
          </Link>
        </div>
        <div>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>멘토멘티신청</Button>
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
        {/* {loading ? (
          <h2>loading...</h2>
        ) : (
          <Board
            posting_id={board.posting_id}
            title={board.title}
            content={board.content}
            user_id={board.user_id}
            createdate={board.createDate}
            category={board.category}
          />
        )} */}

        <Board
          posting_id="123"
          title="청소년 자립 지원에 대한 정보"
          content="이번에 자립을 하게된 20살입니다. \n 성인이 되고 이제 자립을 하려고 하는데 주거정보를 알고싶어요\n그리고 다른 정부지원 사이트 프로그램이라던가
          커뮤니티 좀 알려주세요\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          "
          user_id="qwer"
          createdate="23-07-28"
          category="정보"
        />
      </div>
    </div>
  );
}

export default BoardDetail;

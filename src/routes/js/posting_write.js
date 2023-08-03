import Navigation from "../../components/js/navigation";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import write from "../css/posting_write.module.css";

function Write() {
  const navigate = useNavigate();

  //posting_id, 생성일,수정일은 백엔드에서 하기로 함
  const [board, setBoard] = useState({
    user_id: "1234",
    title: "제목입니다",
    content: "내용입니다.",
    category: "구인구직",
  });

  const { title, content } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  // const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  // let week = WEEKDAY[new Date().getDay()];

  const saveBoard = async () => {
    try {
      await axios
        .post(
          "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting",
          board,
          {
            headers: { Authorization: "Bearer debug" },
          }
        )
        .then((res) => {
          console.log(res);
          alert("글이 등록되었습니다.");
          navigate("/posting");
        });
    } catch (err) {
      console.log(err);
    }
  };

  const backBoard = () => {
    navigate("/posting");
  };

  let number = 0;

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

      <div className={write.total}>
        <div
          style={{
            marginLeft: "6px",
            marginBottom: "16px",
            fontSize: "1.6rem",
            fontWeight: "bold",
            paddingBottom: "14px",
            borderBottom: "1px solid gray",
          }}
        >
          게시판 새 글 작성하기
        </div>
        <div className={write.total_top}>
          <span>카테고리</span>
          <div className={write.cate}>
            <div style={{ marginLeft: "540px" }}>
              <label htmlFor="자유">자유</label>
              <input
                id="자유"
                type="radio"
                name="category"
                value="자유"
                onChange={onChange}
                defaultChecked
              ></input>
            </div>
            <div>
              <label htmlFor="질문">질문</label>
              <input
                id="질문"
                type="radio"
                name="category"
                value="질문"
                onChange={onChange}
              ></input>
            </div>
            <div>
              <label htmlFor="정보">정보</label>
              <input
                id="정보"
                type="radio"
                name="category"
                value="정보"
                onChange={onChange}
              ></input>
            </div>
            <div>
              <label htmlFor="구인/구직">구인/구직</label>
              <input
                id="구인/구직"
                type="radio"
                name="category"
                value="구인구직"
                onChange={onChange}
              ></input>
            </div>
          </div>
        </div>
        <input
          name="title"
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={onChange}
          className={write.title}
        />

        <textarea
          name="content"
          cols="90"
          rows="15"
          value={content}
          onChange={onChange}
          className={write.content}
          placeholder="새 글의 내용을 작성해주세요."
        />

        <div className={write.button_div}>
          <Button onClick={saveBoard}>올리기</Button>
          <Button onClick={backBoard}>취소</Button>
        </div>
      </div>
    </div>
  );
}

export default Write;

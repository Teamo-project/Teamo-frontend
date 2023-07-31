import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import write from "../css/posting_write.module.css";
import Navigation from "../../components/js/navigation";
import { Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import axios from "axios";

function Update() {
  const navigate = useNavigate();
  const { posting_id } = useParams();
  const [board, setBoard] = useState({
    posting_id: posting_id,
    title: "",
    user_id: "",
    content: "",
    category: "",
  });

  const { title, user_id, content, category } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  const getBoard = async () => {
    const resp = await (
      await axios.get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}`
      )
    ).data;
    setBoard(resp.data);
  };

  const updateBoard = async () => {
    await axios
      .put(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting/${posting_id}`,
        { title: board.title, content: board.content, category: board.category }
      )
      .then((res) => {
        alert("글이 수정되었습니다.");
        navigate("/posting/" + posting_id);
      });
  };

  const backDetail = () => {
    navigate("/posting/" + posting_id);
  };

  useEffect(() => {
    getBoard();
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

      <div className={write.total}>
        <div
          style={{
            marginLeft: "5px",
            marginBottom: "15px",
            fontSize: "1.6rem",
            fontWeight: "bold",
            paddingBottom: "13px",
            borderBottom: "1px solid gray",
          }}
        >
          글 수정하기
        </div>
        <div className={write.total_top}>
          <span>카테고리</span>
          <div className={write.cate}>
            <div style={{ marginLeft: "330px" }}>
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
          value={content.split("\n").map((line) => {
            return (
              <div>
                {line}
                <br />
              </div>
            );
          })}
          onChange={onChange}
          className={write.content}
          placeholder="새 글의 내용을 작성해주세요."
        />

        <div className={write.button_div}>
          <Button onClick={updateBoard}>수정</Button>
          <Button onClick={backDetail}>취소</Button>
        </div>
      </div>
    </div>
  );
}

export default Update;

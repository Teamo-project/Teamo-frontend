import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import write from "../css/posting_write.module.css";
import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import axios from "axios";
import { getBoardDetailApi } from "../../apis/boardApi";
import { updateBoardApi } from "../../apis/boardApi";

import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { useRef } from "react";

// 게시물 수정 페이지
function Update() {
  const navigate = useNavigate();
  const { posting_id } = useParams();
  const editorRef = useRef();

  const [board, setBoard] = useState({
    posting_id: posting_id,
    title: "",
    user_id: "",
    content: "",
    category: "",
    createDate: "",
  });
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

  const { title, category } = board;

  const onChange = (event) => {
    const { value, name } = event.target;
    setBoard({
      ...board,
      [name]: value,
    });
  };

  // toast ui로 수정
  const toastui = (e) => {
    setBoard({
      ...board,
      content: editorRef.current?.getInstance().getHTML(),
    });
  };

  const updateBoard = async () => {
    try {
      let editConfirm = window.confirm("게시글을 수정 하시겠습니까?");
      if (editConfirm) {
        await updateBoardApi(board).then((res) => {
          alert("글이 수정되었습니다.");
          navigate("/posting/" + posting_id);
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
            <Button>마이페이지</Button>
          </Link>
        </div>
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
          {/* 카테고리 선택 부분, default되게 바꿔야 됨 */}
          <div className={write.cate}>
            <div style={{ marginLeft: "330px" }}>
              <label htmlFor="자유">자유</label>
              <input
                id="자유"
                type="radio"
                name="category"
                value="자유"
                onChange={onChange}
                checked={board.category === "자유"}
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
                checked={board.category === "질문"}
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
                checked={board.category === "정보"}
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
                checked={board.category === "구인구직"}
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

        <Editor
          ref={editorRef}
          placeholder="내용을 입력해주세요."
          previewStyle="vertical"
          height="340px"
          initialEditType="wysiwyg"
          initialValue={board.content}
          useCommandShortcut={false}
          onChange={toastui}
        ></Editor>

        <div className={write.button_div}>
          <Button onClick={updateBoard}>수정</Button>
          <Button onClick={backDetail}>취소</Button>
        </div>
      </div>
    </div>
  );
}

export default Update;

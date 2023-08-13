import Navigation from "../../components/js/navigation";
import menu from "../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import post from "../css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Posting_total from "../../components/js/Posting/posting_total";
import Posting_free from "../../components/js/Posting/posting_free";
import Posting_question from "../../components/js/Posting/posting_question";
import Posting_information from "../../components/js/Posting/posting_information";
import Posting_job from "../../components/js/Posting/posting_job";
import home from "../../routes/css/home.module.css";
import { getBoardListApi } from "../../apis/boardApi";

// 게시판 페이지
function Posting() {
  //모든 게시물들 가져오기
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    try {
      const resp = await getBoardListApi();
      setBoardlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  // 해당 하는 게시판을 보여주기 위해 number 변수 설정
  const [number, setNumber] = useState("0");
  const number0 = () => {
    setNumber("0");
  };
  const number1 = () => {
    setNumber("1");
  };
  const number2 = () => {
    setNumber("2");
  };
  const number3 = () => {
    setNumber("3");
  };
  const number4 = () => {
    setNumber("4");
  };

  // 검색어 부분
  const [search, setSearch] = useState("");
  const onChange = (event) => {
    setSearch(event.target.value);
  };
  // 해당 검색어 포함한 게시물 보여주도록 하기
  const onSearch = () => {
    setNumber("5");
    alert(`"${search}"를 검색한 결과가 보입니다.`);
  };

  const keyenter = (e) => {
    if (e.keyCode === 13) {
      setNumber("5");
      alert(`"${search}"를 검색한 결과가 보입니다.`);
    }
  };

  //예시
  const hi = [
    {
      posting_id: "3",
      createDate: "2022-11-33 ~~~~~~~~~~",
      user_id: "3",
      title: "하요",
      content: "내용3<br><p>이내용444</p>",
      category: "자유",
    },
    {
      posting_id: "2",
      createDate: "2022-11-22",
      user_id: "유저2",
      title: "제2",
      content: "내용이",
      category: "정보",
    },
    {
      posting_id: "1",
      createDate: "2022-21-11",
      user_id: "유저1",
      title: "제1",
      content: "내용1",
      category: "구인구직",
    },
    {
      posting_id: "4",
      createDate: "2022-21-11",
      user_id: "유저4",
      title: "제4",
      content: "내용4",
      category: "질문",
    },
    {
      posting_id: "5",
      createDate: "2022-21-11",
      user_id: "익명5",
      title: "제목5",
      content: "하이용",
      category: "자유",
    },
    {
      posting_id: "5",
      createDate: "2022-21-11",
      user_id: "익명6",
      title: "제목오이",
      content: "내용5",
      category: "자유",
    },
    {
      posting_id: "5",
      createDate: "2022-21-11",
      user_id: "익명7",
      title: "제목5",
      content: "내용5",
      category: "자유",
    },
  ];

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          // marginLeft: "230px",
          // marginRight: "230px",
          width: "980px",
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
          <div>
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
            <Link to="/postlist" style={{ textDecoration: "none" }}>
              <Button>멘토멘티</Button>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>문의</Button>
            </Link>
          </div>
        </div>

        <div className={post.board}>
          <div className={post.board_title}>소통 게시판</div>

          {/* 원하는 게시판 카테고리 선택 부분 */}
          <div className={post.button}>
            <span> 카테고리 :</span>
            <Button onClick={number0} data-checked={number === "0"}>
              전체글
            </Button>
            <Button onClick={number1} data-checked={number === "1"}>
              자유
            </Button>
            <Button onClick={number2} data-checked={number === "2"}>
              질문
            </Button>
            <Button onClick={number3} data-checked={number === "3"}>
              정보
            </Button>
            <Button onClick={number4} data-checked={number === "4"}>
              구인/구직
            </Button>
          </div>

          {/* 게시판 */}
          <div className={post.post}>
            {/* 게시판의 가장 위 위치한 해당 게시물 정보 */}
            <div className={post.line}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "45px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 14px",
                  borderRight: "1px solid #545454",
                }}
              >
                순번
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "45px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 16px",
                  borderRight: "1px solid #545454",
                }}
              >
                분류
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "45px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 14px",
                }}
              >
                제목
              </div>
              <div
                style={{
                  marginLeft: "480px",
                  display: "flex",
                  alignItems: "center",
                  width: "64px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 14px",
                  borderRight: "1px solid #545454",
                }}
              >
                등록자명
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "125px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "flex-start",
                  padding: "0px 16px",
                }}
              >
                등록일
              </div>
            </div>

            {/* 카테고리 선택 시 해당 게시물들 보이도록 설정
            {number === "0" ? (
              <Posting_total />
            ) : number === "1" ? (
              <Posting_free />
            ) : number === "2" ? (
              <Posting_question />
            ) : number === "3" ? (
              <Posting_information />
            ) : number === "4" ? (
              <Posting_job />
            ) : (
              // 검색어에 해당하는 것 나오게 하기
              <div className={post.ten_post}>
                {boardlist.map((board) => {
                  if (
                    board.title.includes(search) ||
                    board.content.includes(search)
                  ) {
                    return (
                      <Link
                        to={`/posting/${board.posting_id}`}
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            width: "980px",
                            height: "60px",
                            boxSizing: "border-box",
                            borderBottom: "1px solid lightgray",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "20px",
                              height: "20px",
                              fontWeight: "700",
                              fontSize: "16px",
                              justifyContent: "center",
                              padding: "0px 28px",
                            }}
                          >
                            {board.posting_id}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "70px",
                              height: "32px",
                              fontWeight: "700",
                              fontSize: "16px",
                              justifyContent: "center",
                              padding: "0px 3px",
                            }}
                          >
                            {board.category}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              // alignItems: "",
                              width: "460px",
                              height: "20px",
                              fontWeight: "700",
                              fontSize: "16px",
                              padding: "0px 20px",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                            }}
                          >
                            {board.title}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "77px",
                              height: "32px",
                              fontWeight: "700",
                              fontSize: "16px",
                              justifyContent: "center",
                              padding: "0px 8px",
                              marginLeft: "50px",
                            }}
                          >
                            익명{board.user_id}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              width: "146px",
                              height: "32px",
                              fontWeight: "700",
                              fontSize: "16px",
                              justifyContent: "flex-start",
                              padding: "0px 4px",
                              marginLeft: "8px",
                            }}
                          >
                            {board.createDate}
                          </div>
                        </div>
                      </Link>
                    );
                  }
                })}
              </div>
            )} */}

            {/* 검색어 입력 및 글쓰기 부분 */}
            <div style={{ display: "flex", marginTop: "20px" }}>
              <input
                type="text"
                placeholder="검색어를 입력하세요."
                className={post.search}
                value={search}
                onChange={onChange}
                onKeyUp={keyenter}
              />
              <Button className={post.searchbutton} onClick={onSearch}>
                검색
              </Button>
              {/* 글쓰기 클릭시 페이지이동 */}
              <Link to="/posting/write">
                <Button
                  style={{
                    width: "80px",
                    height: "42px",
                    marginLeft: "516px",
                    border: "none",
                    backgroundColor: "#66c109",
                    color: "white",
                    fontSize: "16px",
                    cursor: "pointer",
                  }}
                >
                  글쓰기
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 가장 아래 footer부분 */}
      <div className={home.footer}>
        <div className={home.footer_left}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>홀로서기</h2>
          </Link>
          <p>청소년 자립 지원 공공 서비스</p>
          <div>연락처 : 010-4470-2175</div>
          <div>이메일 : chandelier7642@gmail.com</div>
          <div>주소 : 세종대학교 학생회관 B123</div>
        </div>
        <div className={home.footer_right}>
          <div className={home.footer_agency}>
            <h4>협업 정부 기관</h4>
            <div>여성가족부</div>
            <div>청소년자립지원단</div>
            <div>한국청소년상담복지개발원</div>
            <div>한국청소년정책연구원</div>
            <div>한국청소년활동진흥원</div>
          </div>
          <div className={home.footer_sponsor}>
            <h4>후원사</h4>
            <div>삼성재단</div>
            <div>LG재단</div>
            <div>카카오</div>
          </div>
          <div className={home.footer_spon}>
            <h4>후원</h4>
            <div>후원 문의</div>
            <div>1644-1211</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posting;

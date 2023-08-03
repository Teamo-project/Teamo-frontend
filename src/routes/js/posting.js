import Navigation from "../../components/js/navigation";
import menu from "../../components/css/navigation_menu.module.css";
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

function Posting() {
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

  return (
    <div>
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

        <div className={post.board}>
          <div className={post.board_title}>소통 게시판</div>

          <div className={post.button}>
            <span> 카테고리 :</span>
            <Button onClick={number0}>전체글</Button>
            <Button onClick={number1}>자유</Button>
            <Button onClick={number2}>질문</Button>
            <Button onClick={number3}>정보</Button>
            <Button onClick={number4}>구인/구직</Button>
          </div>

          <div className={post.post}>
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
                  marginLeft: "500px",
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
                  width: "50px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 16px",
                  borderRight: "1px solid #545454",
                }}
              >
                등록일
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "50px",
                  height: "24px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 10px 0px 14px",
                }}
              >
                댓글수
              </div>
            </div>

            {number === "0" ? (
              <Posting_total />
            ) : number === "1" ? (
              <Posting_free />
            ) : number === "2" ? (
              <Posting_question />
            ) : number === "3" ? (
              <Posting_information />
            ) : (
              <Posting_job />
            )}

            {/* 예시 */}
            <Link
              to="/posting/:postingId"
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "980px",
                  height: "60px",
                  marginTop: "60px",
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
                  1
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
                  구인구직
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
                  청소년 자립 지원 프로그램 목록
                  질문??ㄴㅇㄹㄴㅇ러나ㅓㄹ니ㅓ리너ㅏㄹ어닐ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㄴㄹㄴㅇㄹㄴㅇㄹ
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
                    marginLeft: "80px",
                  }}
                >
                  박준형
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "73px",
                    height: "32px",
                    fontWeight: "700",
                    fontSize: "16px",
                    justifyContent: "center",
                    padding: "0px 4px",
                  }}
                >
                  23.08.01
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "31px",
                    height: "32px",
                    fontWeight: "700",
                    fontSize: "16px",
                    justifyContent: "center",
                    padding: "0px 26px 0px 26px",
                  }}
                >
                  2
                </div>
              </div>
            </Link>

            <Link to="/posting/write">
              <Button
                style={{
                  width: "80px",
                  height: "42px",
                  marginTop: "20px",
                  marginLeft: "880px",
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

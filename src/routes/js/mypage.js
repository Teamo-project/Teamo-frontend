import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigationMenu.module.css";
import home from "../css/home.module.css";
import mypage from "../css/mypage.module.css";
import { useEffect, useState } from "react";
import { getBoardListApi } from "../../apis/boardApi";
import { useSelector } from "react-redux";

// 첫 웹사이트 메인페이지
function Mypage() {
  const userImg = useSelector((state) => state.rootReducer.user.userImg);
  const userName = useSelector((state) => state.rootReducer.user.userName);
  const userEmail = useSelector((state) => state.rootReducer.user.userEmail);

  // 홈화면에 보이기 위한 조건에 맞는 게시물 리스트 가져오기
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    try {
      const resp = await getBoardListApi(`1`);
      setBoardlist(resp.data.content);
      console.log(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  return (
    <div style={{ width: "100%" }}>
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
          <div>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <Button>게시판</Button>
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
      </div>

      <div
        style={{
          marginTop: "270px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className={mypage.profile}>
          <div className={mypage.profileTop}>프로필</div>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={userImg}
                alt="userimg"
                style={{
                  marginLeft: "34px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "16px",
                  background: "#F1F1F1",
                  boxShadow: "0px 4px 10px 0px rgba(102, 193, 9, 0.20)",
                }}
              />
            </div>
            <div className={mypage.userBox}>
              <div style={{ fontSize: "18px" }}>{userName}</div>
              <div style={{ fontSize: "14px", marginTop: "10px" }}>
                {userEmail}
              </div>
            </div>
          </div>
        </div>
        <div className={mypage.mento}></div>
      </div>

      {/* 가장 아래 footer부분 */}
      <div className={home.footer}>
        <div className={home.footerLeft}>
          <Link to="/" style={{ textDecoration: "none" }}>
            <h2>홀로서기</h2>
          </Link>
          <p>청소년 자립 지원 공공 서비스</p>
          <div>연락처 : 010-4470-2175</div>
          <div>이메일 : chandelier7642@gmail.com</div>
          <div>주소 : 세종대학교 학생회관 B123</div>
        </div>
        <div className={home.footerRight}>
          <div className={home.footerAgency}>
            <h4>협업 정부 기관</h4>
            <div>여성가족부</div>
            <div>청소년자립지원단</div>
            <div>한국청소년상담복지개발원</div>
            <div>한국청소년정책연구원</div>
            <div>한국청소년활동진흥원</div>
          </div>
          <div className={home.footerSponsor}>
            <h4>후원사</h4>
            <div>삼성재단</div>
            <div>LG재단</div>
            <div>카카오</div>
          </div>
          <div className={home.footerSpon}>
            <h4>후원</h4>
            <div>후원 문의</div>
            <div>1644-1211</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mypage;

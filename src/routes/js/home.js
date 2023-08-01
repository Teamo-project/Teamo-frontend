import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import home from "../css/home.module.css";

function Home() {
  return (
    <div>
      <div>
        <Navigation re="home" />
      </div>
      <div className={home.program}>
        <div className={home.program_top}>
          <p>정부 지원 프로그램</p>
          <Button>더보기</Button>
        </div>
        <div className={home.program_pro}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={home.board_total}>
        <div className={home.board_top}>
          <p>소통 게시판</p>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button>더보기</Button>
          </Link>
        </div>
        <div className={home.board}>
          <div className={home.full_board}>
            <p>전체 글</p>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className={home.separate_board}>
            <div className={home.separate_board_firstline}>
              <div className={home.separate_board_part}>
                <p>자유 게시판</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={home.separate_board_part}>
                <p>질문 게시판</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className={home.separate_board_secondline}>
              <div className={home.separate_board_part}>
                <p>정보 게시판</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className={home.separate_board_part}>
                <p>구인/구직 게시판</p>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
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
  );
}

export default Home;

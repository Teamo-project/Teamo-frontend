import Navigation from "../../components/js/navigation";
import mentoStyle from "../css/mento.module.css";
import Posts from "../../components/js/mentoPosts";
import Footer from "../../components/js/footer";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import { Button } from "react-bootstrap";
import axios from "axios";
function mento() {
  function postBtn(num, center) {
    console.log(center);
    return center ? (
      <button
        style={{ backgroundColor: "#66c109" }}
        className={mentoStyle.pageBtn}
      >
        {num}
      </button>
    ) : (
      <button className={mentoStyle.pageBtn}>{num}</button>
    );
  }

  return (
    <div>
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
        <div className={menu.menu}>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button style={{ color: "none" }}>홈</Button>
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
            <Link to="/postlist" style={{ textDecoration: "none" }}>
              <Button style={{ color: "#66c109" }}>멘토멘티</Button>
            </Link>
          </div>
          <div>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>문의</Button>
            </Link>
          </div>
        </div>
        <div className={mentoStyle.searchBox}>
          <div className={mentoStyle.searchBoxContnet}>
            <select className={mentoStyle.classify}>
              <option>분류</option>
            </select>
            <input className={mentoStyle.search}></input>
            <button className={mentoStyle.searchBtn}>검색</button>
          </div>
        </div>
        <div className={mentoStyle.posts}>
          <hr className={mentoStyle.line} style={{ marginTop: "60px" }} />
          <div className={mentoStyle.postsTop}>
            <div className={mentoStyle.postsTopName}>순번 | 분류 | 제목</div>
            <div className={mentoStyle.postsTopRegistInfo}>
              등록자명 | 등록일 | 조회수
            </div>
          </div>
          <hr className={mentoStyle.line} />

          <Posts index={0} />
          <Posts index={1} />
          <Posts index={2} />
          <Posts index={3} />
          <Posts index={4} />
          <Posts index={5} />
          <Posts index={6} />
          <Posts index={7} />
          <Posts index={8} />
          <Posts index={9} />

          <div className={mentoStyle.buttonBox}>
            <Link to={"/createpost"} className={mentoStyle.wirteBtn}>
              <p style={{ margin: "auto" }}>글쓰기</p>
            </Link>
          </div>
          <div className={mentoStyle.pageNum}>
            {postBtn("◀")}
            {postBtn("1")}
            {postBtn("2", true)}
            {postBtn("3")}
            {postBtn("▶")}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default mento;

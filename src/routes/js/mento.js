import Navigation from "../../components/js/navigation";
import mentoStyle from "../css/mento.module.css";
import Posts from "../../components/js/mentoPosts";
import Footer from "../../components/js/footer";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import { Button } from "react-bootstrap";

import Pagination from "react-js-pagination";
import { useState } from "react";
function Mento() {
  const [page, setPage] = useState(1);

  function returnPages(page) {
    console.log(page, "returnPages");
    return (
      <div>
        <Posts index={0} page={page} />
        <Posts index={1} page={page} />
        <Posts index={2} page={page} />
        <Posts index={3} page={page} />
        <Posts index={4} page={page} />
        <Posts index={5} page={page} />
        <Posts index={6} page={page} />
        <Posts index={7} page={page} />
        <Posts index={8} page={page} />
        <Posts index={9} page={page} />
      </div>
    );
  }
  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
    returnPages(page);
  };
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
      </div>
      <div>
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
          {returnPages(page)}
          <div className={mentoStyle.buttonBox}>
            <Link to={"/createpost"} className={mentoStyle.wirteBtn}>
              <p style={{ margin: "auto" }}>글쓰기</p>
            </Link>
          </div>

          <div className={mentoStyle.pageNum}>
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
              className={mentoStyle.pagination}
            />
            {/* {postBtn("◀")}
            {postBtn("1")}
            {postBtn("2", true)}
            {postBtn("3")}
            {postBtn("▶")} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Mento;

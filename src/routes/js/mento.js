import Navigation from "../../components/js/navigation";
import mentoStyle from "../css/mento.module.css";
import Posts from "../../components/js/mentoPosts";
import Footer from "../../components/js/footer";
import { Link } from "react-router-dom";

import menu from "../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Mento() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === "") {
      //전체리스트
    } else {
      //필터로 검색 구현
    }
  };
  const accessToken = localStorage.token;

  const handleCategory = () => {};
  const [boardList, setBoardList] = useState([]);

  const handlePageChange = (page) => {
    setPage(page);

    console.log(page);
  };
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=${page}`,
        {
          headers: {
            Authorization: "Bearer debug",
          },
        }
      )
      .then(function (res) {
        console.log(res);
        setBoardList(res.data.content);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, [page]);

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
            <Link to="/inquire" style={{ textDecoration: "none" }}>
              <Button>문의</Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className={mentoStyle.searchBox}>
          <div className={mentoStyle.searchBoxContnet}>
            <select className={mentoStyle.classify}>
              <option onChange={handleCategory}>분류</option>
              <option>법률</option>
              <option>상담</option>
              <option>기타</option>
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

          {boardList.map((ele) => {
            return (
              <Posts
                category={ele.category}
                title={ele.title}
                id={ele.id}
                createDate={ele.createDate.slice(0, 10)}
                creatorName={ele.creatorName}
                count={ele.count}
              />
            );
          })}

          <div className={mentoStyle.buttonBox}>
            <Link to={"/createpost"} className={mentoStyle.wirteBtn}>
              <p style={{ margin: "auto" }}>글쓰기</p>
            </Link>
          </div>
          <div className={mentoStyle.pageNum}>
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={30}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
              className={mentoStyle.pagination}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Mento;

import Navigation from "../../../components/js/navigation";
import mentoStyle from "../../css/mento.module.css";
import Posts from "../../../components/js/mentoPosts";
import { Link } from "react-router-dom";
import home from "../../css/home.module.css";
import menu from "../../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import Pagination from "react-js-pagination";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
function Mento() {
  const userRole = useSelector((state) => state.persistedReducer.user.userRole);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [boardList, setBoardList] = useState([]);
  const [totalElem, setTotalElem] = useState(0);
  const accessToken = localStorage.getItem("token");

  function getUrl() {
    if (searchText === "" && searchCategory === "")
      return `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=${page}`;
    else if (searchText != "" && searchCategory === "")
      return `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=${page}&title=${searchText}`;
    else if (searchText === "" && searchCategory != "")
      return `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=${page}&category=${searchCategory}`;
    else
      return `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=${page}&category=${searchCategory}&title=${searchText}`;
  }

  useEffect(() => {
    console.log("url", getUrl());
    axios
      .get(getUrl(), {
        headers: {
          Authorization: "Bearer debug",
        },
      })
      .then(function (res) {
        console.log(res.data.totalElements);
        setTotalElem(res.data.totalElements);
        setBoardList(res.data.content);
      })
      .catch(function (res) {
        console.log(res);
      });
  }, [page, searchText, searchCategory]);

  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };
  const handleSearchCategory = (e) => {
    setSearchCategory(e.target.value);
  };

  const handlePageChange = (page) => {
    setPage(page);

    console.log(page);
  };

  return (
    <div>
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
            <select
              className={mentoStyle.classify}
              onChange={handleSearchCategory}
            >
              <option>분류</option>
              <option value="법률">법률</option>
              <option value="상담">상담</option>
              <option value="기타">기타</option>
            </select>
            <input
              onChange={handleSearchText}
              className={mentoStyle.search}
            ></input>
            <button className={mentoStyle.searchBtn}>검색</button>
          </div>
        </div>
        <div className={mentoStyle.posts}>
          <hr className={mentoStyle.line} style={{ marginTop: "60px" }} />
          <div className={mentoStyle.postsTop}>
            <div className={mentoStyle.postsTopName}>순번 | 분류 | 제목</div>
            <div
              className={mentoStyle.postsTopRegistInfo}
              style={{ marginRight: "20px" }}
            >
              등록자명 | 등록일 | 마감여부
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
                isReceipt={ele.isReceipt}
              />
            );
          })}

          <div className={mentoStyle.buttonBox}>
            {accessToken === null || userRole == "mentee" ? (
              ""
            ) : (
              <Link to={"/createpost"} className={mentoStyle.wirteBtn}>
                <p style={{ margin: "auto" }}>글쓰기</p>
              </Link>
            )}
          </div>
          <div className={mentoStyle.pageNum}>
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={totalElem}
              pageRangeDisplayed={5}
              prevPageText={"‹"}
              nextPageText={"›"}
              onChange={handlePageChange}
              className={mentoStyle.pagination}
            />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
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
export default Mento;

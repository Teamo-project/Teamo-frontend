import Navigation from "../../components/js/navigation";
import mentoStyle from "../css/mento.module.css";
import Posts from "../../components/js/mentoPosts";
import Footer from "../../components/js/footer";
import { Link } from "react-router-dom";
function mento() {
  const postBtn = (num) => {
    return <button className={mentoStyle.pageBtn}>{num}</button>;
  };
  return (
    <div>
      <Navigation />
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
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />

        <Posts />
        <Posts />
        <Posts />
        <Posts />

        <div className={mentoStyle.buttonBox}>
          <Link to={"/createpost"} className={mentoStyle.wirteBtn}>
            <p style={{ margin: "auto" }}>글쓰기</p>
          </Link>
        </div>
        <div className={mentoStyle.pageNum}>
          {postBtn("◀")}
          {postBtn("1")}
          {postBtn("2")}
          {postBtn("3")}
          {postBtn("▶")}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default mento;

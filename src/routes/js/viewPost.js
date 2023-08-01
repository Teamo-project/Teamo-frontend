import Navigation from "../../components/js/navigation";
import Footer from "../../components/js/footer";
import post from "../css/post.module.css";
import applyPopup from "../../components/js/applyPopup";
import { useState } from "react";
function ViewPost() {
  function subTitleBack(input, flag) {
    return flag == "1" ? (
      <div className={post.subTitle}>{input}</div>
    ) : (
      <div className={post.subTitle} style={{ background: "#EAEAEA" }}>
        {input}
      </div>
    );
  }
  const [isPopup, setIsPopup] = useState(false);
  const handlePopup = () => {
    setIsPopup(!isPopup);
  };
  return (
    <div>
      <Navigation re="mento" />

      <div className={post.postBox}>
        <div className={post.postTitle}>
          <p className={post.titleText}>법률 지원 멘티 모집</p>
        </div>
        <hr className={post.line}></hr>
        <div className={post.subTitleBox}>
          {subTitleBack("등록자명", 0)} {subTitleBack("최원서", 1)}
          {subTitleBack("등록일", 0)} {subTitleBack("2023.07.30", 1)}
        </div>
        <hr className={post.line}></hr>
        <div className={post.subTitleBox}>
          {subTitleBack("조회수", 0)} {subTitleBack("20", 1)}
          {subTitleBack("분류", 0)} {subTitleBack("법률", 1)}
        </div>
        <hr className={post.line}></hr>

        <div className={post.mainText}>
          글의 내용
          <div className={post.recruitment}>모집인원 3 / 10</div>
        </div>
        <div className={post.mentoring}>
          <p className={post.mentoringText}>멘토링 연결 신청</p>

          <button className={post.mentoringBtn} onClick={handlePopup}>
            신청하러가기
          </button>
        </div>
      </div>

      {isPopup ? "POPUP" : ""}
      <Footer />
    </div>
  );
}
export default ViewPost;

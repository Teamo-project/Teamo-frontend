import Navigation from "../../components/js/navigation";
import Footer from "../../components/js/footer";
import post from "../css/post.module.css";
import applyPopup from "../../components/js/applyPopup";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function ViewPost(id) {
  const [info, setInfo] = useState({
    title: "",
    description: "",
    category: "",
    limited: "",
  });
  const [count, setCount] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${2}`
      )
      .then(function (res) {
        setInfo({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          limited: res.data.limited,
        });
        console.log(info, "zzz");
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

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
  const editRequest = () => {
    axios
      .put(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/1",
        {
          title: "법률 멘토링",
          description: "abcde",
          category: "법률",
          limited: 5,
        },
        {
          headers: {
            Authorization: "Bearer debug",
          },
        }
      )
      .then(function (res) {
        console.log(res.data);
        setCount(res.data.count);
        console.log(res.data);
      });
  };

  return (
    <div>
      <Navigation re="mento" />

      <div className={post.postBox}>
        <div className={post.postTitle}>
          <p className={post.titleText}>{info.title}</p>
        </div>
        <hr className={post.line}></hr>
        <div className={post.subTitleBox}>
          {subTitleBack("등록자명", 0)} {subTitleBack("최원서", 1)}
          {subTitleBack("등록일", 0)} {subTitleBack("2023.07.30", 1)}
        </div>
        <hr className={post.line}></hr>
        <div className={post.subTitleBox}>
          {subTitleBack("분류", 0)} {subTitleBack(info.category, 1)}
          {subTitleBack("조회수", 0)} {subTitleBack("20", 1)}
        </div>
        <hr className={post.line}></hr>

        <div className={post.mainText}>
          {info.description}
          <div className={post.recruitment}>모집인원 3 / {info.limited}</div>
        </div>
        <div className={post.mentoring}>
          <p className={post.mentoringText}>멘토링 연결 신청</p>

          <button className={post.mentoringBtn} onClick={handlePopup}>
            신청하러가기
          </button>
          <Link to="/editpost">
            <button className={post.mentoringBtn} onClick={editRequest}>
              Edit
            </button>
          </Link>
          <button className={post.mentoringBtn} onClick={editRequest}>
            접수 마감
          </button>
        </div>
      </div>
      {isPopup ? "POPUP" : ""}
      <Footer />
    </div>
  );
}
export default ViewPost;

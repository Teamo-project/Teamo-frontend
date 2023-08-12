import Navigation from "../../components/js/navigation";
import Footer from "../../components/js/footer";
import post from "../css/post.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import { Button } from "react-bootstrap";

function ViewPost() {
  const accessToken = localStorage.token;
  const postingId = useParams().postingId;

  console.log(postingId);
  const [info, setInfo] = useState({
    title: "",
    description: "",
    category: "",
    limited: "",
    name: "",
    count: "",
  });
  const [count, setCount] = useState("");
  useEffect(() => {
    axios
      .get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${postingId}`
      )
      .then(function (res) {
        setInfo({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          limited: res.data.limited,
          name: res.data.mentorInfo.name,
          count: res.data.count,
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
            Authorization: `Bearer ${accessToken}`,
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
      {console.log(postingId)}
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
            {isPopup ? (
              <div className={post.applyPopup}>
                <p className={post.applyTitle}>신청 양식</p>
                <div className={post.applyInputBox}>
                  <input
                    className={post.applyInput}
                    placeholder={"이름"}
                  ></input>
                  <input
                    className={post.applyInput}
                    placeholder={"주소"}
                  ></input>
                  <input
                    className={post.applyInput}
                    placeholder={"전화번호"}
                  ></input>
                </div>
                <button className={post.applyBtn}>신청버튼</button>
              </div>
            ) : (
              ""
            )}
            <div className={post.recruitment}>
              모집인원 {info.count} / {info.limited}
            </div>
          </div>

          <div className={post.mentoring}>
            <p className={post.mentoringText}>멘토링 연결 신청</p>

            <button className={post.mentoringBtn} onClick={handlePopup}>
              신청하러가기
            </button>

            {console.log(accessToken)}
            {accessToken == undefined ? (
              ""
            ) : (
              <Link to="/editpost">
                <button className={post.mentoringBtn} onClick={editRequest}>
                  Edit
                </button>
              </Link>
            )}
            {accessToken == undefined ? (
              ""
            ) : (
              <button className={post.mentoringBtn} onClick={editRequest}>
                접수 마감
              </button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default ViewPost;

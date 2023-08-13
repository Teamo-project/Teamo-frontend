import Navigation from "../../../components/js/navigation";
import Footer from "../../../components/js/footer";
import post from "../../css/post.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import menu from "../../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function ViewPost() {
  const navigate = useNavigate();
  const accessToken = localStorage.token;
  const postingId = useParams().postingId;
  const [description, setDescription] = useState("");
  const [isPopup, setIsPopup] = useState(false);
  const [count, setCount] = useState("");
  console.log(postingId);
  const [info, setInfo] = useState({
    title: "",
    description: "",
    category: "",
    limited: "",
    name: "",
    count: "",
    createDate: "",
  });

  useEffect(() => {
    axios
      .get(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${postingId}`
      )
      .then(function (res) {
        console.log(res.data);
        setInfo({
          title: res.data.title,
          description: res.data.description,
          category: res.data.category,
          limited: res.data.limited,
          name: res.data.mentorInfo.name,
          count: res.data.count,
          createDate: res.data.createDate.slice(0, 10),
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

  const handlePopup = () => {
    setIsPopup(!isPopup);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
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
  const applyRequest = () => {
    if (description == "") {
      alert("지원동기를 입력하십시오.");
    } else {
      axios
        .post(
          "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentee/2",
          {
            description: description,
          },
          {
            headers: { Authorization: "Bearer debug" },
          }
        )
        .then((res) => {
          console.log(res);
          navigate("/postlist");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const handlePopupCancel = () => {
    setIsPopup(false);
  };
  return (
    <div>
      {isPopup ? (
        <div>
          <div className={post.popupBackground}></div>
          <div className={post.applyPopup}>
            <button onClick={handlePopupCancel} className={post.popupCancel}>
              x
            </button>
            <p className={post.applyTitle}>멘티 지원</p>
            <div className={post.applyInputBox}>
              <div
                style={{
                  display: "flex",
                  width: "428px",
                  margin: "0 auto",
                }}
              >
                <div style={{ width: "200px" }}>
                  <p className={post.popupText}>성함</p>
                  <input
                    className={post.applyInput}
                    style={{ width: "200px" }}
                  ></input>
                </div>
                <div style={{ width: "100px", marginLeft: "26px" }}>
                  <p className={post.popupText}>성별</p>
                  <input
                    style={{ width: "100px" }}
                    className={post.applyInput}
                  ></input>
                </div>
              </div>

              <div className={post.inputDiv}>
                <p className={post.popupText}>이메일</p>
                <br />
                <input className={post.applyInput}></input>
              </div>
              <div className={post.inputDiv}>
                <p className={post.popupText}>나이</p>
                <input className={post.applyInput}></input>
              </div>
              <div className={post.inputDiv}>
                <p className={post.popupText}>주 거주 지역</p>
                <input className={post.applyInput}></input>
              </div>
              <div className={post.inputDiv}>
                <p className={post.popupText}>지원 동기</p>
                <input
                  onChange={handleDescription}
                  className={post.applyInput}
                  style={{ height: "182px" }}
                ></input>
              </div>
            </div>
            <button onClick={applyRequest} className={post.applyBtn}>
              지원하기
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
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
            {subTitleBack("등록자명", 0)} {subTitleBack(info.title, 1)}
            {subTitleBack("등록일", 0)} {subTitleBack(info.createDate, 1)}
          </div>
          <hr className={post.line}></hr>
          <div className={post.subTitleBox}>
            {subTitleBack("분류", 0)} {subTitleBack(info.category, 1)}
            {subTitleBack("조회수", 0)} {subTitleBack("조회수 어카쥥", 1)}
          </div>
          <hr className={post.line}></hr>

          <div className={post.mainText}>
            {info.description}

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

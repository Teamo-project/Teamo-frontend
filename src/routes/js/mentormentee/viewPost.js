import Navigation from "../../../components/js/navigation";
import Footer from "../../../components/js/footer";
import home from "../../css/home.module.css";
import post from "../../css/post.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import menu from "../../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { isRejected } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
function ViewPost() {
  const userRole = useSelector((state) => state.persistedReducer.user.userRole);
  console.log(userRole);
  const navigate = useNavigate();
  const accessToken = localStorage.token;
  const postingId = useParams().postingId;
  const [description, setDescription] = useState("");
  const [isPopup, setIsPopup] = useState(false);

  const [mentees, setMentees] = useState([]);
  console.log(postingId);
  const [info, setInfo] = useState({
    isReceipt: "",
    title: "",
    description: "",
    category: "",
    limited: "",
    name: "",
    count: "",
    createDate: "",
  });

  useEffect(() => {
    if (accessToken == "") {
      alert("로그인을 진행해주세요!");
      navigate("/login");
    } else {
      axios
        .get(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${postingId}`,
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then(function (res) {
          setMentees(res.data.menteees);
          console.log(mentees);
          setInfo({
            isReceipt: res.data.isReceipt,
            title: res.data.title,
            description: res.data.description,
            category: res.data.category,
            limited: res.data.limited,
            name: res.data.mentorInfo.name,
            count: res.data.count,
            createDate: res.data.createDate.slice(0, 10),
          });
        })
        .catch(function (err) {
          console.log(err);
        });
    }
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
    if (accessToken === undefined) {
      alert("로그인 해주세요.");
      navigate("/login");
    } else setIsPopup(!isPopup);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const deleteRequest = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      axios
        .delete(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${postingId}`
        )
        .then((res) => {
          navigate("/postlist");
          alert("삭제되었습니다.");
        });
    } else {
      alert("취소합니다.");
    }
  };
  const endRequest = () => {
    axios
      .patch(
        `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/${postingId}/receipt`
      )
      .then(() => {
        setInfo({ isReceipt: false });
        console.log(info);
        navigate("/postlist");
        alert("마감되었습니다.");
      });
  };
  const applyRequest = () => {
    if (info.isReceipt === false) {
      alert("마감되었습니다.");
    } else if (description === "") {
      alert("지원동기를 입력하십시오.");
    } else {
      axios
        .post(
          `http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentee/${postingId}`,
          {
            description: description,
          },
          {
            headers: { Authorization: `Bearer ${accessToken}` },
          }
        )
        .then((res) => {
          alert("지원이 완료되었습니다!");
          navigate("/postlist");
        })
        .catch((err) => {
          alert(err.response.data.message);
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
      {console.log(info.isReceipt)}
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

        <div className={post.postBox}>
          <div className={post.postTitle}>
            <p className={post.titleText}>{info.title}</p>
          </div>
          <hr className={post.line}></hr>
          <div className={post.subTitleBox}>
            {subTitleBack("등록자명", 0)} {subTitleBack(info.name, 1)}
            {subTitleBack("등록일", 0)} {subTitleBack(info.createDate, 1)}
          </div>
          <hr className={post.line}></hr>
          <div className={post.subTitleBox}>
            {subTitleBack("분류", 0)} {subTitleBack(info.category, 1)}
            {subTitleBack("마감여부", 0)}{" "}
            {subTitleBack(info.isReceipt == true ? "모집중" : "마감", 1)}
          </div>
          <hr className={post.line}></hr>

          <div className={post.mainText}>
            {info.description}
            {info.isReceipt == true ? (
              <div className={post.recruitment}>
                모집인원 {info.count} / {info.limited}
              </div>
            ) : (
              ""
            )}
          </div>

          <div className={post.mentoring}>
            {userRole === "mentee" ? (
              <div>
                <p className={post.mentoringText}>멘토링 연결 신청</p>
                <button className={post.mentoringBtn} onClick={handlePopup}>
                  신청하러가기
                </button>
              </div>
            ) : (
              ""
            )}

            {console.log(accessToken)}
            {accessToken == undefined || userRole == "mentee" ? (
              ""
            ) : (
              <Link
                to={`/editpost/${postingId}`}
                style={{ textDecoration: "none" }}
              >
                <button className={post.mentoringBtn}>수정하기</button>
              </Link>
            )}
            {accessToken == undefined || userRole == "mentee" ? (
              ""
            ) : (
              <button className={post.mentoringBtn} onClick={endRequest}>
                접수 마감
              </button>
            )}
            {accessToken == undefined || userRole == "mentee" ? (
              ""
            ) : (
              <button className={post.mentoringBtn} onClick={deleteRequest}>
                삭제하기
              </button>
            )}
          </div>
          {userRole === "mentor" ? (
            <div className={post.mentoring} style={{ marginRight: "10px" }}>
              <p style={{ marginLeft: "20px" }}>신청한 멘티</p>

              {mentees === undefined
                ? ""
                : mentees.map((ele) => {
                    console.log(ele.menteeName);
                    return (
                      <button className={post.menteeBtn}>
                        {ele.menteeName}
                      </button>
                    );
                  })}
            </div>
          ) : (
            ""
          )}
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
export default ViewPost;

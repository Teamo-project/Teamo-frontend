import Navigation from "../../components/js/navigation";
import Footer from "../../components/js/footer";
import post from "../css/createPost.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import menu from "../../components/css/navigationMenu.module.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
function CreatePost() {
  const accessToken = localStorage.token;
  console.log(accessToken);
  const registor = useSelector((state) => state.rootReducer.user.userName);
  const [mainText, setMainText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [recruit, setRecruit] = useState("");
  const today = new Date();
  const navigate = useNavigate();
  const registDay =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDate();
  const handleRecruit = (e) => {
    setRecruit(e.target.value);
  };
  const handleMainText = (e) => {
    setMainText(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
    console.log(title, mainText, category);
  };

  const posting = () => {
    axios //멘토링 게시글 생성
      .post(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring",
        {
          title: title,
          description: mainText,
          category: category,
          limited: recruit,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      )
      .then(function (res) {
        console.log(res);
        navigate("/postlist");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
    console.log(isPopup);
    setIsPopup(!isPopup);
  };
  return (
    <div>
      {console.log(registor, "zz")}
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
            <input
              onChange={handleTitle}
              placeholder="제목을 입력해주세요"
              className={post.titleText}
            ></input>
          </div>
          <hr className={post.line}></hr>
          <div className={post.subTitleBox}>
            {subTitleBack("등록자명", 0)} {subTitleBack(registor, 1)}
            {subTitleBack("등록일", 0)} {subTitleBack(registDay, 1)}
          </div>
          <hr className={post.line}></hr>
          <div className={post.subTitleBox}>
            {subTitleBack("분류", 0)}
            <select
              onClick={handleCategory}
              className={post.subTitle}
              style={{ width: "270px" }}
            >
              <option value="" disabled selected>
                분류 선택
              </option>
              <option value={"법률"}>법률</option>
              <option value={"상담"}>상담</option>
              <option value={"기타"}>기타</option>
            </select>
            {subTitleBack("모집 ", 0)}
            <select
              onClick={handleRecruit}
              className={post.subTitle}
              style={{ width: "270px" }}
            >
              <option value="" disabled selected>
                ㅣ눤 선택
              </option>
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"7"}>7</option>
              <option value={"8"}>8</option>
              <option value={"9"}>9</option>
              <option value={"10"}>10</option>
            </select>
          </div>
          <hr className={post.line}></hr>

          <div className={post.mainText}>
            <textarea
              onChange={handleMainText}
              placeholder="글을 작성하세요"
              className={post.mainTextInput}
            ></textarea>
          </div>

          <button className={post.createBtn} onClick={posting}>
            작성하기
          </button>
        </div>

        {isPopup ? "POPUP" : ""}
      </div>
      <Footer />
    </div>
  );
}
export default CreatePost;

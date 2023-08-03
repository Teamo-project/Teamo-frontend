import Navigation from "../../components/js/navigation";
import Footer from "../../components/js/footer";
import post from "../css/createPost.module.css";

import { useState } from "react";
import axios from "axios";

function CreatePost() {
  const [mainText, setMainText] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const today = new Date();
  const registDay =
    today.getFullYear() + "." + (today.getMonth() + 1) + "." + today.getDay();

  const handleMainText = (e) => {
    setMainText(e.target.value);
  };
  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleCategory = (e) => {
    setCategory(e.target.value);
  };
  console.log(title, mainText, category);
  const posting = () => {
    axios
      .post(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring",
        {
          title: title,
          description: mainText,
          category: category,
          limited: 5,
        },
        {
          headers: {
            Authorization: "Bearer debug",
          },
        }
      )
      .then(function (res) {
        console.log(res);
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
      <Navigation re="mento" />

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
          {subTitleBack("등록자명", 0)} {subTitleBack("최원서", 1)}
          {subTitleBack("등록일", 0)} {subTitleBack(registDay, 1)}
        </div>
        <hr className={post.line}></hr>
        <div className={post.subTitleBox}>
          {subTitleBack("조회수", 0)} {subTitleBack("20", 1)}
          {subTitleBack("분류", 0)}{" "}
          <select
            onClick={handleCategory}
            className={post.subTitle}
            style={{ width: "270px" }}
          >
            <option value={"legacy"}>법률</option>
            <option value={"서버"}>아무</option>
            <option value={"정해"}>거나</option>
            <option value={"주는거"}>항목</option>
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
        <div className={post.recruitment}>모집인원 3 / 10</div>
        <button className={post.createBtn} onClick={posting}>
          작성하기
        </button>
      </div>

      {isPopup ? "POPUP" : ""}
      <Footer />
    </div>
  );
}
export default CreatePost;

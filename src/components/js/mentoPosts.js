import { Link } from "react-router-dom";
import mentoStyle from "../../routes/css/mento.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Posts(index) {
  const [postInfo, setPostInfo] = useState({
    category: "",
    title: "",
    id: "",
    registDate: "",
    userName: "",
    count: "",
  });

  const getMentoringList = () => {
    axios
      .get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/mentoring/list?page=1",
        {
          headers: {
            Authorization: "Bearer debug",
          },
        }
      )
      .then(function (res) {
        console.log(res.data.content, "zz");
        setPostInfo({
          category: res.data.content[index.index].category,
          title: res.data.content[index.index].title,
          id: res.data.content[index.index].id,
          registDate: res.data.content[index.index].registDate,
          userName: res.data.content[index.index].userName,
        });
      })
      .catch(function (res) {
        console.log(res);
      });
  };

  return (
    <div>
      {getMentoringList()}

      <div className={mentoStyle.postsContent}>
        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "42px" }}>{postInfo.id}</flex>{" "}
          <flex> {postInfo.category}</flex>
          <Link to="/viewpost" className={mentoStyle.linkPage}>
            <span>{postInfo.title}</span>
          </Link>
        </div>

        <div className={mentoStyle.postsContents}>
          <flex style={{ marginRight: "30px" }}>{postInfo.userName}</flex>{" "}
          <flex style={{ marginRight: "30px" }}>{postInfo.registDate}</flex>{" "}
          <flex style={{ marginRight: "15px" }}>{postInfo.count}</flex>
        </div>
      </div>
      <hr className={mentoStyle.line2}></hr>
    </div>
  );
}
export default Posts;

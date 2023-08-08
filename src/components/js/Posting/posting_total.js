import { Link } from "react-router-dom";
import post from "../../../../src/routes/css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBoardListApi } from "../../../apis/boardApi";
function Posting_total() {
  // 모든 게시물 가져오기
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    try {
      const resp = await getBoardListApi();
      setBoardlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  // 아래는 예시화면
  // const hi = [
  //   {
  //     posting_id: "3",
  //     createDate: "2022-11-33 ~~~~~~~~~~",
  //     user_id: "3",
  //     title: "제목3",
  //     content: "내용3",
  //     category: "자유",
  //   },
  //   {
  //     posting_id: "2",
  //     createDate: "2022-11-22",
  //     user_id: "유저2",
  //     title: "제2",
  //     content: "내용2",
  //     category: "정보",
  //   },
  //   {
  //     posting_id: "1",
  //     createDate: "2022-21-11",
  //     user_id: "유저1",
  //     title: "제목1",
  //     content: "내용1",
  //     category: "구인구직",
  //   },
  //   {
  //     posting_id: "4",
  //     createDate: "2022-21-11",
  //     user_id: "유저4",
  //     title: "제목4",
  //     content: "내용4",
  //     category: "질문",
  //   },
  //   {
  //     posting_id: "5",
  //     createDate: "2022-21-11",
  //     user_id: "익명5",
  //     title: "제목5",
  //     content: "내용5",
  //     category: "자유",
  //   },
  // ];
  // 모든 게시물 보이기
  return (
    <div className={post.ten_post}>
      {boardlist.map((board) => {
        return (
          <Link
            to={`/posting/${board.posting_id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "980px",
                height: "60px",
                boxSizing: "border-box",
                borderBottom: "1px solid lightgray",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "20px",
                  height: "20px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 28px",
                }}
              >
                {board.posting_id}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "70px",
                  height: "32px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 3px",
                }}
              >
                {board.category}
              </div>
              <div
                style={{
                  display: "flex",
                  // alignItems: "",
                  width: "460px",
                  height: "20px",
                  fontWeight: "700",
                  fontSize: "16px",
                  padding: "0px 20px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {board.title}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "77px",
                  height: "32px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 8px",
                  marginLeft: "50px",
                }}
              >
                익명{board.user_id}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "146px",
                  height: "32px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "flex-start",
                  padding: "0px 4px",
                  marginLeft: "8px",
                }}
              >
                {board.createDate}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posting_total;

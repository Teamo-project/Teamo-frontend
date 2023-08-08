import { Link } from "react-router-dom";
import post from "../../../../src/routes/css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBoardListApi } from "../../../apis/boardApi";

function Posting_free() {
  //모든 게시물들 가져오기
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

  // 댓글수 number변수(할지 안할지 모름)
  const [number, setNumber] = useState(0);

  return (
    <div className={post.ten_post}>
      {/* 게시물 카테고리 자유인 게시물들 가져오기 */}
      {boardlist.map((board) => {
        if (board.category === "자유") {
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
        }
      })}
    </div>
  );
}

export default Posting_free;

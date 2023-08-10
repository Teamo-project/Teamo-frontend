import { Link } from "react-router-dom";
import post from "../../../../src/routes/css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getBoardListApi } from "../../../apis/boardApi";
function Posting_total(page) {
  // 모든 게시물 가져오기
  const [boardlist, setBoardlist] = useState([]);

  const getboardlist = async () => {
    try {
      const resp = await getBoardListApi(page.page);
      console.log(page.page);
      setBoardlist(resp.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  // 모든 게시물 보이기
  return (
    <div className={post.ten_post}>
      {boardlist.map((board) => {
        return (
          <Link
            to={`/posting/${board.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "980px",
                height: "60px",
                boxSizing: "border-box",
                borderBottom: "1px solid #e7e7e7",
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
                {board.id}
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
                익명
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
                {board.createDate.substring(0, 10)}
              </div>
              <div>0</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posting_total;

import Navigation from "../navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import post from "../../../../src/routes/css/posting.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

function Posting_total() {
  const [boardlist, setBoardlist] = useState([]);

  let number = 0;

  const getboardlist = async () => {
    try {
      const resp = await axios.get(
        "http://ec2-3-37-185-169.ap-northeast-2.compute.amazonaws.com:8080/v1/posting"
      );
      setBoardlist(resp.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getboardlist();
  }, []);

  return (
    <div className={post.ten_post}>
      {boardlist.map((board) => {
        number = number + 1;
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
                {number}
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
                  marginLeft: "80px",
                }}
              >
                {board.user_id}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "73px",
                  height: "32px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 4px",
                }}
              >
                {board.createDate}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "31px",
                  height: "32px",
                  fontWeight: "700",
                  fontSize: "16px",
                  justifyContent: "center",
                  padding: "0px 26px 0px 26px",
                }}
              >
                댓글수
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Posting_total;

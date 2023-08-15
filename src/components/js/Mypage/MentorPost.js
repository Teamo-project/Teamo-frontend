import axios from "axios";
import home from "../../../routes/css/home.module.css";
import Mentor from "../../css/Mypage/Mentor.module.css";
import { useState } from "react";
function MentorPost(postingInfo) {
  const accessToken = localStorage.getItem("token");
  console.log(postingInfo, "in MentorPost Component");
  return (
    <div>
      <h3>내가 쓴 멘토링 글</h3>
      <div className={home.programPro}>
        <a
          href="https://jaripon.ncrc.or.kr/home/kor/support/projectMng/edit.do?menuPos=1&idx=374&act=&searchValueList2=1&searchValue5=&searchValue6=0&searchKeyword=&searchValue1=A&pageIndex=2"
          target="_blank"
          style={{ textDecoration: "none", color: "black" }}
        >
          <div
            style={{
              padding: "16px 10px",
              position: "relative",
            }}
          >
            <div
              style={{
                paddingBottom: "10px",
                borderBottom: "1px solid lightgray",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: "12px",
                  fontWeight: "700",
                  lineHeight: "14px",
                  marginLeft: "14px",
                  border: "1px solid #66c109",
                  color: "#66C109",
                  fontSize: "0.8rem",
                  width: "128px",
                  height: "24px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                자립 지원 / 기타
              </div>
              <div
                style={{
                  width: "114px",
                  height: "14px",
                  color: "#ADADAD",
                  fontSize: "12px",
                  marginRight: "10px",
                }}
              >
                마감일자 2023.08.10
              </div>
            </div>

            <div
              style={{
                width: "400px",
                height: "50px",
                padding: "22px 20px 0px",
                fontSize: "20px",
                fontWeight: "700",
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              바람개비서포터즈 14기 3차모집
            </div>
            <div
              style={{
                width: "320px",
                height: "40px",
                textOverflow: "ellipsis",
                overflow: "hidden",
                fontSize: "1rem",
                padding: "0px 20px",
              }}
            >
              직종별 전문가 멘토링 및 지역별 모임, 방문교육이 있습니다.
            </div>
            <div
              style={{
                display: "flex",
                position: "absolute",
                fontSize: "0.8rem",
                top: "208px",
              }}
            >
              <div
                style={{
                  paddingLeft: "18px",
                  borderRight: "2px solid gray",
                  paddingRight: "10px",
                }}
              >
                서울 자립지원 전담기관
              </div>
              <div style={{ marginLeft: "7px" }}>전국</div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default MentorPost;

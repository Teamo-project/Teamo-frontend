import Navigation from "../../components/js/navigation";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import menu from "../../components/css/navigation_menu.module.css";
import pro_list from "../../components/js/program_public";
import { useState } from "react";
import post from "../css/program.module.css";
import { useNavigate } from "react-router-dom";
import program_total from "../../components/js/Program/program_total";
import Program_total from "../../components/js/Program/program_total";
import Program_pub from "../../components/js/Program/program_pub";
import Program_private from "../../components/js/Program/program_private";
import Program_house from "../../components/js/Program/house";
import Program_cash from "../../components/js/Program/cash";
import Program_job from "../../components/js/Program/job";
import Program_fur_education from "../../components/js/Program/fur_education";
import Program_etc from "../../components/js/Program/etc";

function Program() {
  const [program, setProgram] = useState(pro_list);
  const navigate = useNavigate();
  const [number, setNumber] = useState("0");
  const total_button = () => {
    setNumber("0");
  };
  const public_button = () => {
    setNumber("1");
  };
  const private_button = () => {
    setNumber("2");
  };
  const number3 = () => {
    setNumber("3");
  };
  const number4 = () => {
    setNumber("4");
  };
  const number5 = () => {
    setNumber("5");
  };
  const number6 = () => {
    setNumber("6");
  };
  const number7 = () => {
    setNumber("7");
  };

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className={menu.menu}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>홈</Button>
        </Link>
        <div className={menu.post}>
          <Link to="/posting" style={{ textDecoration: "none" }}>
            <Button>
              게시판 <i class="fa-solid fa-angle-down"></i>
            </Button>
          </Link>
          <ul className={menu.list}>
            <Link to="/posting" style={{ textDecoration: "none" }}>
              <li>전체 게시판</li>
            </Link>
            <Link
              to="/posting/category=자유"
              style={{ textDecoration: "none" }}
            >
              <li>자유 게시판</li>
            </Link>
            <Link
              to="/posting/category=질문"
              style={{ textDecoration: "none" }}
            >
              <li>질문 게시판</li>
            </Link>
            <Link
              to="/posting/category=정보"
              style={{ textDecoration: "none" }}
            >
              <li>정보 게시판</li>
            </Link>
            <Link
              to="/posting/category=구인구직"
              style={{ textDecoration: "none" }}
            >
              <li>구인/구직 게시판</li>
            </Link>
          </ul>
        </div>
        <Link to="/program" style={{ textDecoration: "none" }}>
          <Button style={{ color: "#66c109" }}>프로그램</Button>
        </Link>

        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>멘토멘티신청</Button>
        </Link>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button>문의</Button>
        </Link>
      </div>

      <div className={post.first_button}>
        <span>주관사</span>
        <Button onClick={total_button}>전체</Button>
        <Button onClick={public_button}>공공</Button>
        <Button onClick={private_button}>민간</Button>
      </div>
      <div className={post.second_button}>
        <span>카테고리</span>
        <Button onClick={number3}>주거</Button>
        <Button onClick={number4}>취업</Button>
        <Button onClick={number5}>금융</Button>
        <Button onClick={number6}>진학</Button>
        <Button onClick={number7}>기타</Button>
      </div>
      <div style={{ width: "100%" }}>
        {number === "0" ? (
          <Program_total />
        ) : number === "1" ? (
          <Program_pub />
        ) : number === "2" ? (
          <Program_private />
        ) : number === "3" ? (
          <Program_house />
        ) : number === "4" ? (
          <Program_job />
        ) : number === "5" ? (
          <Program_cash />
        ) : number === "6" ? (
          <Program_fur_education />
        ) : (
          <Program_etc />
        )}
      </div>
    </div>
  );
}

export default Program;
